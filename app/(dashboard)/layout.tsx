import { Navbar,Sidebar } from '@/app/components/ui';

export default function DashbboardLayout({children}: {children: React.ReactNode}) {
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