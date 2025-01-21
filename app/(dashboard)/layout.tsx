import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Navbar, Sidebar } from '../ui';
import { AuthProvider } from '../ui/auth/AuthProvider';
import { WebSocketProvider } from '../lib/context/WebsocketContext';
import { getUserPreferences } from '../ui/dashbboard/main/api/devicesApi';
import { authOptions } from '../lib/utils/sesionConfig';

interface Props {
  children: React.ReactNode;
}
const MainContent = async ({ children }: Props) => {
  const session = await getServerSession(authOptions);
  const userPreferences = await getUserPreferences(session?.user.token);
  return (
    <WebSocketProvider code={userPreferences?.user_preferences?.code}>
      <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased ">
        <div className="flex flex-col">
          <div>
            <Navbar />
          </div>
          <div className="flex flex-row">
            <Sidebar />
            <div className="p-6 w-full text-slate-900">
              {children}
            </div>
          </div>
        </div>
      </div>
    </WebSocketProvider>
  )
}
export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();

  if (!session) {
    redirect('/auth/login');

  }
  return (
    <AuthProvider>
      <MainContent>
        {children}
      </MainContent>
    </AuthProvider>
  );
} 