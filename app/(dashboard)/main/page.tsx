
import { headingFont} from "@/app/config/fonts";
import { Main, TableWithFilter } from '@/app/ui';
import SkeletonTable from "@/app/ui/auth/skeletons/SkelonTable";
import { CardWrapper } from "@/app/ui/CardWrapper";
import { fetchDevices } from "@/app/ui/dashbboard/main/api/devicesApi";
import { Suspense } from "react";
import { devicesColumns } from '@/app/lib/constants';
import Table from '../../ui/table/Table';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/utils/sesionConfig";

export default async function MainPage() {
  const session = await getServerSession(authOptions);
  if (!session) return <div>Please sign in</div>

  console.log(session)
  const devices = await fetchDevices((session.user as { token?: string }).token || '');
  
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12">
          <CardWrapper>
            <h3 className={`${headingFont.className} pb-4`}>Últimas alertas</h3>
            <Suspense fallback={<SkeletonTable/>}>
                <Table rows={devices}/>
            </Suspense>
          </CardWrapper>
      </div>
    </div>
  );
}