import { CardWrapper } from "@/app/components/wrappers";

import { DetailDevice } from '../../../ui/device/DetailDevice';
import { HeaderSection } from '../../../ui/HeaderSection';
import { getItemFromCookies } from "@/app/utils/cookies";
import { Suspense } from "react";

interface Props{
  params: {id:string}
}
export default async function DeviceLayout({params}:Props) {
 
  const detailDevice = await getItemFromCookies(params.id, 'devices');
  return (
    <>
        
            <HeaderSection
              title={detailDevice?.device ?? ''}
              showIcon={true}
              icon="unidad-individual"
              textButton="Regresar"
              link="/main"
            />
            <CardWrapper>
            <Suspense fallback={<p> cargando.... </p>}>
              {detailDevice !== null && <DetailDevice imei={params.id}  device={detailDevice}/>}
            </Suspense>
            </CardWrapper>
    </>
     
  );
}