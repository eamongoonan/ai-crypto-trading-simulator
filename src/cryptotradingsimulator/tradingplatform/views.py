import json
import datetime
from decimal import Decimal
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_POST
from django.http import HttpResponseRedirect, JsonResponse, HttpResponseForbidden
from django.contrib import messages
from .models import PlatformUser, Position
from .forms import TradeForm, SellForm
from .get_user_pnl_roi import get_user_all_time_pnl, get_user_all_time_roi
from .live_coin_price import usd_coin_exchange, coin_usd_exchange
from .ai_sentiment import analyze_news_sentiment
from .ai_chatbot import chat as chatbot_chat


def index(request):
    new_user = True
    if request.user.is_authenticated:
        logged_in_user = get_object_or_404(PlatformUser, user=request.user)
        user_positions = Position.objects.filter(user=logged_in_user)
        open_positions = user_positions.filter(closed_at=None)
        closed_positions = user_positions.filter(closed_at__isnull=False)
        if closed_positions.count() != 0:
            logged_in_user.PNL = get_user_all_time_pnl(logged_in_user)
            logged_in_user.ROI = get_user_all_time_roi(logged_in_user)
            logged_in_user.save()
        if open_positions.count() != 0 or closed_positions.count() != 0:
            new_user = False
    else:
        logged_in_user = None
        open_positions = None

    context = {
        'platform_user': [logged_in_user] if logged_in_user else [],
        'open_positions': open_positions,
        'new_user': new_user,
    }
    return render(request, 'index.html', context)


@login_required
def trade(request):
    logged_in_user = get_object_or_404(PlatformUser, user=request.user)
    if request.method == "POST":
        form = TradeForm(request.POST)
        if form.is_valid():
            new_position = form.save(commit=False)
            purchase_amount = new_position.USD_value_of_purchase
            if logged_in_user.balance < purchase_amount:
                messages.error(request, f"Insufficient balance. You have ${logged_in_user.balance:.2f} available.")
                return HttpResponseRedirect("/trade")
            new_position.user = logged_in_user
            new_position.coin_amount = usd_coin_exchange(
                float(purchase_amount), str(new_position.cryptocurrency)
            )
            logged_in_user.balance -= purchase_amount
            new_position.save()
            logged_in_user.save()
            messages.success(
                request,
                f"Trade executed: {new_position.coin_amount:.6f} {new_position.cryptocurrency} "
                f"purchased for ${float(purchase_amount):.2f}"
            )
            messages.success(request, "Check your Portfolio for updates on this trade.")
            return HttpResponseRedirect("/trade")
    else:
        form = TradeForm()
    context = {'platform_user': [logged_in_user], 'form': form}
    return render(request, 'trade.html', context)


@login_required
def portfolio(request):
    logged_in_user = get_object_or_404(PlatformUser, user=request.user)
    user_positions = Position.objects.filter(user=logged_in_user)
    open_positions = user_positions.filter(closed_at=None).order_by('-created_at')
    closed_positions = user_positions.filter(closed_at__isnull=False).order_by('-closed_at')

    for position in open_positions:
        position.current_coin_value = coin_usd_exchange(
            position.coin_amount, str(position.cryptocurrency)
        )
        if position.USD_value_of_purchase:
            position.ROI = (
                (position.current_coin_value - float(position.USD_value_of_purchase))
                / float(position.USD_value_of_purchase) * 100
            )
        position.save()

    if request.method == 'POST':
        position_id = request.POST.get('position_id')
        sold_position = get_object_or_404(Position, id=position_id)
        if sold_position.user != logged_in_user:
            return HttpResponseForbidden("You do not own this position.")
        if sold_position.closed_at is not None:
            messages.error(request, "This position is already closed.")
            return HttpResponseRedirect("/portfolio")

        sold_position.USD_value_of_sale = sold_position.current_coin_value
        sold_position.closed_at = datetime.datetime.now()
        sold_position.PNL = sold_position.USD_value_of_sale - float(sold_position.USD_value_of_purchase)
        sold_position.ROI = sold_position.PNL / float(sold_position.USD_value_of_purchase) * 100
        logged_in_user.balance += Decimal(str(sold_position.USD_value_of_sale))
        sold_position.save()
        logged_in_user.save()

        profit_loss_message = (
            "Well done! You made a profit from this trade. "
            if sold_position.PNL > 0
            else "You made a loss from this trade. Consider trying a new strategy. "
        )
        messages.success(
            request,
            f"Position closed: {sold_position.coin_amount:.6f} {sold_position.cryptocurrency} "
            f"sold for ${sold_position.USD_value_of_sale:.2f}"
        )
        messages.success(request, profit_loss_message + f"ROI: {sold_position.ROI:.2f}%")
        return HttpResponseRedirect("/portfolio")

    context = {
        'platform_user': [logged_in_user],
        'open_positions': open_positions,
        'closed_positions': closed_positions,
        'form': SellForm(),
    }
    return render(request, 'portfolio.html', context)


@login_required
def following(request):
    logged_in_user = get_object_or_404(PlatformUser, user=request.user)
    import os
    context = {
        'platform_user': [logged_in_user],
        'rapidapi_key': os.environ.get('RAPIDAPI_KEY', ''),
    }
    return render(request, 'following.html', context)


@login_required
def balance(request):
    logged_in_user = get_object_or_404(PlatformUser, user=request.user)
    return render(request, 'balance.html', {'platform_user': [logged_in_user]})


@login_required
def news_feed(request):
    import os
    context = {'news_ws_token': os.environ.get('NEWS_WS_TOKEN', '')}
    return render(request, 'news-feed.html', context)


@login_required
def chatbot(request):
    logged_in_user = get_object_or_404(PlatformUser, user=request.user)
    return render(request, 'chatbot.html', {'platform_user': [logged_in_user]})


@login_required
@require_POST
def chatbot_api(request):
    try:
        data = json.loads(request.body)
        messages = data.get('messages', [])
        if not messages or not isinstance(messages, list):
            return JsonResponse({'error': 'messages required'}, status=400)
        for m in messages:
            if m.get('role') not in ('user', 'assistant') or not isinstance(m.get('content'), str):
                return JsonResponse({'error': 'invalid message format'}, status=400)
        reply = chatbot_chat(messages)
        return JsonResponse({'reply': reply})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)


@login_required
@require_POST
def sentiment_analysis(request):
    try:
        data = json.loads(request.body)
        title = data.get('title', '')
        body = data.get('body', '')
        if not title:
            return JsonResponse({'error': 'title required'}, status=400)
        result = analyze_news_sentiment(title, body)
        return JsonResponse(result)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
