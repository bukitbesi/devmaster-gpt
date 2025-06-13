 # DevMaster GPT
 
 ## Project overview
 DevMaster GPT demonstrates a minimal workflow for using the `openai` Python SDK. The `main.py` script provides a command-line interface that can generate code snippets, produce documentation, and suggest refactoring ideas via helpers in `tools.py`.
 
 ## Setup
 1. Install Python 3.11 or later.
 2. Install dependencies using `pip`:
    ```bash
    pip install -r requirements.txt
    ```
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

## Telegram webhook
To connect a Telegram bot, set the `BOT_TOKEN` environment variable with your
bot token. Then configure the webhook:

```bash
curl "https://api.telegram.org/bot$BOT_TOKEN/setWebhook?url=https://<your-host>/api/telegram"
```
 
## Development
Before committing changes, run the code formatters and linters used in CI.

```bash
black .
npx eslint .
```
