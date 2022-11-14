import React from "react";
import Course from "../components/course/Course";
import Title from "../components/Title";
import { TitleVariant } from "../shared/constants";
import coursesJson from '../data/courses.json'

export default function Courses() {

  return (
    <div className="h-full w-full bg-white flex flex-col items-center py-12 space-y-8">
      <Title>Kurser</Title>
      <div className="w-3/4 flex flex-col items-center space-y-6">
        {coursesJson.map((course, index) => (
          <Course course={course} key={index} />
        ))}
      </div>
    </div>
  );
}
