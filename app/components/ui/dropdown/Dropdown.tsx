'use client'
import React, { useEffect, useState} from 'react';

import { bodySecondaryFont} from "@/app/config/fonts";
import Link from 'next/link'
import { Icon } from "@/app/components/ui";

export const Dropdown = () => {
  
    const [isOpen, setIsOpen] = useState(false);

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
                <button  className='block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white bg-white'>
                       <Icon
                    color="#80D602"
                    size={20}
                    icon="users"
                    className={` `}/>
                  
                    
                </button>
                <p className={`${bodySecondaryFont.className}`}>Total Seal</p>

            </div>
            {
                isOpen && <button onClick={closeDropdown} tabIndex={-1} className='fixed inset-0 h-full w-full cursor-default' ></button>
            }
           
           
            <div className={`${isOpen ? "block" : "hidden"} z-10 absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg  shadow-xl`}>
                <Link href="#" className='block px-4 py-2 text-gray-800 hover:text-white button'>
                <Icon
                    color="#3B83FF"
                    size={30}
                    icon="icon-gear"
                    className={` rounded p-1.5`}/>
                    Configuración
                </Link>
                <Link href="/auth/login" className='block px-4 py-2  text-gray-800  hover:text-white button'>
                <Icon
                    color="#3B83FF"
                    size={30}
                    icon="icon-logout"
                    className={` rounded p-1.5`}/>
                    Salir
                </Link>
            </div>
        </div>
    )
  
}
