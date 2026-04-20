import os
import json
import anthropic


def analyze_news_sentiment(title: str, body: str = "") -> dict:
    api_key = os.environ.get('ANTHROPIC_API_KEY')
    if not api_key:
        return {'sentiment': 'NEUTRAL', 'reason': 'AI analysis unavailable', 'coins': []}

    client = anthropic.Anthropic(api_key=api_key)
    text = title
    if body:
        text += f"\n\n{body}"

    message = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=200,
        messages=[
            {
                "role": "user",
                "content": (
                    "Analyze this cryptocurrency news for market sentiment. "
                    "Respond with JSON only, no other text:\n"
                    '{"sentiment": "BULLISH" or "BEARISH" or "NEUTRAL", '
                    '"reason": "one sentence explanation", '
                    '"coins": ["BTC", "ETH", ...]}\n\n'
                    f"News: {text}"
                ),
            }
        ],
    )

    try:
        return json.loads(message.content[0].text)
    except (json.JSONDecodeError, IndexError, KeyError):
        return {'sentiment': 'NEUTRAL', 'reason': 'Could not parse analysis', 'coins': []}
