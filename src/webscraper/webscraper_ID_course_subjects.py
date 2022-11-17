import json
import re
import sys
from pathlib import Path

import bs4
import requests
from bs4 import BeautifulSoup, NavigableString


def text_between(cur, end):
    while cur and cur != end:
        if isinstance(cur, NavigableString):
            text = cur.strip()
            if len(text):
                yield text
        cur = cur.next_element


def tags_between(cur, end):
    headers = start_point.find_all("strong")
    headers.pop(0)
    allowedHeaders = []
    for header in headers:
        allowedHeaders.append(header)
        if header.text == end.text:
            break
    return allowedHeaders


URL = "https://www.umu.se/utbildning/program/civilingenjorsprogrammet-i-interaktion-och-design/utbildningsplan/"

page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")

start_point = soup.find("h2", string="Allmänt").nextSibling

headers = tags_between(
    soup.find("strong", text="Allmänna ingenjörskurser"),
    soup.find("strong", text="Examensarbete"),
)

# Write all course subjects courses to file
headers_file_path = "subjects.json"
with open(headers_file_path, "w") as outfile:
    outfile.write("[\n")

for header in headers:
    with open(headers_file_path, "a") as outfile:
        outfile.write(header)
        outfile.write(",\n")

with open(headers_file_path, "a") as outfile:
    outfile.write("]")


# Write all mandatory courses to file
courses_file_path = "mandatoryCourses.json"
with open(courses_file_path, "w") as outfile:
    outfile.write("[\n")

for i, header in enumerate(headers):
    if i == len(headers) - 1:
        break
    for text in text_between(header.next_sibling, headers[i + 1]):
        code = text.split(" ")[0].strip()
        dictionary = {"code": code, "subject": header.text}
        json_object = json.dumps(dictionary, indent=4, ensure_ascii=False).encode(
            "utf8"
        )
        with open(courses_file_path, "a") as outfile:
            outfile.write(json_object.decode())
            outfile.write(",\n")
        print("Webscriping", code, "successful")

with open(courses_file_path, "a") as outfile:
    outfile.write("]")
