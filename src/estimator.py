import os
import base64
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


def create_file(file_path: str) -> str:
    """Use openAI 'files' API to create a file ID.

    :param file_path: Path to desired image
    :type file_path: str
    :returns: The image ID
    :rtype: str
    """
    with open(file_path, "rb") as file_content:
        result = client.files.create(
            file=file_content,
            purpose="vision",
        )
        return result.id


def identify_items(file_path: str):
    file_id = create_file(file_path)
    response = client.responses.create(
        model="gpt-5",
        input=[
            {
				"role": "developer",
                "content": "tmp."  #TODO : Add proper context i.e. "use text doc + image ...s"
			},
            {
				"role": "developer",
                "content": [
                    {"type": "input_text", "text": "This is a list of common items and how to deal with them."},
					{"type": "input_file", "filename": "/path/to/the/cheatsheet"} #TODO : Add actual cheat sheet for LLM
				]
			},
            {
                "role": "user",
                "content": [
                    {"type": "input_text", "text": "This image is a picture of the space."},
                    {"type": "input_image", "detail": "auto", "file_id": file_id},
                ],
            }
        ],
    )
    return response.output


def main():
    print("Hello, World!")


if __name__ == "__main__":
    main()


""" Steps Needed
1) Scan for items that need to be moved
    * Convert the image into something the LLM can process
    - Have LLM identify items that need moving (using large context message)
    - Collect the output as a string containing all the things that need moving
2) Calculate price per item + difficulty of moving each item
    - Using the previous query output...
    - Use base 'price-per-item' then optimize using LLM discresion on 'move difficulty'
3) Return the result as a string containing the commulative price *and duration*
"""
