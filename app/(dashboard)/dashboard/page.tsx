import { headingFont } from "@/app/config/fonts";
import { CardWithIcon } from "@/app/ui/cards/CardWithIcon";
import { CardWrapper } from "@/app/ui/CardWrapper";
import {TableDevices } from '../../ui/devices/TableDevices';
import { getPaginatedAlerts } from "@/app/lib/actions/alert-action";
import { Suspense } from "react";
import TableSkeleton from "@/app/ui/auth/skeletons/TableSkeleton";
import { devicesColumns } from "@/app/lib/constants";
import SkeletonTable from '@/app/ui/auth/skeletons/SkelonTable';
import { Alert } from "@/app/lib/definitions/alert-definition";

interface Props{
  searchParams:{
    take?: string;
    page?: string;
  }
}
export default async function DashboardPage({searchParams}:Props) {
 
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const take = searchParams.take ? parseInt(searchParams.take) : 2;

  const alerts: Alert[] = await getPaginatedAlerts({take:take, page:page});
  
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="grid grid-cols-subgrid gap-4 col-span-4">
        <div className="col-start-1 col-end-3">
              <CardWithIcon
                title="2"
                subtitle="Unidades"
                icon="unidades"
              />
        </div>
        <div className="col-start-3 col-end-6">
              <CardWithIcon
                title="2"
                subtitle="Remolque"
                icon="unidad-pipa"
              />
        </div>
            <div className="col-start-1 col-end-3">
            <CardWithIcon
              title="2"
              subtitle="Remolques con contenido"
              icon="contenido"
            />
            </div>
            <div className="col-start-3 col-end-6">
              <CardWithIcon
                title="3.5 min"
                subtitle="Promedio de sellos por unidad"
                icon="sellos"
              />
            </div>
            {/* <div className="col-start-1 col-end-6">
              <CardWrapper className="col-start-1 col-end-3">
                <h3 className={`${headingFont.className}`}>Unidades con más alertas - últimos 7 días</h3>
                <HorizontalBar/>
              </CardWrapper>
             </div> */}
          </div> 
    
          <div className="col-span-8">

              <CardWrapper>
                <h3 className={`${headingFont.className} pb-4 `}>Últimas alertas</h3>
                {/* TODO: -refactor loading state */}
                <Suspense fallback={<p>loading....</p>} >
                  <TableDevices alerts={alerts}/>
                </Suspense>
              </CardWrapper>
          </div>
        </div>
  );
}