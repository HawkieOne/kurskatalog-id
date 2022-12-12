import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import CourseElement from "./Course"
import Filter from "../../components/Filter";
import Search from "../../components/Search";
import { courses, sortOptions } from "../../shared/data";
import { Course } from "../../shared/interfaces";

export default function Courses() {
  const originalCourses = courses;
  const [searchedCourses, setSearchedCourses] = useState(courses);
  const [sortOption, setSortOption] = useState("Sortera");

  return (
    <div className="h-full w-full bg-white flex flex-col items-center py-12 space-y-8">
      <div className="w-3/4 flex flex-col items-center relative space-y-4">
        <Search
          allCourses={originalCourses}
          setSearchedCourses={setSearchedCourses}
        />
        <div className="w-full flex justify-between">
          <Filter
            onAdvancedLevelChange={(checked) => {
              if (checked) {
                setSearchedCourses(
                  searchedCourses.filter((e) => e.level === "Avancerad nivå")
                );
              } else {
                setSearchedCourses(originalCourses);
              }
            }}
            onDistanceChange={(checked) => {
              if (checked) {
                setSearchedCourses(
                  searchedCourses.filter((e) => e.location === "Ortsoberoende")
                );
              } else {
                setSearchedCourses(originalCourses);
              }
            }}
          />
          <div className="w-1/4">
            <Dropdown
              options={[
                sortOptions.nameRising,
                sortOptions.nameFalling,
                sortOptions.pointsRising,
                sortOptions.pointsFalling,
                sortOptions.studyPaceRising,
                sortOptions.studyPaceFalling,
              ]}
              value={sortOption}
              onChange={(value: string) => {
                setSortOption(value);
                setSearchedCourses(sortArray(searchedCourses, sortOption));
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-3/4 flex flex-col items-center space-y-6">
        {searchedCourses.map((course, index) => (
          <CourseElement course={course} key={index} />
        ))}
      </div>
      {searchedCourses.length === 0 && <p>Inga kurser hittade</p>}
    </div>
  );
}

const sortArray = (arr: Course[], sortOption: string) => {
  switch (sortOption) {
    case sortOptions.nameRising:
      return arr.sort((a: Course,b: Course) => (b.name > a.name) ? 1 : ((a.name > b.name) ? -1 : 0))
    case sortOptions.nameFalling:
      return arr.sort((a: Course,b: Course) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    case sortOptions.pointsRising:
      return arr.sort((a: Course, b: Course) => b.points - a.points);
    case sortOptions.pointsFalling:
      return arr.sort((a: Course, b: Course) => a.points - b.points);
    case sortOptions.studyPaceRising:
      return arr.sort((a: Course, b: Course) => (a.pace ? a.pace : 0) - (b.pace ? b.pace : 0));
    case sortOptions.studyPaceFalling:
      return arr.sort((a: Course, b: Course) => (b.pace ? b.pace : 0) - (a.pace ? a.pace : 0));
    default:
      return arr;
  }
};
