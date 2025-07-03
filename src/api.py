from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "🚀 PromptForge is up and running!"}
