"use client"
import { Device } from '@/app/lib'
import {bodyFont} from '@/app/config/fonts';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';
interface Props{
    data: Device[]
}
export default function Table({data}:Props) {

    if(!data) return <h1>Sin datos</h1>
    
    return (
        <table className='w-full'>
            <thead>
                <tr>
                    <th className={`${bodyFont.className} rounded-tl pl-4 text-left	`}>Unidad</th>
                    <th className={`${bodyFont.className} rounded-tr pl-4 text-left	` }>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((row, index) => (
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
    )
}
