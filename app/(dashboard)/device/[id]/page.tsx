import { DetailDevice } from '../../../ui/device/DetailDevice';
import { HeaderSection } from '../../../ui/HeaderSection';
import { getItemFromCookies } from "@/app/utils/cookies";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/lib/utils/sesionConfig";
import { CardWrapper } from '@/app/ui/CardWrapper';
import DeviceSection from '@/app/ui/device/DeviceSection';
import { fetchDevices } from '@/app/ui/dashbboard/main/api/devicesApi';
import { SealDevice } from '@/app/lib/definitions/device-definitions';
import { Suspense } from 'react';
import SkeletonDetailTable from '@/app/ui/skeletons/SkeletonDetailTable';
import TableDevice from '@/app/ui/device/tableDevice/TableDevice';
import { getAlertsByDeviceId } from '@/app/lib/actions/alert-action';

interface Props {
  params: { id: string }
}
export default async function DeviceLayout({ params }: Props) {
  const session = await getServerSession(authOptions);
  if (!session) return <div>Please sign in</div>
  const devices = await fetchDevices((session.user as { token?: string }).token || '');
  const detailDevice = devices.seal_devices.find((device: SealDevice) => device.imei === params.id);
  console.log(session)
  const alertsDevice = await getAlertsByDeviceId(params.id);

  return (
    <>
      <HeaderSection
        title={detailDevice?.device ?? ''}
        showIcon={true}
        icon="unidad-individual"
        textButton="Regresar"
        link="/dashboard"
      />
      <CardWrapper>
        <Suspense fallback={<SkeletonDetailTable />}>
          <DetailDevice imei={params.id} device={detailDevice} devices={devices.seal_devices} token={session.user.token} />
        </Suspense>
        <Suspense fallback={<p>Cargando</p>}>
          <TableDevice detailAlert={alertsDevice} />
        </Suspense>
      </CardWrapper>
    </>

  );
}