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
      <link
        rel="icon"
        href="/icons/favicon.ico"
        sizes="any"
      />

      </head>
      <body className={bodyFont.className}>
        {children}
      </body>
    </html>
  );
}
