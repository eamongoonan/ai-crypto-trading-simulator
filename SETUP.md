# Setup & Installation

## Prerequisites

- Python 3.8+
- pip

## Installation

1. Clone the repository and enter the project directory:

```bash
git clone <repo-url>
cd cryptocurrency-trading-simulator
```

2. Create and activate a virtual environment:

```bash
python -m venv env
# Windows
env\Scripts\activate
# macOS/Linux
source env/bin/activate
```

3. Install dependencies:

```bash
cd src/cryptotradingsimulator
pip install -r requirements.txt
```

## Configuration

Create a `.env` file in `src/cryptotradingsimulator/` with the following variables:

```env
# Required — generate a new one for any non-local environment
SECRET_KEY=your-django-secret-key

# AI sentiment analysis — optional, raises rate limits on the free HF inference API
# Get a free token at huggingface.co/settings/tokens
HF_API_TOKEN=your-hf-token

# Live news WebSocket feed token
NEWS_WS_TOKEN=your-news-ws-token

# Trader following feature (RapidAPI)
RAPIDAPI_KEY=your-rapidapi-key

# Optional — defaults shown
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
```

The application runs without `HF_API_TOKEN`, `NEWS_WS_TOKEN`, and `RAPIDAPI_KEY` — those features degrade gracefully when keys are absent. `HF_API_TOKEN` is optional but recommended to avoid rate limits on the Hugging Face free inference API.

## Database

Run migrations to create the SQLite database:

```bash
python manage.py migrate
```

Optionally create a Django admin superuser:

```bash
python manage.py createsuperuser
```

## Running the Dev Server

```bash
python manage.py runserver
```

Visit `http://127.0.0.1:8000/` and register an account. Each new account starts with a $10,000 virtual balance.

## Running Tests

```bash
python manage.py test
```

## Admin Panel

Django admin is available at `http://127.0.0.1:8000/admin/` for managing users and positions.
