"use client"
import { Device, ParsedString, Tank } from '@/app/lib/definitions';
import { parseString } from '@/app/utils/main';
import React, { useEffect, useState } from 'react';

import { TabView, TabPanel } from 'primereact/tabview';


import { bodySecondaryFont, headingFont } from '@/app/config/fonts';
import { validateImeiFromCookie } from '@/app/utils/cookies';
import { CardDetailDevice } from '../cards/CardDetailDevice';


interface DeviceProps {
    imei: string
    code?: string, 
    device: Device
}
export const DetailDevice = ({imei,code, device}:DeviceProps) =>{
   
    const [deviceProps, setDevice] = useState<Device>(device);
    
   const validateData = async (imei:string) => {
        const device = await validateImeiFromCookie(imei, 'devices')
        if(device){
            //Hacemos el request para traer ultima conexion
        //  const response =  await getDetail(imei)
           // setDevice(device)
        }
   }    
    useEffect(() => {
        // Create WebSocket connection
        const socket = new WebSocket(`${process.env.NEXT_PUBLIC_WEBSOCKET_URL}/${code}/ws`);
        // Clean up the socket on component unmount
        // Connection opened
        socket.addEventListener('open', (event) => {
            console.log('Connected to WebSocket');
            console.log(event)
        });

        socket.addEventListener('message', (event) => {
            
            const { typeMessage, imei, idConnection }: ParsedString =  parseString(event.data)
            console.log(event)
            validateData(imei)
        });

      }, []);

      useEffect(() => {
        setDevice(device)
        }, []);
    return(
         
                
                    <TabView className="shadow-lg" >
                        {
                            deviceProps.tanks.map( (tank:Tank, indx) => (
                                <TabPanel key={tank.tanknumber} header={`Tanque ${tank.tanknumber}`}>
                                    <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4">
                                       
                                        <CardDetailDevice
                                            title="Caja Válvulas"
                                            numberCard="1"
                                            type= "boxPrimary"
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
                                            numberCard="4"/>

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