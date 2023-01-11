import ReactGridLayout from "react-grid-layout";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeYearState,
  coursesBuilderSelector,
  coursesYearState,
  draggingSavedCourseState,
  savedCoursesState,
} from "../atoms/atoms";
import {
  localStorageActiveYearKey,
  localStorageSavedCoursesKey,
} from "./constants";
import { BuildingBlock, Course, Year } from "./interfaces";
import { useLocalStorage } from "./useLocalStorage";

export default function useCourses() {
  const [courses, setCourses] = useRecoilState(coursesBuilderSelector);
  const [savedCourses, setSavedCourses] = useRecoilState(savedCoursesState);
  const [activeYear, setActiveYear] = useRecoilState(activeYearState);
  const coursesActiveYear = useRecoilValue(coursesYearState);
  const [draggingCourse, setDraggingCourse] = useRecoilState(
    draggingSavedCourseState
  );

  const [, setSavedCoursesLocalStorage] = useLocalStorage(
    localStorageSavedCoursesKey,
    null
  );

  const [activeYearLocalStorage, setActiveYearLocalStorage] = useLocalStorage(
    localStorageActiveYearKey,
    null
  );

  const setChosenYear = (index: number) => {
    setActiveYear(index);
    setActiveYearLocalStorage(index);
  };

  const getChosenYear = () => {
    return activeYearLocalStorage
      ? (activeYearLocalStorage as number)
      : activeYear;
  };

  const addCourse = (block: BuildingBlock) => {
    if (draggingCourse) {
      const cpyCourses = courses.slice();
      const cpyCoursesYear = courses[activeYear].courses.slice();
      cpyCoursesYear.push({
        ...block,
        content: draggingCourse,
      });
      cpyCourses[activeYear] = {
        ...cpyCourses[activeYear],
        courses: cpyCoursesYear,
      };
      setCourses(cpyCourses);
      setDraggingCourse(null);
    }
  };

  const editCourse = (uuid: string, newCourse: Course) => {
    let cpyCourses = courses.slice();
    let cpyYearCourses = cpyCourses[activeYear].courses.slice();
    const uuidIndex = cpyYearCourses.findIndex((e) => e.i === uuid);
    if (uuidIndex !== -1) {
      cpyYearCourses[uuidIndex] = {
        ...cpyYearCourses[uuidIndex],
        content: newCourse,
      };
      cpyCourses[activeYear] = {
        ...cpyCourses[activeYear],
        courses: cpyYearCourses,
      };
      setCourses(cpyCourses);
    }
  };

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
    const newLayout: BuildingBlock[] = changedLayout.map((block, index) => ({
      ...block,
      maxH: 2,
      content: findCourse(cpyCourses, block) as Course,
    }));

    cpyCourses[activeYear] = {
      ...cpyCourses[activeYear],
      courses: newLayout,
    };
    setCourses(cpyCourses);
    return cpyCourses;
  };

  const removeAllCoursesInYear = () => {
    let cpyCourses = courses.slice();
    cpyCourses[activeYear] = {
      ...cpyCourses[activeYear],
      courses: [],
    };
    setCourses(cpyCourses);
    return cpyCourses;
  };

  const resetChanges = () => {
    let cpyCourses = courses.slice();
    setCourses(cpyCourses);
    return cpyCourses;
  };

  const resetCourseSize = (
    oldItem: ReactGridLayout.Layout,
    newItem: ReactGridLayout.Layout
  ) => {
    let cpyCourses = courses.slice();
    let coursesActiveYearCpy = coursesActiveYear.courses.slice();
    const newLayout: BuildingBlock[] = coursesActiveYearCpy.map((block) => {
      if (oldItem.i === block.i) {
        return {
          ...block,
          w: newItem.w,
          h: newItem.h,
          content: findCourse(cpyCourses, oldItem) as Course,
        };
      } else {
        return block;
      }
    });

    cpyCourses[activeYear] = {
      ...cpyCourses[activeYear],
      courses: newLayout,
    };
    setCourses(cpyCourses);
    return cpyCourses;
  };

  const findCourse = (cpyCourses: Year[], course: ReactGridLayout.Layout) => {
    const foundCourse = cpyCourses[activeYear].courses.find(
      (e) => e.i === course.i
    );
    if (foundCourse) {
      return foundCourse.content;
    } else {
      return {
        name: "",
        points: 0,
        link: "",
        level: "",
        code: "",
        rating: 0,
        group: "course",
      };
    }
  };

  const addYear = () => {
    let cpyCourses = courses.slice();
    cpyCourses.push({
      year: cpyCourses.length,
      courses: [],
    });
    setCourses(cpyCourses);
  };

  const removeYear = () => {
    if (courses.length > 1) {
      let cpyCourses = courses.slice();
      cpyCourses.pop();
      setCourses(cpyCourses);
    }
  };

  const getSavedCourses = () => {
    // Uncomment for local storage but it does not work correctly

    // if (savedCoursesLocalStorage) {
    //   setSavedCourses(savedCoursesLocalStorage);
    //   return savedCoursesLocalStorage;
    // } else {
    //   return savedCourses;
    // }
    return savedCourses;
  };

  const addToSavedCourses = (course: Course) => {
    const savedCoursesCpy = savedCourses.slice();
    savedCoursesCpy.push(course);
    setSavedCourses(savedCoursesCpy);
    setSavedCoursesLocalStorage(savedCoursesCpy);
  };

  const removeFromSavedCoursesByIndex = (index: number) => {
    const savedCoursesCpy = savedCourses.slice();
    savedCoursesCpy.splice(index, 1);
    setSavedCoursesLocalStorage(savedCoursesCpy);
    setSavedCourses(savedCoursesCpy);
  };

  const removeFromSavedCoursesByObject = (course: Course) => {
    const savedCoursesCpy = savedCourses.slice();
    const index = savedCourses.indexOf(course);
    savedCoursesCpy.splice(index, 1);
    setSavedCoursesLocalStorage(savedCoursesCpy);
    setSavedCourses(savedCoursesCpy);
  };

  return {
    courses,
    setCourses,
    coursesActiveYear,
    activeYear: getChosenYear,
    setActiveYear: setChosenYear,
    addCourse,
    editCourse,
    removeCourse,
    saveChanges,
    resetChanges,
    removeAllCoursesInYear,
    resetCourseSize,
    addYear,
    removeYear,
    getSavedCourses,
    addToSavedCourses,
    removeFromSavedCourses: removeFromSavedCoursesByIndex,
    removeFromSavedCoursesByObject,
    draggingCourse,
    setDraggingCourse,
  };
}
