from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict
import uuid

# ---- Models & In-memory Storage ----

class Prompt(BaseModel):
    id: str
    prompt: str

class PromptCreate(BaseModel):
    prompt: str

prompts_storage: List[Prompt] = [
    Prompt(id="1", prompt="Welcome to PromptForge!"),
    Prompt(id="2", prompt="Generate a witty tagline for AI.")
]

# ---- App Setup & Routes ----

app = FastAPI()

@app.get("/", tags=["health"])
async def read_root() -> Dict[str, str]:
    return {"message": "🚀 PromptForge is up and running!"}

@app.get("/prompts", response_model=List[Dict[str, str]], tags=["prompts"])
async def get_prompts() -> List[Dict[str, str]]:
    return [{"id": p.id, "prompt": p.prompt} for p in prompts_storage]

@app.post("/prompts", response_model=Prompt, status_code=201, tags=["prompts"])
async def create_prompt(prompt_in: PromptCreate) -> Prompt:
    new_prompt = Prompt(id=str(uuid.uuid4()), prompt=prompt_in.prompt)
    prompts_storage.append(new_prompt)
    return new_prompt
