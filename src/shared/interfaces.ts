export type AllowedTextVariants =
  | "text-sm"
  | "text-md"
  | "text-xl"
  | "text-2xl"
  | "text-3xl";

export type AllowedTitleVariants =
  | "text-2xl"
  | "text-4xl";

export type AllowedFontVariants =
  | "font-light"
  | "font-semibold"
  | "font-bold";

export type AllowedAlignVariants =
  | "text-left"
  | "text-center"
  | "text-right";

export type AllowedTextColors =
  | "text-black"
  | "text-white"
  | "text-whiteBackground"
  | "text-pink"
  | "text-onyx"
  | "text-midnightGreenEagleGreen"
  | "text-creamDark"
  | "text-darkGrey";

export type AllowedBgColors =
  | "bg-black"
  | "bg-white"
  | "aquamarine"
  | "bg-onyx"
  | "bg-midnightGreenEagleGreen"
  | "bg-creamDark"
  | "bg-lightGreen"
  | "bg-deepBlue"
  | "bg-darkMossgreen"
  | "bg-lightSeaGreen"
  | "bg-darkGrey"
  | "bg-boneGrey"
  | "bg-webGrey"
  ;

export const ItemTypes = {
  COURSE: "course",
};

export interface Preset {
  name: string;
  years: Year[];
}

export interface Year {
  year: number;
  courses: BuildingBlock[];
}

export type CoursesPeriod = (Course | null)[];

export interface Course {
  name: string;
  points: number;
  link: string;
  level: string; // CAN ONLY BE SOME VALUES
  code: string;
  registerCode?: string;
  description?: string;
  pace?: number;
  startDate?: string;
  endDate?: string;
  prerequisite?: string;
  location?: string;
  period?: string;
  year?: number;
  rating: number;
  group: "course" | "custom" | "exchange" | "working" | "yearOff";
}
export interface BuildingBlock {
  x: number;
  y: number;
  w: number;
  h: number;
  i: string;
  content: Course;
  isResizable?: boolean;
  maxH: number;
}
