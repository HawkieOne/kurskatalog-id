import CourseCard from "../components/course/Course";

export type TextVariant = "text-md" | "text-xl" | "text-2xl" | "text-3xl";

export interface TextVariantObject {
  small: TextVariant;
  medium: TextVariant;
  large: TextVariant;
  xl: TextVariant;
}

export type AllowedColors =
  | "text-black"
  | "text-white"
  | "text-pink"
  | "text-onyx"
  | "text-cream";

export interface Course {
  name: string;
  description: string;
  pace: number;
  startDate: number;
  endDate: number;
  points: number;
  location: string;
  studyForm: string; // CAN ONLY BE SOME VALUES
  code: string;
  link: string;
  letter: string;
}

export const ItemTypes = {
  COURSE: "course",
};

export interface Preset {
    years: Year[];
}

export interface Year {
    firstPeriod: Course;
    secondPeriod: Course;
    thirdPeriod: Course;
    fourthPeriod: Course;
}

export const ItemTypes = {
    COURSE: "course"
  }
