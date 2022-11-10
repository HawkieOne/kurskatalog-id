
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
    firstPeriod: Course;
    secondPeriod: Course;
    thirdPeriod: Course;
    fourthPeriod: Course;
}

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
    period: number;
    rating: number;
}
