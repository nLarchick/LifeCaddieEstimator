from enum import Enum
from typing import List
from openai import OpenAI
from pydantic import BaseModel, Field

client = OpenAI()


def build_file(file_path: str) -> str:
    """Build OpenAI file id.

    Arguments:
        file_path (str): Path to image file.

    Returns:
        str: OpenAI image id.
    """

    with open(file_path, "rb") as file_content:
        result = client.files.create(file=file_content, purpose="vision")
        return result.id


class Size(str, Enum):
    """Enum for the 'size' of items"""

    small = "small"
    medium = "medium"
    large = "large"


class Item(BaseModel):
    """Item classification and formatting."""

    name: str = Field(
        ..., description="The name of the item", examples=["Vase", "Book", "Couch"]
    )
    size: Size = Field(..., description="Size of the item, small, medium, or large.")
    quantity: int = Field(..., description="Number of items", examples=[2, 6, 4])


class ItemFormat(BaseModel):
    """Format for parsed image data.

    Structure:
        `Item1: {Name, Size, Quantity}, Item2: {Name, Size, Quantity}, ...`
    """

    items: List[Item] = Field(..., description="A list of all identified items.")


def process_image(file_path: str) -> ItemFormat:
    """Analyze a provided image path.

    Arguments:
        file_path (str): Path to image file.

    Returns:
        ItemFormat: Structured pydantic output
    """

    file_id = build_file(file_path)

    response = client.responses.parse(
        model="gpt-5",
        input=[
            {
                "role": "system",
                "content": "Scan the provided image for moveable items, find each item "
                "and identify it's size. Be sure to identify all the items in the picture.",
            },
            {
                "role": "user",
                "content": [
                    {"type": "input_image", "detail": "auto", "file_id": file_id}
                ],
            },
        ],
        text_format=ItemFormat,
    )

    if response.output_parsed is None:
        raise Exception("The response failed to parse!")
    else:
        return response.output_parsed


"""---------- STRICTLY FOR TESTING ----------"""
if __name__ == "__main__":
    """
    For now the data is converted to json data and
    saved to a file such that the API does not have
    to be re-run.
    """
    output = process_image("assets/tmp-livingroom-example.webp")

    with open("testfiledata.json", "w") as f:
        f.write(output.model_dump_json(indent=4))

    print("<- Output written to testfiledata.json ->")
