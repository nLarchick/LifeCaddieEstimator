from openai import OpenAI

client = OpenAI()

# ------- Steps needed -------
# 1) Scan for items that need to be moved
# OUTPUT: These are the items that need moving
# 2) Calculate price per item + difficulty of moving each item
# OUTPUT: Resulting price to organize the space.