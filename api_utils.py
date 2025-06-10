import json
from typing import Any, Dict
from urllib.error import HTTPError, URLError
from urllib.request import urlopen


def fetch_json(url: str) -> Dict[str, Any]:
    """Retrieve JSON data from an HTTP endpoint.

    Performs a GET request to the specified URL and parses the response as JSON.

    Args:
        url: Endpoint expected to return a JSON payload.

    Returns:
        Parsed JSON object from the response body.

    Raises:
        ConnectionError: If the request fails or the server responds with a
            non-200 status code.
        ValueError: If the response body is not valid JSON.
    """
    try:
        with urlopen(url) as response:
            if response.status != 200:
                raise ConnectionError(
                    f"Request failed with status {response.status}"
                )
            data = response.read().decode()
    except HTTPError as exc:
        raise ConnectionError(f"HTTP error: {exc.code}") from exc
    except URLError as exc:
        raise ConnectionError(f"Failed to reach server: {exc.reason}") from exc

    try:
        return json.loads(data)
    except json.JSONDecodeError as exc:
        raise ValueError("Invalid JSON received") from exc
