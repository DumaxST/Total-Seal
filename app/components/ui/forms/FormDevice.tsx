'use client';
import React, {useState} from 'react';
import { MultiSelect } from 'primereact/multiselect';
import { Button } from '@/app/components/ui';
import {devicesAll } from "@/app/lib/data";
import {DeviceDropdown} from "@/app/lib/definitions";
interface FormDeviceProps {
    data: DeviceDropdown[]
}
export const FormDevice = ({data }: FormDeviceProps) => {
    
    const [selectedCities, setSelectedCities] = useState(null);
    
  return (
    <form action="" className='flex flex-row justify-between items-center'>
        
        <div className="flex flex-col w-60">
            <label htmlFor="selectedDevice">Ver todas las unidades</label>
            <MultiSelect 
                id="selectedDevice"
                value={selectedCities} 
                onChange={(e) => setSelectedCities(e.value)} 
                options={data} 
                optionLabel="name"
                display="chip" 
                maxSelectedLabels={3} 
                className='heading-h3'
            />

        </div>
              
        <Button text='Generar reporte'/>
    </form>
  )
}
