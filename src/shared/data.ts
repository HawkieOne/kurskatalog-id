import { Templates } from "./constants";

export const subjects = [
  "Allmänna ingenjörskurser",
  "Datavetenskap",
  "Medieteknik",
  "Industridesign",
  "Matematik och matematisk statistik",
  "Psykologi",
  "Teknik för interaktion",
  "Teknik för interaktion yrkesförberedande",
  "Examensarbete"
]

export const templates = [Templates.id, Templates.empty, Templates.upload];

export const testdataBuilder = [
  {
    name: "Programmeringsteknik med C och Matlab",
    points: 7.5,
    pace: 100,
    period: "H\u00f6sttermin 2022",
    description:
      "Kursen behandlar grunderna i probleml\u00f6sning med hj\u00e4lp av datorprogram. Grundl\u00e4ggande begrepp s\u00e5 som algoritm, iteration, implementation och kompilering definieras. I momentet ing\u00e5r en introduktion till hur man l\u00f6ser problem med hj\u00e4lp av algoritmer p\u00e5 ett systematiskt s\u00e4tt. Vidare presenteras de mest grundl\u00e4ggande byggstenarna i ett programmeringsspr\u00e5k som g\u00f6r att algoritmerna kan \u00f6vers\u00e4ttas till program. Under kursen ges en f\u00f6rdjupad introduktion till studieteknik och kursens uppl\u00e4ggning stimulerar studentens anv\u00e4ndande av strukturerad studieteknik. Under kursens g\u00e5ng kommer studenten att skriva program i C och Matlab.",
    prerequisite:
      "Grundl\u00e4ggande beh\u00f6righet och Matematik 4 eller Matematik D",
    link: "https://www.umu.se/utbildning/kurser/programmeringsteknik-med-c-och-matlab/",
    level: "Grundniv\u00e5",
    startDate: "29 september 2022",
    endDate: "31 oktober 2022",
    location: "Ume\u00e5",
    code: "5DV157",
    subject: "DV",
    rating: 0,
  },
  {
    name: "Envariabelanalys 1",
    points: 7.5,
    pace: 100,
    period: "H\u00f6sttermin 2022",
    description:
      "P\u00e5 kursen introduceras begreppen gr\u00e4nsv\u00e4rde, kontinuitet och derivata och regler f\u00f6r att ber\u00e4kna derivata och gr\u00e4nsv\u00e4rde av produkter, kvoter och sammans\u00e4ttningar ges. Vidare behandlas medelv\u00e4rdessatsen, inverser till trigonometriska funktioner, den naturliga logaritmen, exponentialfunktionen, extremv\u00e4rdesproblem, metoder f\u00f6r att skissa grafer, Newtons metod f\u00f6r att approximera nollst\u00e4llen och Taylorapproximation. P\u00e5 kursen ing\u00e5r obligatoriska datorlaborationer.",
    prerequisite:
      "Grundl\u00e4ggande beh\u00f6righet och Matematik 4 eller Matematik D",
    link: "https://www.umu.se/utbildning/kurser/envariabelanalys-13/",
    level: "Grundniv\u00e5",
    startDate: "1 november 2022",
    endDate: "1 december 2022",
    location: "Ume\u00e5",
    code: "5MA197",
    subject: "MA",
    rating: 0,
  },
  {
    name: "Envariabelanalys 2",
    points: 7.5,
    pace: 100,
    period: "H\u00f6sttermin 2022",
    description:
      "Kursen ges f\u00f6r studenter som g\u00e5r p\u00e5 \u00c4mnesl\u00e4rarprogrammet eller som har f\u00f6r avsikt att ta ut en l\u00e4rarexamen. Kursen ges ocks\u00e5 f\u00f6r verksamma l\u00e4rare i fortbildningssyfte. \u00d6vriga studenter h\u00e4nvisas till att s\u00f6ka p\u00e5 den andra anm\u00e4lningskoden.",
    prerequisite:
      "F\u00f6r tilltr\u00e4de till kursen kr\u00e4vs en kurs i matematisk analys omfattande minst 7,5 hp\u00a0 eller motsvarande.",
    link: "https://www.umu.se/utbildning/kurser/envariabelanalys-22/",
    level: "Grundniv\u00e5",
    startDate: "2 december 2022",
    endDate: "15 januari 2023",
    location: "Ume\u00e5",
    code: "6MA046",
    subject: "MA",
    rating: 0,
  },
];

const TestCourse = {
  name: "Programmeringsteknik med C och Matlab",
  points: 7.5,
  pace: 100,
  period: "H\u00f6sttermin 2022",
  description:
    "Kursen behandlar grunderna i probleml\u00f6sning med hj\u00e4lp av datorprogram. Grundl\u00e4ggande begrepp s\u00e5 som algoritm, iteration, implementation och kompilering definieras. I momentet ing\u00e5r en introduktion till hur man l\u00f6ser problem med hj\u00e4lp av algoritmer p\u00e5 ett systematiskt s\u00e4tt. Vidare presenteras de mest grundl\u00e4ggande byggstenarna i ett programmeringsspr\u00e5k som g\u00f6r att algoritmerna kan \u00f6vers\u00e4ttas till program. Under kursen ges en f\u00f6rdjupad introduktion till studieteknik och kursens uppl\u00e4ggning stimulerar studentens anv\u00e4ndande av strukturerad studieteknik. Under kursens g\u00e5ng kommer studenten att skriva program i C och Matlab.",
  prerequisite:
    "Grundl\u00e4ggande beh\u00f6righet och Matematik 4 eller Matematik D",
  link: "https://www.umu.se/utbildning/kurser/programmeringsteknik-med-c-och-matlab/",
  level: "Grundniv\u00e5",
  startDate: "29 september 2022",
  endDate: "31 oktober 2022",
  location: "Ume\u00e5",
  code: "5DV157",
  subject: "DV",
  rating: 0,
};

export const TestCourse2 = {
  name: "Envariabelanalys 2",
  points: 7.5,
  pace: 100,
  period: "H\u00f6sttermin 2022",
  description:
    "Kursen ges f\u00f6r studenter som g\u00e5r p\u00e5 \u00c4mnesl\u00e4rarprogrammet eller som har f\u00f6r avsikt att ta ut en l\u00e4rarexamen. Kursen ges ocks\u00e5 f\u00f6r verksamma l\u00e4rare i fortbildningssyfte. \u00d6vriga studenter h\u00e4nvisas till att s\u00f6ka p\u00e5 den andra anm\u00e4lningskoden.",
  prerequisite:
    "F\u00f6r tilltr\u00e4de till kursen kr\u00e4vs en kurs i matematisk analys omfattande minst 7,5 hp\u00a0 eller motsvarande.",
  link: "https://www.umu.se/utbildning/kurser/envariabelanalys-22/",
  level: "Grundniv\u00e5",
  startDate: "2 december 2022",
  endDate: "15 januari 2023",
  location: "Ume\u00e5",
  code: "6MA046",
  subject: "MA",
  rating: 0,
};

export const testDataYearsBuilder = [
  {
    year: 1,
    periods: [
      [TestCourse, TestCourse],
      [TestCourse],
      [TestCourse],
      [TestCourse],
    ],
  },
  {
    year: 2,
    periods: [
      [TestCourse, TestCourse],
      [TestCourse, TestCourse],
      [TestCourse, TestCourse],
      [TestCourse, TestCourse, TestCourse],
    ],
  },
  {
    year: 3,
    periods: [
      [TestCourse, TestCourse],
      [TestCourse],
      [TestCourse],
      [TestCourse],
    ],
  },
  {
    year: 4,
    periods: [
      [TestCourse, TestCourse],
      [TestCourse, TestCourse],
      [TestCourse, TestCourse],
      [TestCourse, TestCourse, TestCourse],
    ],
  },
  {
    year: 5,
    periods: [
      [TestCourse, TestCourse],
      [TestCourse],
      [TestCourse],
      [TestCourse],
    ],
  },
];
