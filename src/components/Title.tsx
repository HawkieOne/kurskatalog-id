import React from 'react'

interface TitleProps {
    children: React.ReactNode;
}

export default function Title({ children } : TitleProps) {
  return (
    <h1 className="text-4xl text-onyx">
        {children}
    </h1>
  )
}
