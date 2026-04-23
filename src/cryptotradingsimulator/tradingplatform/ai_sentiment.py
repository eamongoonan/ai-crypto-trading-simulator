import os
import re
import requests

HF_API_URL = "https://router.huggingface.co/hf-inference/models/ProsusAI/finbert"

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


_BULLISH_WORDS = {"surge", "surges", "rally", "rallies", "soar", "soars", "bullish", "gains", "gain",
                  "rises", "rise", "high", "highs", "breakout", "adoption", "buy", "buying", "up",
                  "record", "milestone", "boost", "boosted", "positive", "growth", "recover", "recovery"}
_BEARISH_WORDS = {"crash", "crashes", "drop", "drops", "dump", "dumps", "bearish", "loss", "losses",
                  "falls", "fall", "low", "lows", "ban", "banned", "hack", "hacked", "sell", "selling",
                  "down", "decline", "declines", "fear", "warning", "risk", "risks", "negative", "collapse"}


def _keyword_sentiment(text: str) -> dict:
    words = set(re.findall(r'\b\w+\b', text.lower()))
    bull = len(words & _BULLISH_WORDS)
    bear = len(words & _BEARISH_WORDS)
    if bull > bear:
        return "BULLISH", "Keyword analysis (set HF_API_TOKEN for FinBERT)"
    if bear > bull:
        return "BEARISH", "Keyword analysis (set HF_API_TOKEN for FinBERT)"
    return "NEUTRAL", "Keyword analysis (set HF_API_TOKEN for FinBERT)"


def analyze_news_sentiment(title: str, body: str = "") -> dict:
    text = (title + (" " + body if body else ""))[:512]
    coins = _extract_coins(text)

    token = os.environ.get("HF_API_TOKEN")
    if not token:
        sentiment, reason = _keyword_sentiment(text)
        return {"sentiment": sentiment, "reason": reason, "coins": coins}

    try:
        resp = requests.post(
            HF_API_URL,
            headers={"Authorization": f"Bearer {token}"},
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
        sentiment, reason = _keyword_sentiment(text)
        reason = "FinBERT timed out — " + reason
    except Exception:
        sentiment, reason = _keyword_sentiment(text)
        reason = "FinBERT unavailable — " + reason

    return {"sentiment": sentiment, "reason": reason, "coins": coins}
