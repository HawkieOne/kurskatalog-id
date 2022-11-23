import { courses, templateEmpty, templateID } from "./data";
import { Course } from "./interfaces";
import { v4 as uuidv4 } from "uuid";

export const getCourse = (code: string) => {
  return courses.find((course: Course) => code === course.code);
};

export const createBuildingBlock = (
  x: number,
  y: number,
  w: number,
  h: number,
  content: Course | undefined
) => ({
  x,
  y,
  w,
  h,
  i: uuidv4(),
  content,
});

export const createEmptyTemplate = () => {
  return templateEmpty;
};

export const createIDTemplate = () => {
  return templateID;
};
