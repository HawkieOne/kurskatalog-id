import React, { useState } from "react";
import { TestCourse2 } from "../../shared/data";
import { CoursesPeriod } from "../../shared/interfaces";
import Text from "../Text";
import AddDroppableArea from "./AddDroppableArea";
import DraggableCourse from "./DraggableCourse";
import DroppableArea from "./DroppableArea";

interface PeriodProps {
  number: number;
  courses: CoursesPeriod;
}

export default function Period({ number, courses }: PeriodProps) {
  const [currentCourses, setCurrentCourses] = useState(courses);
  return (
    <div
      className="flex flex-col justify-start items-center space-y-4"
      key={number}
    >
      <Text>Läsperiod {number}</Text>
      <DraggableCourse course={TestCourse2} />
      {currentCourses.length > 0 && (
        <div className="h-80 w-full flex flex-col space-y-4">
          {currentCourses.map((course, index) => (
            <DroppableArea
              course={course}
              index={index}
              basis={currentCourses.length > 1 ? `basis-1/2` : "basis-full"}
              onRemove={(index: number) => {
                const cpyCourses = currentCourses.slice();
                cpyCourses.splice(index, 1);
                setCurrentCourses(cpyCourses);
              }}
            />
          ))}
        </div>
      )}
      <AddDroppableArea
        onClick={() => {
          if (courses.length < 6) {
            console.log("HYE");
            const cpyCourses = currentCourses.slice();
            cpyCourses.push(null);
            setCurrentCourses(cpyCourses);
          }
        }}
      />
    </div>
  );
}
