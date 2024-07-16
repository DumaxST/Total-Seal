'use client';
import React, { useState } from 'react';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { Button } from '@/app/components/ui/Button';
import { DeviceDropdown } from "@/app/lib/definitions";

interface FormDeviceProps {
  data: DeviceDropdown[]
}

export const FormDevice = ({ data }: FormDeviceProps) => {
  const [selectedData, setSelectedData] = useState<DeviceDropdown[] | null>(null);

  return (
    <form action="" className='flex flex-row justify-between items-center'>
      <div className="flex flex-col w-60">
        <label htmlFor="selectedDevice">Ver todas las unidades</label>
        <MultiSelect
          id="selectedDevice"
          value={selectedData}
          onChange={(e: MultiSelectChangeEvent) => setSelectedData(e.value)}
          options={data}
          optionLabel="name"
          display="chip"
          maxSelectedLabels={3}
          className='heading-h3'
          filter
        />
      </div>
      <Button text='Generar reporte' />
    </form>
  );
};
