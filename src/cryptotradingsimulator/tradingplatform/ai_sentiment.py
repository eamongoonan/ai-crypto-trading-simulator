import os
import re
import requests

HF_API_URL = "https://router.huggingface.co/hf-inference/models/ProsusAI/finbert"

LABEL_MAP = {
    "positive": "BULLISH",
    "negative": "BEARISH",
    "neutral": "NEUTRAL",
    # HF inference API sometimes returns LABEL_X instead of text labels
    # ProsusAI/finbert id2label: {0: positive, 1: negative, 2: neutral}
    "label_0": "BULLISH",
    "label_1": "BEARISH",
    "label_2": "NEUTRAL",
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


_BULLISH_WORDS = {
    "surge", "surges", "surging", "rally", "rallies", "rallying", "soar", "soars", "soaring",
    "bullish", "gain", "gains", "gaining", "rise", "rises", "rising", "rose", "high", "highs",
    "breakout", "adoption", "buy", "buying", "bought", "up", "upside", "uptrend", "record",
    "milestone", "boost", "boosts", "boosted", "positive", "growth", "growing", "recover",
    "recovery", "recovering", "outperform", "outperforms", "upgrade", "upgraded", "approval",
    "approved", "approves", "launch", "launches", "launched", "partnership", "integrates",
    "integration", "accumulate", "accumulation", "inflow", "inflows", "ath", "all-time",
    "expand", "expands", "expansion", "strong", "strength", "momentum", "opportunities",
    "opportunity", "profit", "profits", "profitability", "invest", "investment", "bullrun",
}
_BEARISH_WORDS = {
    "crash", "crashes", "crashing", "drop", "drops", "dropping", "dropped", "dump", "dumps",
    "dumping", "bearish", "loss", "losses", "losing", "fall", "falls", "falling", "fell",
    "low", "lows", "ban", "banned", "banning", "hack", "hacked", "hacking", "exploit",
    "exploited", "sell", "selling", "sold", "selloff", "down", "downside", "downtrend",
    "decline", "declines", "declining", "fear", "warning", "warns", "risk", "risks",
    "negative", "collapse", "collapses", "collapsing", "fraud", "scam", "ponzi", "lawsuit",
    "sued", "sues", "investigation", "probe", "fine", "fined", "penalty", "penalties",
    "outflow", "outflows", "liquidation", "liquidations", "liquidated", "correction",
    "rejected", "rejects", "rejection", "weak", "weakness", "concern", "concerns",
    "vulnerability", "breach", "breached", "stolen", "theft", "bankrupt", "bankruptcy",
}


def _keyword_sentiment(text: str) -> dict:
    words = re.findall(r'\b\w+\b', text.lower())
    bull = sum(1 for w in words if w in _BULLISH_WORDS)
    bear = sum(1 for w in words if w in _BEARISH_WORDS)
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
