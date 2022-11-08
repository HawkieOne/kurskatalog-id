import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../../shared/interfaces'

export default function DroppableArea() {

    const [{ isOver }, drop] = useDrop(
        () => ({
          accept: ItemTypes.COURSE,
          drop: () => console.log("DROPPED"),
          collect: (monitor) => ({
            isOver: !!monitor.isOver()
          })
        }),
        []
      )

  return (
    <div className={`w-56 h-28 bg-white ${isOver && "bg-pink"} border border-onyx border-dotted rounded-xl`} ref={drop}>

    </div>
  )
}
