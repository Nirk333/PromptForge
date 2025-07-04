from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "🚀 PromptForge is up and running!"}
from typing import List, Dict

@app.post("/prompts", response_model=Prompt, status_code=201)
async def create_prompt(prompt_in: PromptCreate):
    new_prompt = Prompt(id=str(uuid.uuid4()), prompt=prompt_in.prompt)
    prompts_storage.append(new_prompt)
    return new_prompt
[
        {"id": "1", "prompt": "Welcome to PromptForge!"},
        {"id": "2", "prompt": "Generate a witty tagline for AI."}
    ]
from pydantic import BaseModel
import uuid

class Prompt(BaseModel):
    id: str
    prompt: str

class PromptCreate(BaseModel):
    prompt: str

# In-memory “database”
prompts_storage: list[Prompt] = [
    Prompt(id="1", prompt="Welcome to PromptForge!"),
    Prompt(id="2", prompt="Generate a witty tagline for AI.")
]
