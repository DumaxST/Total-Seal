'use client'
import { useState, useEffect } from 'react';

import { useSession } from "next-auth/react";
import { ProgressSpinner } from 'primereact/progressspinner';

import { TableWithFilter } from "../../table/TableWithFilter";
import { devicesColumns } from "@/app/lib/data";

import { SealDevice } from "@/app/lib/definitions/device-definitions";


async function fetchDevices(token: string) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_MAPI_SG_URL}/seal_devices`, {
        method: 'GET',
        headers: {
            'X-Api-Key': token,
            'Content-Type': 'application/json',
            'Uuid': 'RESTFul-API',
            "App": 'RESTFul API'
        }
    })
    const data = await res.json();
    console.log(data)
    return data.seal_devices
}

export const Main = () => {

    const { data: session } = useSession();
    
    const [devices, setDevices] = useState<SealDevice[] | null>(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    const loadDevices = async () => {
        try {

           const data = await  fetchDevices(session?.user?.token ?? '');
           setIsLoading(false)

           setDevices(data)
        } catch (error) {
            setError("No se han podido cargar los dispositivos")
            setIsLoading(false)
        }
    }
    useEffect(() => {
        if (!session) {
           setIsLoading(false)
           return
        }
        loadDevices()
    }, [session])

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
