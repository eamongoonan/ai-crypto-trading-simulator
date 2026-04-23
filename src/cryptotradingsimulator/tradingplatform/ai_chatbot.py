import os
import requests

HF_API_URL = "https://router.huggingface.co/hf-inference/models/HuggingFaceH4/zephyr-7b-beta"

_SYSTEM_PROMPT = (
    "You are CryptoSim AI, an educational assistant for beginner cryptocurrency traders. "
    "Help users understand trading concepts, strategies, and terminology. "
    "Be concise and clear. Never give financial advice or tell users what to buy or sell. "
    "Keep responses to 2-3 short paragraphs maximum."
)


def _build_prompt(messages: list[dict]) -> str:
    """Format conversation history as Zephyr chat template."""
    prompt = f"<|system|>\n{_SYSTEM_PROMPT}</s>\n"
    for m in messages:
        role_tag = "<|user|>" if m["role"] == "user" else "<|assistant|>"
        prompt += f"{role_tag}\n{m['content']}</s>\n"
    prompt += "<|assistant|>\n"
    return prompt


def chat(messages: list[dict]) -> str:
    token = os.environ.get("HF_API_TOKEN")
    if not token:
        return "AI Assistant is not configured. Add HF_API_TOKEN to your .env file (free at huggingface.co/settings/tokens)."

    prompt = _build_prompt(messages)
    try:
        resp = requests.post(
            HF_API_URL,
            headers={"Authorization": f"Bearer {token}"},
            json={
                "inputs": prompt,
                "parameters": {
                    "max_new_tokens": 300,
                    "temperature": 0.7,
                    "return_full_text": False,
                },
            },
            timeout=30,
        )
        resp.raise_for_status()
        payload = resp.json()
        if isinstance(payload, list) and payload:
            text = payload[0].get("generated_text", "").strip()
            # Strip any trailing incomplete sentence
            if text and not text[-1] in ".!?":
                last = max(text.rfind("."), text.rfind("!"), text.rfind("?"))
                if last > 0:
                    text = text[: last + 1]
            return text or "Sorry, I couldn't generate a response. Please try again."
        return "Sorry, I couldn't generate a response. Please try again."
    except requests.exceptions.Timeout:
        return "The AI assistant timed out. Please try again in a moment."
    except Exception:
        return "The AI assistant is temporarily unavailable. Please try again later."
