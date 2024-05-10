import React, { useState } from 'react';
import {headingFont} from '@/app/config/fonts';

import Image  from "next/image";
import {Icon } from "@/app/components/ui";


export default function AuthLayout({children}: {children: React.ReactNode}) {

  return (
    <main className={`max-w-screen max-h-screen min-h-screen heroContainer`}>
    <section className="heroLeft">
        <h1 className={`${headingFont.className} heroLeftTitle text-7xl`}>Total Seal</h1>
        <Image 
          src="/images/logo-white.png" 
          width={180}
          height={48}
          alt="hero" />
    </section>
    {children}
    
    <section className="heroRight"></section>
         
  </main>
  );
}