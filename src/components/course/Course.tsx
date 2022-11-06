import React from "react";
import { Course } from "../../shared/interfaces";

interface CourseProps {
  course: Course;
}

export default function CourseCard({ course }: CourseProps) {
  return (
    <div className="card w-3/4 bg-white shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{course.name}</h2>
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium truncate">
            {course.description}
          </div>
          <div className="collapse-content">
            <p>{course.description}</p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Läs mer</button>
        </div>
      </div>
    </div>
  );
}
