import Collapse from "../../components/Collapse";
import mandatoryCoursesJson from "../../data/mandatoryCourses.json";
import { courses, subjects } from "../../shared/data";
import { AiFillInfoCircle } from "react-icons/ai";

import { Course } from "../../shared/interfaces";
import Text from "../../components/Text";
import { FontVariants } from "../../shared/constants";

export default function MandatoryCourses() {
  const selectedCourses = (subject: string) => {
    const courseCodes = mandatoryCoursesJson.filter((course) => {
      return course.subject === subject;
    });
    const allowedCourses = courses.filter((course) =>
      courseCodes.find((e) => e.code === course.code)
    ) as Course[];
    return allowedCourses;
  };

  const renderCell = (text: string, leftAlignment?: boolean) => (
    <div
      className={`h-full flex ${
        leftAlignment ? "justify-start" : "justify-center align-center"
      } p-3`}
    >
      {text}
    </div>
  );

  const renderIconLink = (link: string, leftAlignment?: boolean) => (
    <a
      className={`p-3 flex ${leftAlignment ? "justify-start" : "justify-center align-center"}`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillInfoCircle size="1.25em" className="text-onyx dark:text-white hover:text-lightSeaGreen hover:dark:text-lightSeaGreen" />
    </a>
  );

  const renderHeaderCell = (text: string) => <div className="p-2">{text}</div>;

  return (
    <div className="h-full flex justify-center p-5">
      <div className="w-4/5 flex flex-col items-center space-y-8">
        <div className="self-start space-y-4">
          <Text font={FontVariants.bold}>Teckenbeskrivning</Text>
          <div className="flex items-center space-x-4">
            <AiFillInfoCircle size="1.25em" className="text-onyx dark:text-white"/>
            <Text>
              Informationen fanns inte på kurssidan vid tidpunkten då
              informationen försökte hämtas. Tryck på ikonen för att gå till
              kurshemsidan
            </Text>
          </div>
        </div>
        <div className="text-center flex flex-col">
          <div className="grid grid-cols-5 font-bold bg-darkGrey text-whiteBackground">
            {renderHeaderCell("Kursnamn")}
            {renderHeaderCell("Läsperiod")}
            {renderHeaderCell("Studietakt")}
            {renderHeaderCell("Poäng")}
            {renderHeaderCell("Nivå")}
          </div>
          {subjects.map((subject, index) => {
            const allowedCourses = selectedCourses(subject);
            return (
              <div className="flex flex-col" key={index}>
                <Collapse
                  title={subject}
                  open
                  content={
                    <div>
                      {allowedCourses.map((course, _) => (
                        <div className="grid grid-cols-5 bg-whiteBackground text-onyx dark:bg-darkModeLight/20 dark:text-white hover:bg-slate-300">
                          {renderCell(course.name, true)}
                          {course.startDate
                            ? renderCell(course.startDate)
                            : renderIconLink(course.link)}
                          {course.pace
                            ? renderCell(course.pace + "%")
                            : renderIconLink(course.link)}
                          {renderCell(course.points + "hp")}
                          {renderCell(course.level)}
                        </div>
                      ))}
                    </div>
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
