from openai import Agent
from tools import generate_snippet, write_docs, suggest_refactor, repo_structure

agent = Agent(
    tools=[generate_snippet, write_docs, suggest_refactor, repo_structure],
    memory=True
)

if __name__ == "__main__":
    agent.run()
