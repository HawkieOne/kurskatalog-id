import { atom, selector } from "recoil";
import { moveCourse } from "../shared/builderFunctions";
import { testDataYearsBuilder } from "../shared/data";
import { Course, Year } from "../shared/interfaces";

export const activeYearState = atom({
  key: "activeYearState",
  default: 0
});

export const coursesBuilderState = atom({
  key: "coursesBuilderState",
  default: testDataYearsBuilder as Year[],
});

export const coursesBuilderSelector = selector({
  key: "coursesBuilderSelector",
  get: ({ get }) => {
    return get(coursesBuilderState);
  },
  set: ({ get, set }, newValue) => {
    set(coursesBuilderState, newValue);
  }
});

export const movingCourseState = atom<Course | null>({
  key: "mobingCourseState",
  default: null
})

export const hoveringCourseState = atom<Course | null>({
  key: "hoveringCourseState",
  default: null
})

export const coursesYearState = selector({
  key: "coursesYearState",
  get: ({ get }) => {
    const year = get(activeYearState);
    const courses = get(coursesBuilderState);
    return courses[year];
  },
  // set: ({ get, set }, newValue) => {
  //   set(coursesBuilderState, newValue);
  // }
});

// const periodsYearState = atomFamily({
//   key: ‘MyAtom’,
//   default: selectorFamily({
//     key: 'MyAtom/Default',
//     get: param => ({get}) => {
//       const otherAtomValue = get(otherState);
//       return computeDefaultUsingParam(otherAtomValue, param);
//     },
//   }),
// });
