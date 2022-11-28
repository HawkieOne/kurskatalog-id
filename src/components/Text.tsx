import React from 'react'
import { AlignVaraint, AllowedTextColors, FontVariant, TextVariant } from '../shared/interfaces';

interface TextProps {
    children: React.ReactNode;
    size?: TextVariant;
    color?: AllowedTextColors;
    hoverColor?: AllowedTextColors;
    font?: FontVariant;
    align?: AlignVaraint;
}

export default function Text({ children, size, color, hoverColor, font, align} : TextProps) {
  return (
    <p className={` ${color ? color : "text-onyx"} text-md ${size && size} ${font && font}  ${align && align} ${hoverColor && (`group-hover:${hoverColor}`)}`}>
        {children}
    </p>
  )
}
