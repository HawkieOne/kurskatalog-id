import React from 'react'
import { AllowedTextColors, FontVariant, TextVariant } from '../shared/interfaces';

interface TextProps {
    children: React.ReactNode;
    size?: TextVariant;
    color?: AllowedTextColors;
    hoverColor?: AllowedTextColors;
    font?: FontVariant;
}

export default function Text({ children, size, color, hoverColor, font} : TextProps) {
  return (
    <p className={` ${color ? color : "text-onyx"} text-md ${size && size} ${font && font} ${hoverColor && (`group-hover:${hoverColor}`)}`}>
        {children}
    </p>
  )
}
