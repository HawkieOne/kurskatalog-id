import { useRecoilState, useRecoilValue } from "recoil";
import { activeYearState, coursesBuilderSelector } from "../atoms/atoms";

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

  return {
    addCourseToPeriod,
    removeCoursefromPeriod
  };
}
