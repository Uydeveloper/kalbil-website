# =========================================================
# 🧬 Uyghur Quantum Chat Backend (FastAPI)
# Author: Uyghur Quantum AI
# =========================================================

from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import os
import requests

# =========================================================
# 🔐 LLM CONFIGURATION
# =========================================================

USE_OPENAI = True   # False قىلسىڭ Local LLaMA (Ollama) ئىشلىتىدۇ

# --- OpenAI ---
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# --- Local LLaMA (Ollama) ---
LOCAL_LLM_URL = "http://localhost:11434/api/generate"
LOCAL_MODEL = "llama3"

# =========================================================
# 🚀 FASTAPI SETUP
# =========================================================

app = FastAPI(
    title="Uyghur Quantum Chat API",
    description="Uyghur language Quantum AI chat backend",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],     # dev ئۈچۈن، prod دا چەكلىسەڭ بولىدۇ
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================================================
# 📦 REQUEST / RESPONSE MODELS
# =========================================================

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str

# =========================================================
# 🤖 OPENAI CHAT FUNCTION
# =========================================================

def chat_openai(prompt: str) -> str:
    """
    OpenAI GPT model ئارقىلىق chat
    """
    from openai import OpenAI

    if not OPENAI_API_KEY:
        return "❌ OPENAI_API_KEY تېپىلمىدى"

    client = OpenAI(api_key=OPENAI_API_KEY)

    try:
        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are Uyghur Quantum AI. "
                        "Answer clearly, professionally, and in Uyghur language. "
                        "Explain scientific concepts step by step when needed."
                    )
                },
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=800
        )

        return completion.choices[0].message.content

    except Exception as e:
        return f"❌ OpenAI خاتالىقى: {str(e)}"

# =========================================================
# 🦙 LOCAL LLAMA CHAT FUNCTION (Ollama)
# =========================================================

def chat_local_llama(prompt: str) -> str:
    """
    Ollama / Local LLaMA ئارقىلىق chat
    """
    payload = {
        "model": LOCAL_MODEL,
        "prompt": prompt,
        "stream": False
    }

    try:
        r = requests.post(LOCAL_LLM_URL, json=payload, timeout=120)
        data = r.json()
        return data.get("response", "❌ Local LLaMA جاۋاب قايتۇرمىدى")
    except Exception as e:
        return f"❌ Local LLaMA خاتالىقى: {str(e)}"

# =========================================================
# 🔗 CHAT ENDPOINT
# =========================================================

@app.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest):
    """
    Frontend دىن كەلگەن chat message نى قوبۇل قىلىدۇ
    """
    user_message = req.message.strip()

    if not user_message:
        return ChatResponse(response="❗ خالىي سوئال يوللىغىلى بولمايدۇ")

    if USE_OPENAI:
        reply = chat_openai(user_message)
    else:
        reply = chat_local_llama(user_message)

    return ChatResponse(response=reply)

# =========================================================
# 🧪 HEALTH CHECK / TEST
# =========================================================

@app.get("/")
def root():
    return {
        "status": "Uyghur Quantum Chat Backend is running",
        "llm": "OpenAI" if USE_OPENAI else "Local LLaMA",
        "model": "gpt-4o-mini" if USE_OPENAI else LOCAL_MODEL
    }
