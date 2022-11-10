import React from "react";
import { Course } from "../shared/interfaces";
import Stat from "./Stat";

interface StatsProps {
    course: Course;
}

export default function Stats({ course }: StatsProps) {
    return (
        <div className="stats bg-cream text-onyx">
            {course.pace &&
                <Stat
                    label="Studietakt"
                    value={course.pace}
                />}
            <Stat
                label="Poäng"
                value={course.points}
            />
            {course.period && <Stat 
                label="Kurskod"
                value={course.code}
            />}
        </div>
    );
}
