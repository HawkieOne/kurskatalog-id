import { useDrop } from "react-dnd";
import { useRecoilValue } from "recoil";
import { activeYearState } from "../../atoms/atoms";
import { Course, ItemTypes } from "../../shared/interfaces";
import DraggableCourse from "./DraggableCourse";

interface DroppableAreaProps {
  course: Course | null;
  periodIndex: number;
  courseIndex: number;
  basis: string;
  onRemove: (index: number) => void;
}

export default function DroppableArea({
  course,
  periodIndex,
  courseIndex,
  basis,
  onRemove,
}: DroppableAreaProps) {
  const activeYear = useRecoilValue(activeYearState);
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.COURSE,
      // canDrop: () => (),
      drop: () => ({
        yearIndex: activeYear,
        periodIndex,
        courseIndex,
        course: course,
      }),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );

  return (
    <div
      className={`${basis} w-full bg-white rounded-2xl
                     flex justify-center items-center hover:bg-cream ${course ? "cursor-grab" : "cursor-auto"}`}
      ref={drop}
    >
      <DraggableCourse
        course={course}
        courseIndex={courseIndex}
        periodIndex={periodIndex}
        yearIndex={activeYear}
        onRemove={onRemove}
        isOver={isOver}
      />
    </div>
  );
}
