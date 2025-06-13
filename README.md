# DevMaster GPT

## Project overview
DevMaster GPT demonstrates a minimal workflow for using the `openai` Python SDK. The `main.py` script provides a command-line interface that can generate code snippets, produce documentation, and suggest refactoring ideas via helpers in `tools.py`.

## Setup
1. Install Python 3.11 or later.
2. Install dependencies using `pip`:
   ```bash
   pip install -r requirements.txt
   ```
   The `requirements.txt` file specifies `openai>=1.3` which is the minimum
   supported SDK version.
3. Set your OpenAI API key as an environment variable:
   ```bash
   export OPENAI_API_KEY=your-api-key
   ```

## Running `main.py`
Execute the agent with:
```bash
python main.py
```
The script loads the configured tools and runs interactively.

## Development
Run the linter and test suite before committing changes.

```bash
ruff .
pytest
```
