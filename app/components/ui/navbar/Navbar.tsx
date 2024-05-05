import React from 'react'
import { Dropdown } from "@/app/components/ui";

import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <div className={`flex p-8 items-center justify-between text-white ${styles.navbar}`}>


        <div>
          <h1>Total Seal</h1>
        </div>
        
        <Dropdown/>
        


       
      


    </div>
   
  )
}
