export const createEmptyPreset = () => {
    return [createEmptyCourse()];
}

const createEmptyCourse = () => {
    return {
        name: "string",
        description: "string",
        pace: null,
        startDate: null,
        endDate: null,
        points: null,
        location: "string",
        studyForm: "string",
        code: "string",
        link: "string",
        letter: "string",
      }
}