import { courses } from "./data";
import { Course, Year } from "./interfaces";

export const moveCourse = (
  courses: Year[],
  periodCourseOne: number,
  indexCourseOne: number,
  periodCourseTwo: number,
  indexCourseTwo: number
) => {
    const courseOne = courses
  return courses;
};

export const getCourse = (code: string) => {
    return courses.find(course => code === course.code);
}
