export type TextVariant = "text-sm" | "text-md" | "text-xl" | "text-2xl" | "text-3xl";
export type TitleVariant = "text-2xl" | "text-4xl";
export type FontVariant = "font-light" | "font-semibold" | "font-bold";
export type AlignVariant = "text-left" | "text-center" | "text-right";

export interface TextVariantObject {
  small: TextVariant;
  medium: TextVariant;
  large: TextVariant;
  xl: TextVariant;
  xxl: TextVariant;
}

export interface TitleVariantObject {
  small: TitleVariant;
  large: TitleVariant;
}

export interface FontVariantObject {
  light: FontVariant;
  semibold: FontVariant;
  bold: FontVariant;
}

export interface AlignVariantObject {
  left: AlignVariant;
  center: AlignVariant;
  right: AlignVariant;
}

export type AllowedTextColors =
  | "text-black"
  | "text-white"
  | "text-pink"
  | "text-onyx"
  | "text-cream"
  | "text-creamDark";

export type AllowedBgColors =
  | "bg-black"
  | "bg-white"
  | "bg-pink"
  | "bg-onyx"
  | "bg-cream"
  | "bg-creamDark";

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
  group?: "course" | "custom" | "exchange" | "working" | "yearOff";
}
export interface BuildingBlock {
  x: number;
  y: number;
  w: number;
  h: number;
  i: string;
  content: Course;
  isResizable?: boolean;
}
