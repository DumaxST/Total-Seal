"use client"
import { Device, ParsedString, Tank } from '@/app/lib/definitions';
import { parseString } from '@/app/utils/main';
import React, { useEffect, useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { bodySecondaryFont, headingFont } from '@/app/config/fonts';
import { CardDetailDevice } from '../cards/CardDetailDevice';
import { useSession } from "next-auth/react"
import { getLastConnection } from '../dashbboard/main/api/devicesApi';

interface DeviceProps {
    imei: string
    code: string,
    device: Device,
    devices: Device[],
    token: string
}
const connectSocketServer = (code: string) => {
    const socket = new WebSocket(`${process.env.NEXT_PUBLIC_WEBSOCKET_URL}/${code}/ws`);
    return socket
}
export const DetailDevice = ({ imei, code, device, devices, token }: DeviceProps) => {

    const [socket] = useState(connectSocketServer(code));

    const [online, setOnline] = useState(false);

    const [deviceProps, setDeviceProps] = useState<Device>(device);

    const { data: session } = useSession();

   


    useEffect(() => {
        socket.addEventListener('open', (event) => {
            setOnline(true);
        });


    }, [socket])

    useEffect(() => {
        function validateResponse(response: any) {
            const params = response.devices[0].params
    
            if ('total_seal' in params ) {
               setDeviceProps(params.total_seal)
            }
    
        }
    
        function validateSealDevicesByImei(imei: string) {
            return devices.find(device => device.imei === imei)
        }
        socket.addEventListener('message', async (event) => {

            const { typeMessage, imei, idConnection }: ParsedString = parseString(event.data)

            if (validateSealDevicesByImei(imei)) {

                const lastConnections = await getLastConnection(token, imei);

                validateResponse(lastConnections)
            }

        });
        
    }, [socket, devices, token]);

    return (
        <TabView className="shadow-lg" >
            {
                deviceProps.tanks.map((tank: Tank, indx) => (
                    <TabPanel key={tank.tanknumber} header={`Tanque ${tank.tanknumber}`}>
                        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4">

                            <CardDetailDevice
                                title="Caja Válvulas"
                                numberCard="1"
                                type={tank.valvebox === 'Caja de Válvulas Cerrada' ? "boxSecondary" : "boxPrimary"}
                                status={tank.valvebox === 'Caja de Válvulas Cerrada' ? 'close' : 'open'}
                            />
                            <CardDetailDevice
                                title="Oblea"
                                numberCard="2"
                                type={tank.oblea === 'Oblea Cerrada' ? "boxSecondary" : "boxPrimary"}
                                status={tank.oblea === 'Oblea Cerrada' ? 'close' : 'open'}
                            />
                            <CardDetailDevice
                                title="Domo"
                                numberCard="3"
                                type={tank.domo === 'Domo Cerrado' ? "boxSecondary" : "boxPrimary"}
                                status={tank.domo === 'Domo Cerrado' ? 'close' : 'open'}
                            />
                            <CardDetailDevice
                                title="Contenido"
                                type="boxTertiary"
                                status={tank.productstatus === 'Con Producto' ? 'with_content' : 'empty'}
                                numberCard="4" />

                            <div className={`py-4 ps-4 pe-4 border-b border-black border-solid text-center`}>
                                <h2 className={`text-sm ${headingFont.className}`}>Código de Sello</h2>
                                <p className={` text-4xl	 ${bodySecondaryFont.className}`}>{tank.seal}</p>
                            </div>
                        </div>
                    </TabPanel>
                ))
            }
        </TabView>
    )
}