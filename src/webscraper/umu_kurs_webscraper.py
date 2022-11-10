import requests
import bs4
import json
import sys
import re
from pathlib import Path
from bs4 import BeautifulSoup

def extract_text(data):
    text = []
    for x in data:
        if isinstance(x, bs4.element.NavigableString):
            text.append(x.strip())
    return " ".join(text).strip()

with open(sys.argv[1]) as file:
    courses = [line.rstrip() for line in file]

for course in courses:
    URL = course
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, "html.parser")

    groupFound = True

    try :
        course_info = soup.find("div", class_="kurstillfalle")
        groups = course_info.find_all("div", class_="group")
        period = soup.find("div", class_="terminskarusell").find_all("span")[1].text
        group_elements = groups[0].find_all("div")
        startDate, endDate, location, language, pace = [e.text.strip() for e in group_elements]
        pace = pace.split(",")[1].strip()
        pace = int(pace.replace("%", ""))
        prerequisite = course_info.find("span", class_="tillfalle-kort-utfallning").text.strip()
        description = soup.find(id="om").parent.find("p").text
    except:
        groupFound = False

    name = soup.find("h1").text.strip()

    URL_kursplan = URL + "kursplan/"
    page = requests.get(URL_kursplan)
    soup = BeautifulSoup(page.content, "html.parser")

    course_code = extract_text(soup.find("div", class_="kod").find("p"))
    subject = " ".join(re.findall("[a-zA-Z]+", course_code))
    points = extract_text(soup.find("div", class_="poang").find("p"))
    points = float(points.replace(',', '.'))
    level = extract_text(soup.find("div", class_="niva").find("p"))

    dictionary = {}
    if groupFound: 
        dictionary = {
            "name": name,
            "points": points,
            "pace": pace,
            "period": period,
            "description": description,
            "prerequisite": prerequisite,
            "link": URL,
            "level": level,
            "startDate": startDate,
            "endDate": endDate,
            "location": location,
            "code": course_code,
            "subject": subject,
            "rating": 0
        }
    else:
        dictionary = {
            "name": name,
            "points": points,
            "link": URL,
            "level": level,
            "code": course_code,
            "subject": subject,
            "rating": 0
        }

    json_object = json.dumps(dictionary, indent=4)

    file_path = "kurser.json"
    file = Path(file_path)
    if file.is_file():
        with open(file_path, "a") as outfile:
            outfile.write(json_object)
            outfile.write(",\n")
    else:
        with open(file_path, "w") as outfile:
            outfile.write("[\n")
            outfile.write(json_object)
            outfile.write(",\n")
    print("Webscriping ", name, "successful")

with open(file_path, "a") as outfile:
    outfile.write("]")
