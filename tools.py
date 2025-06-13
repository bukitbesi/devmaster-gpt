from openai import tool, llm
import json
import os
import urllib.error
import urllib.request


@tool
def generate_snippet(task_description: str) -> str:
    """Generates code snippet from a natural language task description."""
    messages = [
        {"role": "system", "content": "You are a code generation expert."},
        {"role": "user", "content": f"Write code to: {task_description}"},
    ]
    return llm.chat(messages)


@tool
def write_docs(code_block: str) -> str:
    """Generates a detailed docstring or documentation for a given code block."""
    messages = [
        {"role": "system", "content": "You are a documentation assistant."},
        {
            "role": "user",
            "content": f"Write a full docstring for the following code:\n{code_block}",
        },
    ]
    return llm.chat(messages)


@tool
def suggest_refactor(code_block: str) -> str:
    """Suggests improvements or modern syntax for given code."""
    messages = [
        {
            "role": "system",
            "content": "You are a senior software engineer reviewing code.",
        },
        {
            "role": "user",
            "content": f"Suggest improvements for this code:\n{code_block}",
        },
    ]
    return llm.chat(messages)


@tool
def repo_structure(path: str = ".") -> str:
    """Returns a tree view of the project's file/folder structure from the given path."""
    output = ""
    for root, dirs, files in os.walk(path):
        level = root.replace(path, "").count(os.sep)
        indent = "  " * level
        output += f"{indent}{os.path.basename(root)}/\n"
        subindent = "  " * (level + 1)
        for filename in files:
            output += f"{subindent}{filename}\n"
    return output


@tool
def fetch_json(url: str) -> dict:
    """Retrieve JSON data from an HTTP endpoint.

    Args:
        url: The API URL expected to return JSON content.

    Returns:
        The parsed JSON payload.

    Raises:
        ConnectionError: If the server cannot be reached or responds with a non-200 status code.
        ValueError: If the response body is not valid JSON.
    """
    try:
        with urllib.request.urlopen(url) as response:
            if response.getcode() != 200:
                raise ConnectionError(
                    f"Request failed with status: {response.getcode()}"
                )
            body = response.read().decode()
    except urllib.error.HTTPError as exc:
        raise ConnectionError(f"HTTP error: {exc.code}") from exc
    except urllib.error.URLError as exc:
        raise ConnectionError(f"Failed to reach server: {exc.reason}") from exc

    try:
        return json.loads(body)
    except json.JSONDecodeError as exc:
        raise ValueError("Invalid JSON received") from exc
