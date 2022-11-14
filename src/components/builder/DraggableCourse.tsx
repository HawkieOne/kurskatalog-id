import React from "react";
import { useDrag } from "react-dnd";
import { AiOutlineClose } from "react-icons/ai";
import { Course, ItemTypes } from "../../shared/interfaces";

interface DraggableCourseProps {
  course: Course;  
}

export default function DraggableCourse({ course } : DraggableCourseProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.COURSE,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className={`card card-compact w-64 h-44 hshadow-xl bg-cream ${isDragging && "bg-red-200"}`} ref={drag}>
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn btn-square btn-xs bg-onyx  border-none text-white" >
            <AiOutlineClose />
          </button>
        </div>
        <p className="text-sm text-black">
          {course.code}
        </p>
      </div>
    </div>
  );
}
