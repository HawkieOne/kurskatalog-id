import React from 'react'
import { AllowedTitleVariants } from '../shared/interfaces';

interface TitleProps {
    children: React.ReactNode;
    size?: AllowedTitleVariants;
}

export default function Title({ children, size } : TitleProps) {
  return (
    <h1 className={`text-4xl ${size && size} text-onyx`}>
        {children}
    </h1>
  )
}
