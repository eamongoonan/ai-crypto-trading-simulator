from .models import Position


def get_user_all_time_pnl(user) -> float:
    closed_positions = Position.objects.filter(user=user, closed_at__isnull=False)
    return sum(p.PNL for p in closed_positions if p.PNL is not None)


def get_user_all_time_roi(user) -> float:
    closed_positions = Position.objects.filter(user=user, closed_at__isnull=False)
    total_invested = sum(float(p.USD_value_of_purchase) for p in closed_positions)
    if total_invested == 0:
        return 0.0
    return user.PNL / total_invested * 100
