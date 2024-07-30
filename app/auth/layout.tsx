import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import {headingFont} from '@/app/config/fonts';

import Image  from "next/image";

export default async function AuthLayout({children}: {children: React.ReactNode}) {
  const session = await getServerSession();

  if (session) {
    redirect('/dashboard');
  }
  return (
    <main className={`max-w-screen max-h-screen min-h-screen heroContainer`}>
    <section className="heroLeft">
        <h1 className={`${headingFont.className} heroLeftTitle text-7xl`}>Total Seal</h1>
        <Image 
          src="/images/logo-white.png" 
          width={100}
          height={20}
          alt="hero" />
    </section>
    {children}
    
    <section className="heroRight"></section>
         
  </main>
  );
}