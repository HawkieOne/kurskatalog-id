import React from 'react'
import { AllowedTextColors, TextVariant } from '../shared/interfaces';

interface TextProps {
    children: React.ReactNode;
    size?: TextVariant;
    color?: AllowedTextColors;
    hoverColor?: AllowedTextColors;
}

export default function Text({ children, size, color, hoverColor } : TextProps) {
  return (
    <p className={` ${color ? color : "text-onyx"} text-md ${size && size} ${hoverColor && (`group-hover:${hoverColor}`)}`}>
        {children}
    </p>
  )
}
