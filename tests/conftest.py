import sys, os

# Add the project root to sys.path so pytest can import our src package
root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
sys.path.insert(0, root_dir)
