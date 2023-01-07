export const localStorageLayoutKey = "layout";
export const localStorageSavedCoursesKey = "savedCourses";
export const localStorageActiveYearKey = "activeYear";
export const localStorageTutorialModalKey = "tutorial";
export const localStorageUploadedPresetsKey = "uploadedPresets";

export const TextVariants = {
    small: "text-sm" as const,
    medium: "text-md" as const,
    large: "text-xl" as const,
    xl: "text-2xl" as const,
    xxl: "text-3xl" as const,
}

export const TitleVariants = {
    small: "text-2xl" as const,
    large: "text-4xl" as const,
}

export const FontVariants = {
    light: "font-light" as const,
    semibold: "font-semibold" as const,
    bold: "font-bold" as const,
}

export const AlignVariants = {
    left: "text-left" as const,
    center: "text-center" as const,
    right: "text-right" as const,
}

export const maxRating = 5;

export const Templates = {
    id: "Interaktion & Design",
    custom: "Anpassad plan",
    empty: "Tom plan",
    upload: "Ladda upp plan"
}


export const CardsColors = {
    course: "bg-darkGrey",
    custom: "bg-customCourse",
    pause: "bg-pauseCourse",
    exchange: "bg-exchangeCourse",
    work: "bg-workCourse"
};