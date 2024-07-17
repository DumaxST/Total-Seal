import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Navbar, Sidebar } from '../ui';
import { AuthProvider } from '../ui/auth/AuthProvider';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <AuthProvider>
      <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased ">
        <div className="flex flex-col">
          <div>
            <Navbar />
          </div>
          <div className="flex flex-row">
            <Sidebar/>
            <div className="p-6 w-full text-slate-900">
              {children}
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
} 