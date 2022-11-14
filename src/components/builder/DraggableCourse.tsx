import React from "react";
import { useDrag } from "react-dnd";
import { AiOutlineClose } from "react-icons/ai";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { movingCourseState } from "../../atoms/atoms";
import { getCourse } from "../../shared/builderFunctions";
import { Course, ItemTypes } from "../../shared/interfaces";

interface DraggableCourseProps {
  course: Course;
}
interface DropResult {
  code: string;
}

export default function DraggableCourse({ course }: DraggableCourseProps) {
  const moveCourse = useSetRecoilState(movingCourseState);
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.COURSE,
      item: { code: course.code },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult<DropResult>()
        if (item && dropResult) {
          const movingCourse = getCourse(dropResult.code);
          const hoveringsCourse = getCourse(item.code);
          alert(`You dropped ${movingCourse?.code} into ${hoveringsCourse?.code}!`)
        }
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [course]
  );

  return (
    <div
      className={`card card-compact w-64 h-44 hshadow-xl bg-cream ${
        isDragging && "bg-red-200"
      }`}
      ref={drag}
    >
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn btn-square btn-xs bg-onyx  border-none text-white hover:rotate-90 hover:text-pink">
            <AiOutlineClose />
          </button>
        </div>
        <p className="text-sm text-black">{course.code}</p>
      </div>
    </div>
  );
}
