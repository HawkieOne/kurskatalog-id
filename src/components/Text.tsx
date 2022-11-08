import React from 'react'
import { AllowedColors, TextVariant } from '../shared/interfaces';

interface TextProps {
    children: React.ReactNode;
    size?: TextVariant;
    color?: AllowedColors;
    hoverColor?: AllowedColors;
}

export default function Text({ children, size, color, hoverColor } : TextProps) {
  return (
    <p className={`text-onyx text-md ${size && size} ${color && color} ${hoverColor && (`group-hover:${hoverColor}`)}`}>
        {children}
    </p>
  )
}
