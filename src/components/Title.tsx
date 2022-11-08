import React from 'react'
import { TitleVariant } from '../shared/interfaces';

interface TitleProps {
    children: React.ReactNode;
    size: TitleVariant;
}

export default function Title({ children, size } : TitleProps) {
  return (
    <h1 className={`${size === "text-2xl" ? "text-2xl" : "text-4xl" } text-onyx`}>
        {children}
    </h1>
  )
}
