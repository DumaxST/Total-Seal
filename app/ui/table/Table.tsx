"use client"
import { Device } from '@/app/lib'
import { bodyFont } from '@/app/config/fonts';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { Icon } from '../Icon';

interface Props {
    data: Device[]
}
export default function Table({ data }: Props) {
    const [devices, setDevices] = useState<Device[]>(data);

    if (!devices) return <h1>Sin datos</h1>
    const handleSearch = (term: string) => {
        if (term) {
            const search = devices.filter((device) => device.device.toLowerCase().includes(term.toLowerCase()));
            setDevices(search);
        } else {
            setDevices(data);
        }
    }
    return (
        <>
            <div className="flex flex-row-reverse py-5">
                <div className="relative flex flex-col w-52">
                    <label htmlFor="search">
                        Buscar
                    </label>
                    <input
                        className='h-7 w-full rounded-md border border-gray-200 py-[2px] pl-1 text-sm outline-2 placeholder:text-gray-500 bg-gray-100 focus:outline-none'
                        id="search"
                        type="text"
                        placeholder=""
                        onChange={e => handleSearch(e.target.value)}
                    />
                    <Icon
                        className="absolute left-44  peer-focus:text-gray-900 top-1/2 "
                        icon="icon-find"
                        color="#A6A6A6"
                        size={20} />
                </div>
            </div>

            <table className='w-full'>
                <thead>
                    <tr>
                        <th className={`${bodyFont.className} rounded-tl pl-4 text-left	`}>Unidad</th>
                        <th className={`${bodyFont.className} rounded-tr pl-4 text-left	`}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        devices.map((row, index) => (
                            <tr key={row.imei} className={`${index % 2 == 0 ? "table-primary" : "table-secondary"}`}>
                                <td className={`${bodyFont.className} pl-4 text-xs pt-4 pb-4 `}>{row.device}</td>
                                <td>
                                    <Link href={`/device/${row.imei}`} key={`/device`} >

                                        <button type="button" className={`${bodyFont.className} pt-4 pb-4 pl-4  max-h-8 rounded	 text-white bg-secondary font-bold  py-2 px-6  focus:outline-none  text-xs  text-center flex items-center flex-row justify-center `}>

                                            Ver actividad
                                        </button>

                                    </Link>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>

    )
}
