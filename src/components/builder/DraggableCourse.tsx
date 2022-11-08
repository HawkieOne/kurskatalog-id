import React from "react";
import { useDrag } from "react-dnd";
import { AiOutlineClose } from "react-icons/ai";
import { ItemTypes } from "../../shared/interfaces";

export default function DraggableCourse() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.COURSE,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className={`card card-compact w-56 h-28 hshadow-xl bg-cream ${isDragging && "bg-red-200"}`} ref={drag}>
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn btn-square btn-xs bg-onyx  border-none text-white" >
            <AiOutlineClose />
          </button>
        </div>
        <p className="text-sm text-black">
          We are using cookies for no reason.
        </p>
      </div>
    </div>
  );
}
