import requests


def get_coin_price(coin_symbol: str) -> float:
    url = f"https://api.binance.com/api/v3/ticker/price?symbol={coin_symbol}USDT"
    try:
        response = requests.get(url, timeout=5)
        response.raise_for_status()
        return float(response.json()['price'])
    except (requests.RequestException, KeyError, ValueError) as e:
        raise RuntimeError(f"Could not fetch price for {coin_symbol}: {e}")


def usd_coin_exchange(dollar_amount: float, coin_symbol: str) -> float:
    return dollar_amount / get_coin_price(coin_symbol)


def coin_usd_exchange(coin_amount: float, coin_symbol: str) -> float:
    return get_coin_price(coin_symbol) * coin_amount
