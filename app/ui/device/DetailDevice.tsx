"use client"
import { Device, ParsedString, Tank } from '@/app/lib/definitions';
import { parseString } from '@/app/utils/main';
import React, { useEffect, useState } from 'react';
import { TabView, TabPanel, TabPanelHeaderTemplateOptions } from 'primereact/tabview';
import { bodySecondaryFont, headingFont } from '@/app/config/fonts';
import { CardDetailDevice } from '../cards/CardDetailDevice';
import { useSession } from "next-auth/react"
import { getLastConnection } from '../dashbboard/main/api/devicesApi';
import { useWebSocketContext } from '@/app/lib/context/WebsocketContext';
import { clsx } from 'clsx';
import { CardWrapper } from '../CardWrapper';
import { formatDate } from '@/app/lib/utils/date-utils';

interface DeviceProps {
    imei: string

    device: Device,
    devices: Device[],
    token: string
}

export const DetailDevice = ({ imei, device, devices, token }: DeviceProps) => {

    const { subscribeToMessage } = useWebSocketContext();

    useEffect(() => {
        function validateResponse(response: any) {
            const params = response.devices[0].params

            if ('total_seal' in params) {
                setDeviceProps(params.total_seal)

            }

        }

        function validateSealDevicesByImei(imei: string) {
            return devices.find(device => device.imei === imei)
        }
        const handleMessage = async (message: string) => {
            console.log({ message })
            const { typeMessage, imei, idConnection }: ParsedString = parseString(message)

            if (validateSealDevicesByImei(imei)) {

                const lastConnections = await getLastConnection(token, imei);

                validateResponse(lastConnections)
            }
        }


        const unsubscribe = subscribeToMessage(handleMessage)

        return () => {
            unsubscribe()
        }

    }, [subscribeToMessage])

    const [deviceProps, setDeviceProps] = useState<Device>(device);



    const tabHeaderTemplate = (options: TabPanelHeaderTemplateOptions, title: number) => {
        return (
            <div className={`flex align-items-center gap-2 p-3 rounded-t-lg border border-[#F4F4F4] ${bodySecondaryFont.className}`} style={{ cursor: 'pointer' }} onClick={options.onClick}>
                <span className={
                    clsx(
                        "white-space-nowrap",
                        {
                            "font-bold ": options.selected === true
                        }
                    )
                }>Compartimento {title}</span>
            </div>
        );
    };
    return (
        <CardWrapper>
            <TabView className="" >
                {
                    deviceProps.tanks.map((tank: Tank, indx) => (
                        <TabPanel key={tank.tanknumber} headerTemplate={(e) => tabHeaderTemplate(e, tank.tanknumber)}>
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
            <p className={`${bodySecondaryFont.className} text-center mt-5 text-base`}>  <b> Última actividad: </b>{formatDate(new Date(device.datetime))}</p>

        </CardWrapper>

    )
}