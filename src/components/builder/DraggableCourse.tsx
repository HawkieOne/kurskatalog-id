import { useDrag } from "react-dnd";
import { getCourse } from "../../shared/builderFunctions";
import { Course, ItemTypes } from "../../shared/interfaces";
import useCourses from "../../shared/useCourses";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import Text from "../Text";
import { useSetRecoilState } from "recoil";
import { courseRightDrawerState, rightDrawerState } from "../../atoms/atoms";

interface DraggableCourseProps {
  course: Course | null;
  yearIndex: number;
  periodIndex: number;
  courseIndex: number;
  isOver: boolean;
  onRemove: (index: number) => void;
}
interface DropResult {
  yearIndex: number;
  periodIndex: number;
  courseIndex: number;
  course: Course;
}

export default function DraggableCourse({
  course,
  yearIndex,
  periodIndex,
  courseIndex,
  onRemove,
  isOver,
}: DraggableCourseProps) {
  const { switchCourses } = useCourses();
  const [isOverFlowMenuOpen, SetIsOverflowMenuOpen] = useState(false);
  const setIsRightDrawerOpen = useSetRecoilState(rightDrawerState);
  const setCourseRightDrawer = useSetRecoilState(courseRightDrawerState);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.COURSE,
      item: { code: course ? course.code : "-1" },
      canDrag: () => (course ? true : false),
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult<DropResult>();
        if (item && dropResult) {
          const hoveringsCourse = getCourse(item.code);
          if (hoveringsCourse) {
            switchCourses(
              {
                course: dropResult.course,
                yearIndex: dropResult.yearIndex,
                periodIndex: dropResult.periodIndex,
                courseIndex: dropResult.courseIndex,
              },
              {
                course: hoveringsCourse,
                yearIndex: yearIndex,
                periodIndex: periodIndex,
                courseIndex: courseIndex,
              }
            );
          }
        }
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [course, periodIndex, courseIndex]
  );

  return (
    <div
      className={`card h-full w-full ${
        course ? "bg-cream" : "bg-white"
      } shadow-lg ${isDragging && "bg-red-200"} ${
        isOver && "bg-pink"
      } text-onyx`}
      ref={drag}
      onMouseLeave={() => SetIsOverflowMenuOpen(false)}
    >
      <div className="card-body">
        <h2 className="card-title">
          {course ? course.name : "DROP A COURSE HERE"}
        </h2>
        <p>{course ? course.code : ""}</p>
        {course && (
          <div className="card-actions justify-end">
            <button
              className="btn bg-pink border-none text-onyx hover:text-white"
              onClick={() => {
                setCourseRightDrawer(course);
                setIsRightDrawerOpen(true);
              }}
            >
              Läs mer
            </button>
          </div>
        )}
      </div>
      <div
        className="absolute top-2 right-2 p-1 hover:bg-creamDark rounded cursor-pointer"
        onClick={() => SetIsOverflowMenuOpen(!isOverFlowMenuOpen)}
      >
        <div className="relative">
          <BiDotsVerticalRounded size="1.5em" />
          {isOverFlowMenuOpen && (
            <ul className="absolute menu bg-white top-full w-32 right-0 shadow-lg">
              <li>
                <div className="flex" onClick={() => onRemove(courseIndex)}>
                  <AiFillDelete />
                  <Text>Ta bort</Text>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
