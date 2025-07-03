from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "🚀 PromptForge is up and running!"}
from typing import List, Dict

@app.get("/prompts", response_model=List[Dict[str, str]])
async def get_prompts():
    # Temporary hardcoded list of prompts
    return [
        {"id": "1", "prompt": "Welcome to PromptForge!"},
        {"id": "2", "prompt": "Generate a witty tagline for AI."}
    ]
