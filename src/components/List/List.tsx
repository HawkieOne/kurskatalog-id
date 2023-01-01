import React from 'react'

interface ListProps {
    children: React.ReactNode;
    direction: "vertical" | "horizontal";
}

export default function List({ children, direction } : ListProps) {
  return (
    <ul className={`h-full w-full flex flex-col text-ellipsis space-y-2`}>
        {children}
    </ul>
  )
}
