import { useRecoilState, useRecoilValue } from "recoil";
import { activeYearState, coursesBuilderSelector } from "../atoms/atoms";
import { Course } from "./interfaces";

export default function useCourses() {
  const [courses, setCourses] = useRecoilState(coursesBuilderSelector);
  const activeYear = useRecoilValue(activeYearState);

  const addCourseToPeriod = (periodIndex: number) => {
    const cpyCourses = courses.slice();
    const cpyPeriods = courses[activeYear].periods.slice();
    const cpyPeriod = cpyPeriods[periodIndex].slice();
    cpyPeriod.push(null);
    cpyPeriods[periodIndex] = cpyPeriod;
    cpyCourses[activeYear] = {
      ...cpyCourses[activeYear],
      periods: cpyPeriods,
    };
    setCourses(cpyCourses);
  };

  const removeCoursefromPeriod = (periodIndex: number, courseIndex: number) => {
    const cpyCourses = courses.slice();
    const cpyPeriods = courses[activeYear].periods.slice();
    const cpyPeriod = cpyPeriods[periodIndex].slice();
    cpyPeriod.splice(courseIndex, 1);
    cpyPeriods[periodIndex] = cpyPeriod;
    cpyCourses[activeYear] = {
      ...cpyCourses[activeYear],
      periods: cpyPeriods,
    };
    setCourses(cpyCourses);
  };

  const moveCourse = (
    course: Course,
    yearIndex: number | null,
    periodIndex: number,
    courseIndex: number
  ) => {
    const cpyCourses = courses.slice();
    var cpyPeriods = courses[activeYear].periods.slice();
    if (yearIndex) {
      cpyPeriods = courses[yearIndex].periods.slice();
    }
    const cpyPeriod = cpyPeriods[periodIndex].slice();
    cpyPeriod[courseIndex] = course;
    cpyPeriods[periodIndex] = cpyPeriod;
    cpyCourses[activeYear] = {
      ...cpyCourses[activeYear],
      periods: cpyPeriods,
    };
    setCourses(cpyCourses);
  };

  const switchCourses = (
    courseOne: {
      course: Course;
      yearIndex: number;
      periodIndex: number;
      courseIndex: number;
    },
    courseTwo: {
      course: Course;
      yearIndex: number;
      periodIndex: number;
      courseIndex: number;
    }
  ) => {
    const cpyCourses = courses.slice();
    var cpyPeriods = courses[courseOne.yearIndex].periods.slice();
    const cpyPeriod = cpyPeriods[courseOne.periodIndex].slice();
    cpyPeriod[courseOne.courseIndex] = courseTwo.course;
    cpyPeriods[courseOne.periodIndex] = cpyPeriod;
    cpyCourses[courseOne.yearIndex] = {
      ...cpyCourses[courseOne.yearIndex],
      periods: cpyPeriods,
    };

    var cpyPeriods2 = cpyCourses[courseTwo.yearIndex].periods.slice();
    const cpyPeriod2 = cpyPeriods[courseTwo.periodIndex].slice();
    cpyPeriod2[courseTwo.courseIndex] = courseOne.course;
    cpyPeriods2[courseTwo.periodIndex] = cpyPeriod2;
    cpyCourses[courseTwo.yearIndex] = {
      ...cpyCourses[courseTwo.yearIndex],
      periods: cpyPeriods2,
    };

    setCourses(cpyCourses);
  };

  return {
    addCourseToPeriod,
    removeCoursefromPeriod,
    moveCourse,
    switchCourses,
  };
}
