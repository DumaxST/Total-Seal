import React from 'react'
import styles from '@/ui/navbar/navbar.module.css';
export const Navbar = () => {
  return (
    <div className={`flex text-white p-4 ${styles.bg_navbar}`}>
      <div>
        <h1>Torre de control</h1>
      </div>
      <div>
        <p>Dumax utili....</p>
      </div>
    </div>
  )
}
