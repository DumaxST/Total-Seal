import React from 'react'

interface ButtonProps {
    text: string
}
export const Button = ({text}:ButtonProps) => {
  return (
    <button type="button" className={`max-h-8 rounded	 text-white bg-secondary font-bold  py-2 px-6  focus:outline-none  text-xs  text-center inline-flex items-center `}>
      {text}     
    </button>
  )
}
