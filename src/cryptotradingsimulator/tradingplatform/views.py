import datetime
import json
from django.shortcuts import render
from .models import PlatformUser, Position
from .forms import TradeForm, SellForm
from django.contrib import messages
from django.http import HttpResponseRedirect
from .get_user_pnl_roi import get_user_all_time_pnl, get_user_all_time_roi
from .live_coin_price import usd_coin_exchange, coin_usd_exchange
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import NewsItem
from .serializers import NewsItemSerializer
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.core.serializers import serialize
from django.http import HttpResponse
from .models import NewsItem




# Create your views here.


def index(request):
    new_user = True
    if request.user.is_authenticated:
        platform_user = PlatformUser.objects.filter(user=request.user.id)
        logged_in_user = platform_user[0]
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
        platform_user = None
        open_positions = None

    context = {'platform_user': platform_user,
               'open_positions': open_positions, 'new_user': new_user}
    return render(request, 'index.html', context)


def trade(request):
    platform_user = PlatformUser.objects.filter(user=request.user.id)
    logged_in_user = platform_user[0]
    if request.method == "POST":
        form = TradeForm(request.POST)
        if form.is_valid():
            new_position = form.save(commit=False)
            new_position.user = logged_in_user
            new_position.coin_amount = usd_coin_exchange(new_position.USD_value_of_purchase,
                                                         str(new_position.cryptocurrency))
            new_balance = logged_in_user.balance - new_position.USD_value_of_purchase
            logged_in_user.balance = new_balance
            new_position.save()
            logged_in_user.save()
            messages.success(request, "Trade Executed Successfully. " + str(round(new_position.coin_amount, 2)) +
                             str(new_position.cryptocurrency) + " purchased for $" +
                             str(round(new_position.USD_value_of_purchase, 2)))
            messages.success(
                request, "Check Your Portfolio for Updates on this Trade.")
            return HttpResponseRedirect("/trade")
    else:
        form = TradeForm
    context = {'platform_user': platform_user, 'form': form}
    return render(request, 'trade.html', context)


def portfolio(request):
    platform_user = PlatformUser.objects.filter(user=request.user.id)
    logged_in_user = platform_user[0]
    user_positions = Position.objects.filter(user=logged_in_user)
    open_positions = user_positions.filter(
        closed_at=None).order_by('-created_at')
    closed_positions = user_positions.filter(
        closed_at__isnull=False).order_by('-closed_at')
    for position in open_positions:
        position.current_coin_value = coin_usd_exchange(
            position.coin_amount, str(position.cryptocurrency))
        position.ROI = (position.current_coin_value -
                        position.USD_value_of_purchase) / position.USD_value_of_purchase * 100
        position.save()

    if request.method == 'POST':
        sold_position = Position.objects.get(id=request.POST['position_id'])
        form = SellForm(instance=sold_position)
        sold_position = form.save(commit=False)
        sold_position.USD_value_of_sale = sold_position.current_coin_value
        sold_position.closed_at = datetime.datetime.now()
        sold_position.PNL = sold_position.USD_value_of_sale - \
            sold_position.USD_value_of_purchase
        sold_position.ROI = sold_position.PNL / \
            sold_position.USD_value_of_purchase * 100

        new_balance = logged_in_user.balance + sold_position.USD_value_of_sale
        logged_in_user.balance = new_balance

        sold_position.save()
        logged_in_user.save()
        if sold_position.PNL > 0:
            profit_loss_message = "Well done! You made a profit from this trade. "
        else:
            profit_loss_message = "You made a loss from this trade. Consider trying a new strategy. "
        messages.success(request, "Position Closed Successfully. " + str(round(sold_position.coin_amount, 2)) +
                         " " + str(sold_position.cryptocurrency) +
                         " sold for $" + str(round(sold_position.USD_value_of_sale, 2)))
        messages.success(request, profit_loss_message +
                         "ROI: " + str(round(sold_position.ROI, 2)) + "%")
        return HttpResponseRedirect("/portfolio")
    else:
        form = SellForm

    context = {'platform_user': platform_user, 'open_positions': open_positions,
               'closed_positions': closed_positions, 'form': form}
    return render(request, 'portfolio.html', context)


def following(request):
    current_user = request.user.id
    platform_user = PlatformUser.objects.filter(user=current_user)
    context = {'platform_user': platform_user}
    return render(request, 'following.html', context)


def balance(request):
    if request.user.is_authenticated:
        platform_user = PlatformUser.objects.all()
    return render(request, 'balance.html', {'platform_user': platform_user})


def news_feed(request):
    news_items = NewsItem.objects.order_by('-time')[:10]
    # Serialize the queryset directly to JSON
    news_items_json = serialize('json', news_items)
    return render(request, 'news-feed.html', {'initial_news_items': news_items_json})


class LatestNews(APIView):
    def get(self, request, format=None):
        news_items = NewsItem.objects.order_by('-time')[:10]  # Get the latest 10 news items

        # Note: If you need to manipulate the JSON fields in Python before sending them out,
        # you would deserialize them here, but typically, this isn't needed just for serialization.
        serializer = NewsItemSerializer(news_items, many=True)

        return Response(serializer.data)


@csrf_exempt
@require_http_methods(["POST"])
def save_news_item(request):
    try:
        # Parse the incoming JSON payload
        news_data = json.loads(request.body)

        # Use your DRF serializer to validate and deserialize the data
        serializer = NewsItemSerializer(data=news_data)
        if serializer.is_valid():
            # Save the valid news item to the database
            serializer.save()
            return JsonResponse({"success": True, "message": "News item saved successfully."}, status=201)
        else:
            # Return errors if the data is not valid
            return JsonResponse({"success": False, "errors": serializer.errors}, status=400)
    except json.JSONDecodeError as e:
        # Handle JSON parsing error
        return JsonResponse({"success": False, "message": "Invalid JSON format."}, status=400)
