# import os
# USAGE = api_key = os.getenv("OPENAI_API_KEY")
from openai import OpenAI

client = OpenAI()


def main():
    print("Hello, World!")

    response = client.responses.create(
        model="gpt-5-mini",
        input=[
            {
                "role": "user",
                "content": [
                    {"type": "input_text", "text": "What is the meaning of life?"},
                ],
            }
        ],
    )

    print(response.output_text)


if __name__ == "__main__":
    main()
