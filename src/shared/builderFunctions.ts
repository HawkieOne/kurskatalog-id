import { courses, templateEmpty, templateID } from "./data";
import { Course } from "./interfaces";

export const getCourse = (code: string) => {
    return courses.find((course: Course) => code === course.code);
}

export const createEmptyTemplate = () => {
  return templateEmpty;
}

export const createIDTemplate = () => {
  return templateID;
}
