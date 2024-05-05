import React from 'react'
import Image from 'next/image'

import { Dropdown } from "@/app/components/ui";

import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <div className={`flex py-2.5 ps-9 pe-9 items-center justify-between text-white ${styles.navbar}`}>
        <div className='flex items-center gap-2'>
          <Image 
            src="/images/logo-white.png" 
            width={100}
            height={25}
            alt="logo" 
          />
          <div className='h-10 border-l-2 border-primary'></div>

          <h1>Total Seal</h1> 
        </div>
        
        <Dropdown/>
    </div>
  )
}
