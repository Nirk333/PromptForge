from fastapi.testclient import TestClient
from src.api import app

client = TestClient(app)

def test_get_prompts():
    response = client.get("/prompts")
    assert response.status_code == 200
    data = response.json()
    # Must be a list of dicts with our sample prompts
    assert isinstance(data, list)
    assert {"id": "1", "prompt": "Welcome to PromptForge!"} in data
    assert {"id": "2", "prompt": "Generate a witty tagline for AI."} in data
def test_create_prompt(client):
    response = client.post("/prompts", json={"prompt": "Automated test prompt"})
    assert response.status_code == 201
    data = response.json()
    assert "id" in data
    assert data["prompt"] == "Automated test prompt"
