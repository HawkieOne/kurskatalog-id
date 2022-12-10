import { AlignVariantObject, FontVariantObject, TextVariantObject, TitleVariantObject } from "./interfaces";

export const localStorageLayuotKey = "layout";
export const localStorageSavedCoursesKey = "savedCourses";
export const TextVariant: TextVariantObject = {
    small: "text-md",
    medium: "text-xl",
    large: "text-2xl",
    xl: "text-3xl",
}

export const TitleVariant: TitleVariantObject = {
    small: "text-2xl",
    large: "text-4xl",
}

export const FontVariants: FontVariantObject = {
    light: "font-light",
    semibold: "font-semibold",
    bold: "font-bold",
}

export const AlignVariants: AlignVariantObject = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
}

export const maxRating = 5;

export const Templates = {
    id: "Interaktion & Design",
    custom: "Anpassad mall",
    empty: "Tom mall",
    upload: "Ladda upp mall"
}
