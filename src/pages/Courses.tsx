import { useState } from "react";
import Course from "../components/course/Course";
import Search from "../components/Search";
import coursesJson from '../data/courses.json';

export default function Courses() {
  const originalCourses = coursesJson;
  const [searchedCourses, setSearchedCourses] = useState(coursesJson);

  return (
    <div className="h-full w-full bg-white flex flex-col items-center py-12 space-y-8">
      <div className="w-3/4 flex justify-center relative">
          <Search
            allCourses={originalCourses}
            setSearchedCourses={setSearchedCourses}
          />
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
