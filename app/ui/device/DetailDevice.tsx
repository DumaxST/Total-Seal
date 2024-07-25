"use client"
import { Device, ParsedString, Tank } from '@/app/lib/definitions';
import { parseString } from '@/app/utils/main';
import React, { useEffect, useState } from 'react';

import { TabView, TabPanel } from 'primereact/tabview';


import { bodySecondaryFont, headingFont } from '@/app/config/fonts';
import { validateImeiFromCookie } from '@/app/utils/cookies';
import { CardDetailDevice } from '../cards/CardDetailDevice';
import { useSession } from "next-auth/react"
import { getLastConnection } from '../dashbboard/main/api/devicesApi';
import { DeviceDetail } from '@/app/lib/definitions/detail-device-definition';

interface DeviceProps {
    imei: string
    code?: string,
    device: Device
}

export const DetailDevice = ({ imei, code, device }: DeviceProps) => {
    console.log('CODE')
    console.log(code)
    const [deviceProps, setDeviceProps] = useState<Device>(device);
    const { data: session } = useSession();

    function validateResponse(response: DeviceDetail) {
        if (response.params && 'total_seal' in response.params) {
          const totalSeal = response.params.total_seal;
          
        if (totalSeal) {
          setDeviceProps(totalSeal);
        }
        } else {
          console.log("total_seal not found in params");
        }
      }
  
    useEffect(() => {
        
        const validateData = async (token:string='tpWavOS6EuZVK4j5HwYRCyw0/Sn2s+V+c5uTikBU8tk=',imei: string = '') => {

            const device = await validateImeiFromCookie(imei,'devices');
            if (device) {
                //Hacemos el request para traer ultima conexion
                const lastConnections = await getLastConnection(token, imei);
                //Accedemos a la posicion 0 del arreglo de ultimas conexiones
                validateResponse(lastConnections)
            }
        }
    
        if(session){
            console.log('CODE')
            console.log(code)
            console.log(`${process.env.NEXT_PUBLIC_WEBSOCKET_URL}/${code}/ws`)
         const socket = new WebSocket(`${process.env.NEXT_PUBLIC_WEBSOCKET_URL}/${code}/ws`);
      
         socket.addEventListener('open', (event) => {
             console.log('Connected to WebSocket');
         });
 
         socket.addEventListener('message', (event) => {
             
             const { typeMessage, imei, idConnection }: ParsedString =  parseString(event.data)
             validateData(session?.user?.token,imei)
         });
         return () => {
            if (socket.readyState === WebSocket.OPEN) {
              console.log('Closing WebSocket connection');
              socket.close();
            }
          };
        }
       
         
    }, [code, session]);

    return (
        <TabView className="shadow-lg" >
            {
                deviceProps.tanks.map((tank: Tank, indx) => (
                    <TabPanel key={tank.tanknumber} header={`Tanque ${tank.tanknumber}`}>
                        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4">

                            <CardDetailDevice
                                title="Caja Válvulas"
                                numberCard="1"
                                type={tank.valvebox === 'Caja de Válvulas Cerrada' ? "boxSecondary" : "boxPrimary" }
                                status={tank.valvebox === 'Caja de Válvulas Cerrada' ? 'close' : 'open'}
                            />
                            <CardDetailDevice
                                title="Oblea"
                                numberCard="2"
                                type={tank.oblea === 'Oblea Cerrada' ? "boxSecondary" : "boxPrimary" }
                                status={tank.oblea === 'Oblea Cerrada' ? 'close' : 'open'}
                            />
                            <CardDetailDevice
                                title="Domo"
                                numberCard="3"
                                type={tank.domo === 'Domo Cerrado' ? "boxSecondary" : "boxPrimary" }
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