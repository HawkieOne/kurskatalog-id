import { atom, selector } from "recoil";
import { customCourse } from "../shared/data";
import { createEmptyTemplate } from "../shared/functions";
import { Course, Year } from "../shared/interfaces";

export const hasStartedEditingState = atom({
  key: "hasStartedEditingState",
  default: false,
});

export const activeYearState = atom({
  key: "activeYearState",
  default: 0,
});

export const coursesBuilderState = atom({
  key: "coursesBuilderState",
  default: createEmptyTemplate() as Year[],
});

export const coursesBuilderSelector = selector({
  key: "coursesBuilderSelector",
  get: ({ get }) => {
    return get(coursesBuilderState);
  },
  set: ({ get, set }, newValue) => {
    set(coursesBuilderState, newValue);
  },
});

export const coursesYearState = selector({
  key: "coursesYearState",
  get: ({ get }) => {
    const year = get(activeYearState);
    const courses = get(coursesBuilderState);
    return courses[year];
  },
});

export const savedCoursesState = atom({
  key: "savedCoursesState",
  default: [] as Course[],
});

export const draggingSavedCourseState = atom<Course | null>({
  key: "draggingSavedCourseState",
  default: null,
});

export const rightDrawerState = atom({
  key: "rightDrawerState",
  default: false,
});

export const leftDrawerState = atom({
  key: "leftDrawerState",
  default: false,
});

export const courseRightDrawerState = atom<Course | null>({
  key: "courseRightDrawerState",
  default: null,
});

export const tutorialsModalOpenState = atom({
  key: "tutorialsModalOpenState",
  default: false,
});

export const keyboardShortcutsModalOpenState = atom({
  key: "keyboardShortcutsModalOpenState",
  default: false,
});

export const courseModalOpenState = atom({
  key: "courseModalOpenState",
  default: false,
});

export const activeCustomCourseEditState = atom<{
  course: Course;
  id: string | null;
}>({
  key: "activeCustomCourseEditState",
  default: { course: customCourse, id: null },
});

export const resizeIsAllowed = atom({
  key: "resizeIsAllowedState",
  default: true,
});

