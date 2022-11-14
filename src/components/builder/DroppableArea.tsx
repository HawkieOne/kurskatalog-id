import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { TestCourse2 } from '../../shared/data';
import { Course, ItemTypes } from '../../shared/interfaces';

interface DroppableAreaProps {
  course: Course | null;
  index: number;
  basis: string;
  onRemove: (index: number) => void;
}

export default function DroppableArea({ course, index, basis, onRemove } : DroppableAreaProps) {

    const [{ isOver }, drop] = useDrop(
        () => ({
          accept: ItemTypes.COURSE,
          drop: () => ({code: course?.code}),
          collect: (monitor) => ({
            isOver: !!monitor.isOver()
          })
        }),
        []
      )

  return (
    <div className={`${basis} w-full bg-white ${isOver && "bg-pink"} border border-onyx border-dashed rounded-xl
                     flex justify-center items-center hover:bg-cream cursor-pointer`} ref={drop}
                     onClick={() => onRemove(index)}>
        {course ? course.code : "DROP A COURSE HERE"}
    </div>
  )
}
