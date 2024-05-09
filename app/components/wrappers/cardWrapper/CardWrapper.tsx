import React from 'react'
interface CardWrapperProps {
    className?: string
    children: React.ReactNode
}

export const CardWrapper = ({className, children}:CardWrapperProps) => {
  return (
    <div className={`rounded overflow-hidden shadow-lg p-5 bg-white ${className}`}>
        {children}
    </div>
  )
}
