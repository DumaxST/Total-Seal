
import { headingFont } from "@/app/config/fonts";
import SkeletonTable from "@/app/ui/skeletons/SkelonTable";
import { CardWrapper } from "@/app/ui/CardWrapper";
import { fetchDevices } from "@/app/ui/dashbboard/main/api/devicesApi";
import { Suspense } from "react";

import Table from '../../ui/table/Table';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/utils/sesionConfig";

export default async function MainPage() {

  const session = await getServerSession(authOptions);
  if (!session) return <div>Please sign in</div>

  const devices = await fetchDevices((session.user as { token?: string }).token || '');
  console.log(devices)
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12">
        <h2 className={`${headingFont.className} pb-4`}>Últimas alertas</h2>
      </div>
      <div className="col-span-12">
        <CardWrapper>
          <Suspense fallback={<SkeletonTable />}>
            {
              devices?.seal_devices !== null ? <Table data={devices.seal_devices} /> : <p>Sin unidades </p>
            }
          </Suspense>

        </CardWrapper>
      </div>
    </div>
  );
}