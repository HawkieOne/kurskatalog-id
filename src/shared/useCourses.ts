import ReactGridLayout from "react-grid-layout";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeYearState,
  coursesBuilderSelector,
  coursesYearState,
} from "../atoms/atoms";
import { BuildingBlock, Course } from "./interfaces";

export default function useCourses() {
  const [courses, setCourses] = useRecoilState(coursesBuilderSelector);
  const activeYear = useRecoilValue(activeYearState);
  const coursesYear = useRecoilValue(coursesYearState);

  const addCourseToPeriod = (periodIndex: number) => {};

  const removeCourse = (uuid: string) => {
    let cpyCourses = courses.slice();
    let cpyYearCourses = cpyCourses[activeYear].courses.slice();
    const uuidIndex = cpyYearCourses.findIndex((e) => e.i === uuid);
    if (uuidIndex !== -1) {
      cpyYearCourses.splice(uuidIndex, 1);
      cpyCourses[activeYear] = {
        ...cpyCourses[activeYear],
        courses: cpyYearCourses,
      };
      setCourses(cpyCourses);
    }
  };

  const saveChanges = (changedLayout: ReactGridLayout.Layout[]) => {
    let cpyCourses = courses.slice();
    const newLayout: BuildingBlock[] = changedLayout.map((course, index) => ({
      ...course,
      content: cpyCourses[activeYear].courses.find((e) => e.i === course.i)
        ?.content,
    }));
    cpyCourses[activeYear] = {
      ...cpyCourses[activeYear],
      courses: newLayout,
    };
    setCourses(cpyCourses);
  };

  return {
    coursesYear,
    addCourseToPeriod,
    removeCourse,
    saveChanges,
  };
}
