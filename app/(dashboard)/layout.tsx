import { Navbar } from '@/ui';


export default function DashbboardLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Navbar/>
      {children}  
    </>
  );
}