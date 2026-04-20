import os
import re
import requests

HF_API_URL = "https://api-inference.huggingface.co/models/ProsusAI/finbert"

LABEL_MAP = {
    "positive": "BULLISH",
    "negative": "BEARISH",
    "neutral": "NEUTRAL",
}

_TICKERS = [
    "BTC", "ETH", "BNB", "XRP", "SOL", "ADA", "DOGE", "DOT", "MATIC",
    "SHIB", "LTC", "AVAX", "LINK", "UNI", "XLM", "ATOM", "ALGO", "FIL",
    "TRX", "ETC", "NEAR", "ICP", "APT", "ARB", "OP", "SUI",
]

_ALIASES = {
    "bitcoin": "BTC", "ethereum": "ETH", "binance": "BNB", "ripple": "XRP",
    "solana": "SOL", "cardano": "ADA", "dogecoin": "DOGE", "polkadot": "DOT",
    "polygon": "MATIC", "litecoin": "LTC", "avalanche": "AVAX",
    "chainlink": "LINK", "uniswap": "UNI", "stellar": "XLM",
    "cosmos": "ATOM", "algorand": "ALGO", "tron": "TRX", "near": "NEAR",
}


def _extract_coins(text: str) -> list:
    found = set()
    upper = text.upper()
    for ticker in _TICKERS:
        if re.search(rf'\b{ticker}\b', upper):
            found.add(ticker)
    lower = text.lower()
    for alias, ticker in _ALIASES.items():
        if alias in lower:
            found.add(ticker)
    return sorted(found)


def analyze_news_sentiment(title: str, body: str = "") -> dict:
    text = (title + (" " + body if body else ""))[:512]

    headers = {}
    token = os.environ.get("HF_API_TOKEN")
    if token:
        headers["Authorization"] = f"Bearer {token}"

    try:
        resp = requests.post(
            HF_API_URL,
            headers=headers,
            json={"inputs": text},
            timeout=15,
        )
        resp.raise_for_status()
        payload = resp.json()

        # FinBERT returns [[{label, score}, ...]] or [{label, score}, ...]
        if isinstance(payload, list) and payload and isinstance(payload[0], list):
            payload = payload[0]
        if not isinstance(payload, list) or not payload:
            raise ValueError("unexpected response shape")

        best = max(payload, key=lambda x: x["score"])
        sentiment = LABEL_MAP.get(best["label"].lower(), "NEUTRAL")
        confidence = round(best["score"] * 100, 1)
        reason = f"FinBERT confidence: {confidence}%"
    except requests.exceptions.Timeout:
        sentiment, reason = "NEUTRAL", "Sentiment service timed out"
    except Exception:
        sentiment, reason = "NEUTRAL", "Sentiment analysis unavailable"

    return {"sentiment": sentiment, "reason": reason, "coins": _extract_coins(text)}
