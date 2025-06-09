from openai import tool, llm
import os

@tool
def generate_snippet(task_description: str) -> str:
    """
    Generates code snippet from a natural language task description.
    """
    messages = [
        {"role": "system", "content": "You are a code generation expert."},
        {"role": "user", "content": f"Write code to: {task_description}"}
    ]
    return llm.chat(messages)

@tool
def write_docs(code_block: str) -> str:
    """
    Generates a detailed docstring or documentation for a given code block.
    """
    messages = [
        {"role": "system", "content": "You are a documentation assistant."},
        {"role": "user", "content": f"Write a full docstring for the following code:\n{code_block}"}
    ]
    return llm.chat(messages)

@tool
def suggest_refactor(code_block: str) -> str:
    """
    Suggests improvements or modern syntax for given code.
    """
    messages = [
        {"role": "system", "content": "You are a senior software engineer reviewing code."},
        {"role": "user", "content": f"Suggest improvements for this code:\n{code_block}"}
    ]
    return llm.chat(messages)

@tool
def repo_structure(path: str = ".") -> str:
    """
    Returns a tree view of the project's file/folder structure from the given path.
    """
    output = ""
    for root, dirs, files in os.walk(path):
        level = root.replace(path, "").count(os.sep)
        indent = "  " * level
        output += f"{indent}{os.path.basename(root)}/\n"
        subindent = "  " * (level + 1)
        for f in files:
            output += f"{subindent}{f}\n"
    return output
