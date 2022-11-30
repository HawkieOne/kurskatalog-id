import React, { useState } from "react";
import Course from "../components/course/Course";
import Title from "../components/Title";
import { TitleVariant } from "../shared/constants";
import coursesJson from '../data/courses.json'
import Search from "../components/Search";

export default function Courses() {

  const originalCourses = coursesJson;
  const [searchedCourses, setSearchedCourses] = useState(coursesJson);


  return (
    <div className="h-full w-full bg-white flex flex-col items-center py-12 space-y-8">
      <div className="w-3/4 flex justify-center relative">
        <Title>Kurser</Title>
        <div className="absolute right-0">
          <Search
            allCourses={originalCourses}
            setSearchedCourses={setSearchedCourses}
          />
        </div>
      </div>
      <div className="w-3/4 flex flex-col items-center space-y-6">
        {searchedCourses.map((course, index) => (
          <Course course={course} key={index} />
        ))}
      </div>
      {searchedCourses.length === 0 && <p>Inga kurser hittade</p>}
    </div>
  );
}
