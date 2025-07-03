import sys
from io import StringIO
from src.app import main

def test_main_prints_alive_message(capsys):
    # Capture stdout
    main()
    captured = capsys.readouterr()
    assert "🚀 PromptForge micro-AI service is alive!" in captured.out
