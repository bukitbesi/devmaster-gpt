from fastapi import FastAPI, Request
from pydantic import BaseModel
from tools import generate_snippet, write_docs, suggest_refactor, repo_structure
from typing import Optional

app = FastAPI()

# Memory store (temporary in-memory version)
memory_store = {}

# Request model for tasks
class Task(BaseModel):
    input: str

class Goal(BaseModel):
    goal: str

@app.post("/generate")
def generate(task: Task):
    return {"output": generate_snippet(task.input)}

@app.post("/refactor")
def refactor(task: Task):
    return {"output": suggest_refactor(task.input)}

@app.post("/docs")
def docs(task: Task):
    return {"output": write_docs(task.input)}

@app.get("/structure")
def structure():
    return {"output": repo_structure()}

@app.post("/goal/set")
def set_goal(goal: Goal):
    memory_store["project_goal"] = goal.goal
    return {"message": f"Goal set to: {goal.goal}"}

@app.get("/goal/get")
def get_goal():
    return {"project_goal": memory_store.get("project_goal", "No goal set.")}

@app.post("/chain")
def chain(task: Task):
    code = generate_snippet(task.input)
    refactored = suggest_refactor(code)
    documented = write_docs(refactored)
    return {
        "generated": code,
        "refactored": refactored,
        "documented": documented
    }