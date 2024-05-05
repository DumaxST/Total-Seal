'use client'
import React, { useEffect, useState} from 'react';

import { bodySecondaryFont} from "@/app/config/fonts";

export const Dropdown = () => {
  
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };
    useEffect(() => {
    }, [isOpen]);

    return (
        <div className='relative'>  
            <div className='flex items-center gap-2 cursor-pointer' onClick={toggleDropdown}>
                <button  className='block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white'>
                    <img className="h-full w-full object-cover  " src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" alt="image"/>
                    
                </button>
                <p className={`${bodySecondaryFont.className}`}>Total Seal</p>

            </div>
            {
                isOpen && <button onClick={closeDropdown} tabIndex={-1} className='fixed inset-0 h-full w-full cursor-default' ></button>
            }
           
           
            <div className={`${isOpen ? "block" : "hidden"} absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg  shadow-xl`}>
                <a href="#" className='block px-4 py-2 text-gray-800 hover:text-white button'>Configuración</a>
                <a href="#" className='block px-4 py-2  text-gray-800  hover:text-white button'>Salir</a>
            </div>
        </div>
    )
  
}
