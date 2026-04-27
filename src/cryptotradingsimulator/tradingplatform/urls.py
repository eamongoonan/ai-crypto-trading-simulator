from django.urls import path, include
from . import views
from django.contrib import admin

app_name = "tradingplatform"
urlpatterns = [
    path('', views.index, name='index'),
    path('trade', views.trade, name='trade'),
    path('portfolio', views.portfolio, name='portfolio'),
    path('leaderboard', views.leaderboard, name='leaderboard'),
    path('news-feed/', views.news_feed, name='news-feed'),
    path('ai/sentiment/', views.sentiment_analysis, name='sentiment'),
    path('portfolio/history/', views.portfolio_history, name='portfolio-history'),
    path('reset-account/', views.reset_account, name='reset-account'),
    path('api/price/<str:symbol>/', views.coin_price_api, name='coin-price'),
]
