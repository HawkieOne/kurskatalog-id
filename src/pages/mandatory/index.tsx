import Collapse from "../../components/Collapse";
import coursesJson from "../../data/courses.json";
import mandatoryCoursesJson from "../../data/mandatoryCourses.json";
import { subjects } from "../../shared/data";

import { Course } from "../../shared/interfaces";

export default function MandatoryCourses() {
  const selectedCourses = (subject: string) => {
    const courseCodes = mandatoryCoursesJson.filter((course) => {
      return course.subject === subject;
    });
    const allowedCourses = coursesJson.filter((course) =>
      courseCodes.find((e) => e.code === course.code)
    ) as Course[];
    return allowedCourses;
  };

  const renderCell = (text: string) => (
    <div className="p-2">{text}</div>
  );

  const renderHeaderCell = (text: string) => <div className="p-2">{text}</div>;

  return (
    <div className="h-full bg-whiteBackground flex flex-col items-center p-5">
      <div className="w-4/5 text-center flex flex-col">
        <div className="grid grid-cols-5 font-bold bg-darkGrey text-whiteBackground">
          {renderHeaderCell("Kursnamn")}
          {renderHeaderCell("Studietakt")}
          {renderHeaderCell("Läsperiod")}
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
                      <div className="grid grid-cols-5 bg-whiteBackground text-onyx">
                        {renderCell(course.name)}
                        {renderCell(course.pace ? course.pace + "%" : "??")}
                        {renderCell(course.startDate ? course.startDate : "??")}
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
  );
}
