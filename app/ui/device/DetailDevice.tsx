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

interface DeviceProps {
    imei: string
    code?: string,
    device: Device
}

export const DetailDevice = ({ imei, code, device }: DeviceProps) => {

    const [deviceProps, setDevice] = useState<Device>(device);
    const { data: session, status } = useSession()
    
    const validateData = async (token:string='',imei: string = '') => {
        console.log('token')
        console.log(token)
        const device = await validateImeiFromCookie(imei, 'devices')
        console.log(device)
        if (device) {
            //Hacemos el request para traer ultima conexion
            const lastConnections = await getLastConnection(token, imei);
            //Accedemos a la posicion 0 del arreglo de ultimas conexiones
            console.log(lastConnections[0])
            //  const response =  await getDetail(imei)
            // setDevice(device)
        }
    }

    useEffect(() => {
        if(session){
         const socket = new WebSocket(`${process.env.NEXT_PUBLIC_WEBSOCKET_URL}/${code}/ws`);
      
         socket.addEventListener('open', (event) => {
             console.log('Connected to WebSocket');
             
         });
 
         socket.addEventListener('message', (event) => {
             
             const { typeMessage, imei, idConnection }: ParsedString =  parseString(event.data)
             validateData(session?.user?.token,imei)
         });
        
        return () => {
            console.log('Closing WebSocket connection');
            socket.close();
        };
        }
         
    }, [code,session]);

    return (


        <TabView className="shadow-lg" >
            {
                deviceProps.tanks.map((tank: Tank, indx) => (
                    <TabPanel key={tank.tanknumber} header={`Tanque ${tank.tanknumber}`}>
                        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4">

                            <CardDetailDevice
                                title="Caja Válvulas"
                                numberCard="1"
                                type="boxPrimary"
                                status={tank.valvebox === 'Caja de Válvulas Cerrada' ? 'close' : 'open'}
                            />
                            <CardDetailDevice
                                title="Oblea"
                                numberCard="2"
                                type="boxSecondary"
                                status={tank.oblea === 'Oblea Cerrada' ? 'close' : 'open'}
                            />
                            <CardDetailDevice
                                title="Domo"
                                numberCard="3"
                                type="boxSecondary"
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