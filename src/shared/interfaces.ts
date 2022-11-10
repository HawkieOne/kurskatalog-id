
export type TextVariant = "text-md" | "text-xl" | "text-2xl" | "text-3xl";
export type TitleVariant = "text-2xl" | "text-4xl";
export interface TextVariantObject {
  small: TextVariant;
  medium: TextVariant;
  large: TextVariant;
  xl: TextVariant;
}

export interface TitleVariantObject {
  small: TitleVariant;
  large: TitleVariant;
}

export type AllowedColors =
  | "text-black"
  | "text-white"
  | "text-pink"
  | "text-onyx"
  | "text-cream";

export const ItemTypes = {
  COURSE: "course",
};

export interface Preset {
    name: string;
    years: Year[];
}

export interface Year {
    firstPeriod: Course;
    secondPeriod: Course;
    thirdPeriod: Course;
    fourthPeriod: Course;
}

export interface Course {
    name: string;
    points: number;
    link: string;
    level: string; // CAN ONLY BE SOME VALUES
    code: string;
    description?: string;
    pace?: number;
    startDate?: number;
    endDate?: number;
    prerequisite?: String;
    location?: string;
    period?: String;
    rating?: number;
}
