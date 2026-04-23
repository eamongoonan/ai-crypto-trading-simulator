# Cryptocurrency Trading Simulator

A Django web application that lets users practice cryptocurrency trading with virtual money, live market prices, and AI-powered news sentiment analysis.

## Screenshots

| Dashboard | Trade | Portfolio |
|-----------|-------|-----------|
| ![Dashboard](docs/screenshots/dashboard.png) | ![Trade](docs/screenshots/trade.png) | ![Portfolio](docs/screenshots/portfolio.png) |

| News Feed | Leaderboard | AI Assistant |
|-----------|-------------|--------------|
| ![News](docs/screenshots/news.png) | ![Leaderboard](docs/screenshots/leaderboard.png) | ![Chatbot](docs/screenshots/chatbot.png) |

> Screenshots are from a local development instance.

## Features

- **Paper trading** — buy and sell cryptocurrencies using a $7,000 virtual starting balance, with no real money at risk
- **Live prices** — real-time cryptocurrency prices fetched from Binance
- **Portfolio tracking** — view open and closed positions with per-trade and all-time PNL/ROI
- **Leaderboard** — compete against other users ranked by all-time ROI
- **Live news feed** — streaming cryptocurrency news via WebSocket with auto-reconnect
- **AI sentiment analysis** — each news article is labeled BULLISH, BEARISH, or NEUTRAL by FinBERT
- **Candlestick/line charts** — price charts across multiple timeframes
- **Pro Traders** — browse live positions and performance of top Binance Futures traders
- **AI chatbot** — educational assistant powered by Hugging Face Zephyr-7B
- **User accounts** — registration, login, and per-user isolated portfolios

## Tech Stack

- **Backend:** Python 3.11, Django 4.1
- **Database:** SQLite (local) / PostgreSQL (production via `DATABASE_URL`)
- **AI:** [ProsusAI/FinBERT](https://huggingface.co/ProsusAI/finbert) via the Hugging Face Inference API (free)
- **External APIs:** Binance (prices), RapidAPI (trader data), TreeOfAlpha (WebSocket news)
- **Static files:** WhiteNoise (served directly by Django/gunicorn — no CDN needed)

## Quick Start

See [SETUP.md](SETUP.md) for full installation and configuration instructions.

```bash
cd src/cryptotradingsimulator
pip install -r requirements.txt
cp ../../.env.example .env  # fill in your API keys
python manage.py migrate
python manage.py runserver
```

## Deployment (Railway / Render / Heroku)

1. Set the following environment variables on your platform:
   - `SECRET_KEY` — a long random string
   - `DEBUG=False`
   - `ALLOWED_HOSTS=your-app.railway.app` (or your domain)
   - `DATABASE_URL` — provided automatically by Railway/Render when you add a Postgres plugin
   - Optional: `HF_API_TOKEN`, `NEWS_WS_TOKEN`, `RAPIDAPI_KEY`

2. The `Procfile` at the repo root handles migrations, static file collection, and startup:
   ```
   web: cd src/cryptotradingsimulator && python manage.py migrate && python manage.py collectstatic --noinput && gunicorn cryptotradingsimulator.wsgi
   ```

3. Push to your connected GitHub repo and the platform will build and deploy automatically.

> **Database note:** SQLite is used by default for local development. Setting `DATABASE_URL` automatically switches to PostgreSQL — no code changes required.

## Project Structure

```
src/cryptotradingsimulator/
├── cryptotradingsimulator/   # Django project settings & URLs
├── members/                  # User registration & authentication
├── tradingplatform/          # Core trading logic, models, views, AI
│   ├── models.py             # PlatformUser, Position
│   ├── views.py              # trade, portfolio, leaderboard, news_feed, sentiment_analysis
│   ├── ai_sentiment.py       # FinBERT-powered news sentiment
│   └── live_coin_price.py    # Binance price fetching
└── templates/                # Django HTML templates
```

## Authors

- Eamon Goonan (19765759)
- Mudiaga Jerry Dortie (19339753)

CA400 Year 4 Project — School of Computing, Dublin City University
