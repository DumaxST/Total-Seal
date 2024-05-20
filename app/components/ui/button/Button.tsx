import { classNames } from 'primereact/utils'
import React from 'react'

interface ButtonProps {
    text: string
    className?: string
}
export const Button = ({text, className}:ButtonProps) => {
  return (
    <button type="button" className={`max-h-8 rounded	 text-white bg-secondary font-bold  py-2 px-6  focus:outline-none  text-xs  text-center flex items-center flex-row justify-center		  ${className}`}>
      {text}     
    </button>
  )
}
