import {Roboto } from "next/font/google";

import localFont from 'next/font/local'

export const headingFont = localFont({
    src: '../../public/fonts/proximanova_bold.woff2',
    display: 'swap',
   
})

export const bodyFont = Roboto({ 
    subsets: ["latin"],
    weight: [ '400', '700'],
 });

export const bodySecondaryFont = localFont({
    src: '../../public/fonts/proximanova_regular.woff2',
    display: 'swap',
})



