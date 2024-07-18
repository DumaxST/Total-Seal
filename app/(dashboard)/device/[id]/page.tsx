
import { DetailDevice } from '../../../ui/device/DetailDevice';
import { HeaderSection } from '../../../ui/HeaderSection';
import { getItemFromCookies } from "@/app/utils/cookies";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/lib/utils/sesionConfig";
import { CardWrapper } from '@/app/ui/CardWrapper';

interface Props {
  params: { id: string }
}
export default async function DeviceLayout({ params }: Props) {
  const session = await getServerSession(authOptions)

  const response = await fetch("https://lite.dumaxst.com/v1/users/settings", {
    method: 'GET',
    headers: {
      'X-Api-Key': session?.user?.token ?? '',
      'Content-Type': 'application/json',
      'Uuid': 'RESTFul-API',
      "App": "RESTFul API"
    }
  });

  const data = await response.json();

  const detailDevice = await getItemFromCookies(params.id, 'devices');
  console.log(detailDevice)
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
       
        {detailDevice !== null && <DetailDevice imei={params.id} code={data.user_preferences.code} device={detailDevice} />}

      </CardWrapper>
    </>

  );
}