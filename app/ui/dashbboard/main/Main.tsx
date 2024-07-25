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
    console.log(session)
    return (
           <h1>Hola</h1>
    )
}
