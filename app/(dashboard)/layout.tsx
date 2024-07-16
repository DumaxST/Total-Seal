import { Navbar,Sidebar } from '@/app/components/ui';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function DashbboardLayout({children}: {children: React.ReactNode}) {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/auth/login');
  }

  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased ">
      <div className="flex flex-col">
        <div>
          <Navbar/>
        </div>
        <div className="flex flex-row">
          <Sidebar/>
          <div className="p-6 w-full text-slate-900">
            {children}
          </div>
        </div>        
      </div>
    </div>
  );
} 