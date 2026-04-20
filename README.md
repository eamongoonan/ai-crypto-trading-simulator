# Cryptocurrency Trading Simulator

A Django web application that lets users practice cryptocurrency trading with virtual money, live market prices, and AI-powered news sentiment analysis.

## Features

- **Paper trading** — buy and sell cryptocurrencies using a $10,000 virtual starting balance, with no real money at risk
- **Live prices** — real-time cryptocurrency prices fetched from Binance
- **Portfolio tracking** — view open and closed positions with per-trade and all-time PNL/ROI
- **Live news feed** — streaming cryptocurrency news via WebSocket
- **AI sentiment analysis** — each news article is analyzed by Claude (Anthropic) and labeled BULLISH, BEARISH, or NEUTRAL with a one-sentence explanation
- **Candlestick/line charts** — price charts across multiple timeframes
- **Trader following** — browse professional trader data via RapidAPI
- **User accounts** — registration, login, and per-user isolated portfolios

## Tech Stack

- **Backend:** Python 3.8, Django 4.1
- **Database:** SQLite
- **AI:** [ProsusAI/FinBERT](https://huggingface.co/ProsusAI/finbert) via the Hugging Face Inference API (free, no API key required)
- **External APIs:** Binance (prices), RapidAPI (trader data), WebSocket news feed

## Quick Start

See [SETUP.md](SETUP.md) for full installation and configuration instructions.

```bash
cd src/cryptotradingsimulator
pip install -r requirements.txt
cp .env.example .env  # fill in your API keys
python manage.py migrate
python manage.py runserver
```

## Project Structure

```
src/cryptotradingsimulator/
├── cryptotradingsimulator/   # Django project settings & URLs
├── members/                  # User registration & authentication
├── tradingplatform/          # Core trading logic, models, views, AI
│   ├── models.py             # PlatformUser, Position
│   ├── views.py              # trade, portfolio, news_feed, sentiment_analysis
│   ├── ai_sentiment.py       # Claude-powered news sentiment
│   └── live_coin_price.py    # Binance price fetching
└── templates/                # Django HTML templates
```

## Authors

- Eamon Goonan (19765759)
- Mudiaga Jerry Dortie (19339753)

CA400 Year 4 Project — School of Computing, Dublin City University
