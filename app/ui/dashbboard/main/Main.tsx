'use client'
import { useState, useEffect } from 'react';

import { useSession } from "next-auth/react";
import { ProgressSpinner } from 'primereact/progressspinner';

import { TableWithFilter } from "../../table/TableWithFilter";
import { SealDevice } from "@/app/lib/definitions/device-definitions";

import { setCookie } from 'cookies-next';
import { fetchDevices } from './api/devicesApi';
import { devicesColumns } from '@/app/lib/constants';


export const Main = () => {

    const { data: session,status} = useSession();
    console.log(status)
    const [devices, setDevices] = useState<SealDevice[] | null>(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [online, setOnline] = useState<boolean>(false);
   
    useEffect(() => {
        
        async function getDevices(){
            console.log("fetchDevices")
            if (status === "authenticated") {
               
                try {
                    console.log("tyr")
                  
                  setIsLoading(false)

                 setDevices([])
                } catch (err) {
                  setError(err instanceof Error ? err.message : 'An error occurred')
                } finally {
                  setIsLoading(false)
                }
              }
            }
        
            getDevices()
        // const loadDevices = async () => {
        //     try {
    
        //        const data = await  fetchDevices(session?.user?.token ?? '');
            
        //        setIsLoading(false)
    
        //        setDevices(data)
                
        //     } catch (error) {
        //         setError("No se han podido cargar los dispositivos")
        //         setIsLoading(false)
        //     }
        // }
        // if (!session) {
        //    setIsLoading(false)
        //    return
        // }
        // loadDevices()
    }, [])

    if (isLoading) return <div className="flex justify-center "><ProgressSpinner  /></div>
    if (error) return <div>Error: {error}</div>

    return (
            <TableWithFilter
                data={devices ?? []}
                columns={devicesColumns}
                showActions={true}
                textButtonAction="Ver actividad"
                linkHref="/device"
            />
    )
}
