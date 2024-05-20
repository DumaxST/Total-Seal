import './globals.css';

import { bodyFont } from './config/fonts';
import 'primereact/resources/themes/lara-light-blue/theme.css';


import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Total Seal",
  description: "Your track system",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
   
          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>


      </head>
      <body className={bodyFont.className}>
        {children}
      </body>
    </html>
  );
}
