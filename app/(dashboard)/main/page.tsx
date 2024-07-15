import { Suspense } from 'react';
import { TableWithFilter } from "@/app/components/ui";
import { CardWrapper } from "@/app/components/wrappers";
import { headingFont} from "@/app/config/fonts";
import { cookies } from 'next/headers'
import { devicesColumns } from '@/app/lib/data';
import TableSkeleton from '@/app/ui/auth/skeletons/TableSkeleton';


async function getDevices(token:string){
  
  const res = await fetch("https://lite.dumaxst.com:5000/v1/seal_devices", {
    method: 'GET',
    headers: {
      'X-Api-Key': "GPCZeUzVrpsIypnhF2FX+28NVNH2ZebhnBUVLHvbn3Q=",
      'Content-Type': 'application/json',
      'Uuid': 'RESTFul-API',
      "App": "RESTFul API"
    }
  })
  const data= await res.json();
  console.log(data.seal_devices)

 // const data = await res.json();

  return data.seal_devices
}
export default async function MainPage() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value  ??"";
 
 const devices = await getDevices(token);

  return (
    <div className="grid grid-cols-12 gap-4">
{/* 
      <div className="grid grid-cols-subgrid gap-4 col-span-4">
        <div className="col-start-1 col-end-3">
          <CardWithIcon
            title="30"
            subtitle="Unidades"
            icon="unidades"
          />
        </div>
        <div className="col-start-3 col-end-6">
          <CardWithIcon
            title="25"
            subtitle="Remolque"
            icon="unidad-pipa"
          />
        </div>
        <div className="col-start-1 col-end-3">
        <CardWithIcon
          title="18"
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
        <div className="col-start-1 col-end-6">
          <CardWrapper className="col-start-1 col-end-3">
            <h3 className={`${headingFont.className}`}>Unidades con más alertas - últimos 7 días</h3>
            <HorizontalBar/>
          </CardWrapper>
         </div>
      </div> */}

      <div className="col-span-12">
          <CardWrapper>
            <h3 className={`${headingFont.className} pb-4 `}>Últimas alertas</h3>
            <Suspense fallback={<TableSkeleton  columns={devicesColumns} />} >
              <TableWithFilter 
                data={devices} 
                columns={devicesColumns}
                showActions={true}
                textButtonAction="Ver actividad"
                linkHref="/device"

                />
              </Suspense>
          </CardWrapper>

      </div>

    </div>
  );
}