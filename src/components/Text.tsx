import React from 'react'
import { AllowedAlignVariants, AllowedTextColors, AllowedFontVariants, AllowedTextVariants } from '../shared/interfaces';

interface TextProps {
    children: React.ReactNode;
    size?: AllowedTextVariants;
    color?: AllowedTextColors;
    hoverColor?: AllowedTextColors;
    font?: AllowedFontVariants;
    align?: AllowedAlignVariants;
}

export default function Text({ children, size, color, hoverColor, font, align} : TextProps) {
  return (
    <p className={` ${color && color} text-md ${size && size} ${font && font}  ${align && align} ${hoverColor && (`group-hover:${hoverColor}`)}`}>
        {children}
    </p>
  )
}
