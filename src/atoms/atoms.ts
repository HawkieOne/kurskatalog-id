import { atom, selector } from "recoil";
import { createEmptyTemplate } from "../shared/builderFunctions";
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
