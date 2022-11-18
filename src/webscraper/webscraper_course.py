import json
import re
import sys
from pathlib import Path

import bs4
import requests
from bs4 import BeautifulSoup


def extract_text(data):
    text = []
    for x in data:
        if isinstance(x, bs4.element.NavigableString):
            text.append(x.strip())
    return " ".join(text).strip()


file_path = "course.json"
try:
    URL = sys.argv[1]
except:
    print("Please add an URL as a argurment")
    quit()
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")

name = soup.find("h1").text.strip()
descriptionTag = soup.find(id="om").parent.find_all("p")
description = [desc.text.strip() for desc in descriptionTag]
description = " ".join(description)

groupFound = True
try:
    periodAndYear = (soup.find(
        "div", class_="terminskarusell").find_all("span")[1].text)
    period, year = periodAndYear.split()
    year = int(year)

    course_info = soup.find("div", class_="kurstillfalle")
    groups = course_info.find_all("div", class_="group")
    group_elements = groups[0].find_all("div")
    startDate, endDate, location, language, pace = [
        e.text.strip() for e in group_elements
    ]
    registerCode = groups[5].find("div").text.strip()
    pace = pace.split(",")[1].strip()
    pace = int(pace.replace("%", ""))
except:
    groupFound = False

URL_kursplan = URL + "kursplan/"
page = requests.get(URL_kursplan)
soup = BeautifulSoup(page.content, "html.parser")

course_code = extract_text(soup.find("div", class_="kod").find("p"))
points = extract_text(soup.find("div", class_="poang").find("p"))
points = float(points.replace(",", "."))
level = extract_text(soup.find("div", class_="niva").find("p"))
prerequisite = soup.find(
    id='behorighetskrav').parent.findAll(text=True)[2].strip()

dictionary = {}
if groupFound:
    dictionary = {
        "name": name,
        "points": points,
        "pace": pace,
        "period": period,
        "year": year,
        "description": description,
        "prerequisite": prerequisite,
        "link": URL,
        "level": level,
        "startDate": startDate,
        "endDate": endDate,
        "location": location,
        "code": course_code,
        "registerCode": registerCode,
        "rating": 0,
    }
else:
    dictionary = {
        "name": name,
        "description": description,
        "prerequisite": prerequisite,
        "points": points,
        "link": URL,
        "level": level,
        "code": course_code,
        "rating": 0,
    }

json_object = json.dumps(dictionary, indent=4,
                         ensure_ascii=False).encode("utf8")

# Write course to file
file = Path(file_path)
with open(file_path, "a") as outfile:
    outfile.write(json_object.decode())
    outfile.write(",\n")
print("Webscriping ", name, "successful")
