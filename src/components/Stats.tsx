import React from "react";
import { Course } from "../shared/interfaces";
import Stat from "./Stat";

interface StatsProps {
    course: Course;
}

export default function Stats ({ course } : StatsProps) {
  return (
    <div className="stats bg-cream text-onyx">
        <Stat 
            label="Studietakt"
            value={course.pace}
        />
        <Stat 
            label="Poäng"
            value={course.points}
        />
        <Stat 
            label="Kurskod"
            value={course.code}
        />
        <Stat 
            label="Läsperiod"
            value={course.period}
        />
    </div>
  );
}

