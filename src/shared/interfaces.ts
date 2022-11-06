export interface Course {
    name: string,
    description: string;
    pace: number,
    startDate: number,
    endDate: number,
    points: number,
    location: string,
    studyForm: string, // CAN ONLY BE SOME VALUES
    code: string,
    link: string,
    letter: string
}
