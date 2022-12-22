import React from "react";
import { Course } from "../shared/interfaces";
import Stat from "./Stat";

interface StatsProps {
    course: Course;
}

export default function Stats({ course }: StatsProps) {
    return (
        <div className="stats bg-midnightGreenEagleGreen text-onyx">
            {course.pace &&
                <Stat
                    label="Studietakt"
                    value={course.pace}
                    unit={"%"}
                />}
            <Stat
                label="Poäng"
                value={course.points}
                unit={"hp"}
            />
            {course.period && <Stat
                label="Kurskod"
                value={course.code}
            />}
        </div>
    );
}
