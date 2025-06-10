from tools import generate_snippet, write_docs, suggest_refactor, repo_structure


def main() -> None:
    """Simple command line interface for devmaster tools."""
    actions = {
        "generate_snippet": generate_snippet,
        "write_docs": write_docs,
        "suggest_refactor": suggest_refactor,
        "repo_structure": repo_structure,
    }

    while True:
        command = input(
            "Select tool (generate_snippet, write_docs, suggest_refactor, repo_structure, quit): "
        ).strip()
        if command == "quit":
            break
        if command not in actions:
            print("Unknown command")
            continue

        argument = input("Enter argument (leave empty for defaults): ").strip()
        if not argument and command != "repo_structure":
            print("Argument required for this command")
            continue

        result = actions[command](argument) if argument else actions[command]()
        print(result)


if __name__ == "__main__":
    main()
