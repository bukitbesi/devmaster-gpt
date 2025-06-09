diff --git a/README.md b/README.md
index b9cd1f701b25f2b11da3f3e7d356db43ca65ab17..6aa8eefc824204f020e4fda61d25812e5d5586bc 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,23 @@
-# devmaster-gpt
+# DevMaster GPT
+
+## Project overview
+DevMaster GPT demonstrates a minimal workflow for using the `openai` Python SDK. The `main.py` script creates an `Agent` instance that can generate code snippets, produce documentation, and suggest refactoring ideas via helpers in `tools.py`.
+
+## Setup
+1. Install Python 3.11 or later.
+2. Install dependencies using `pip`:
+   ```bash
+   pip install -r requirements.txt
+   ```
+3. Set your OpenAI API key as an environment variable:
+   ```bash
+   export OPENAI_API_KEY=your-api-key
+   ```
+
+## Running `main.py`
+Execute the agent with:
+```bash
+python main.py
+```
+The script loads the configured tools and runs the agent interactively.
+
