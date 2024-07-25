
import { headingFont} from "@/app/config/fonts";
import { Main, TableWithFilter } from '@/app/ui';
import SkeletonTable from "@/app/ui/auth/skeletons/SkelonTable";
import { CardWrapper } from "@/app/ui/CardWrapper";
import { fetchDevices } from "@/app/ui/dashbboard/main/api/devicesApi";
import { Suspense } from "react";
import { devicesColumns } from '@/app/lib/constants';
import Table from '../../ui/table/Table';

export default async function MainPage() {
  
  const devices = await fetchDevices();
  
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