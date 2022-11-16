import { courses } from "./data";
import { Course } from "./interfaces";

export const getCourse = (code: string) => {
    return courses.find((course: Course) => code === course.code);
}
