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

export const exportDrawerState = atom({
  key: "exportDrawerState",
  default: false,
});

export const coursesDrawerState = atom({
  key: "coursesDrawerState",
  default: false,
});

export const fileSystemDrawerState = atom({
  key: "fileSystemDrawerState",
  default: false,
});

export const statisticsDrawerState = atom({
  key: "statisticsDrawerState",
  default: false,
});

export const settingsDrawerState = atom({
  key: "settingsDrawerState",
  default: false,
});

export const pointForExamState = atom({
  key: "pointForExamState",
  default: 360,
});

export const startYearState = atom({
  key: "startYearState",
  default: 2023,
});

export const showYearState = atom({
  key: "showYearState",
  default: false,
});

export const shortcutCoursesState = atom({
  key: "shortcutCoursesState",
  default: "c",
});
export const shortcutSettingsState = atom({
  key: "shortcutSettingsState",
  default: "p",
});
export const shortcutExportState = atom({
  key: "shortcutExportState",
  default: "a",
});
export const shortcutStatisticsState = atom({
  key: "shortcutStatisticsState",
  default: "g",
});


export const tutorialsModalOpenState = atom({
  key: "tutorialsModalOpenState",
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

