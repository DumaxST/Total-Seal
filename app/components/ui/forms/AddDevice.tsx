"use client"
import React, { useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DeviceOption, SensorStatus , } from '@/app/lib';

import { addDevice } from '@/app/utils/firebase';
const initState = {
  device: { code: "12", name:" Compartimiento 1"},
  valveBox : { code : 'close', name : "Cerrado"},
  wafer:{ code : 'close', name : "Cerrado"}
}
export const AddDevice = () => {
    const [selectedDevice, setSelectedDevice ] = useState <DeviceOption>(initState.device);
    const devices: DeviceOption[] = [
        { code: "12", name:" Compartimiento 1"},
        { code: "13", name:" Compartimiento 2"},
    ]; 
    const [selectedValveBox, setSelectedValveBox ] = useState<SensorStatus>(initState.valveBox)
    const valveBox : SensorStatus[] = [
        { code : 'close', name : "Cerrado"},
        { code : 'open', name : "Abierto"}
    ]
    const [selectedWafer, setSelectedWafer ] = useState<SensorStatus>(initState.wafer)
    const wafer : SensorStatus[] = [
        { code : 'close', name : "Cerrado"},
        { code : 'open', name : "Abierto"}
    ]

    const [selectedDome, setSelectedDome ] = useState<SensorStatus>({ code : 'close', name : "Cerrado"},)
    const dome : SensorStatus[] = [
        { code : 'close', name : "Cerrado"},
        { code : 'open', name : "Abierto"}
    ]
    const [selectedContent, setSelectedContent] = useState<SensorStatus>({ code : 'close', name : "Cerrado"},)
    const content : SensorStatus[] = [
        { code : 'with_out_content', name : "Sin contenido"},
        { code : 'with_content', name : "Con contenido"}
    ]
    const generateCodeSeal = (valveStatus: string, wafer: string, dome: string, content: string): string => {
      const mappings: { [key: string]: string } = {
        "close_close_close_with_content": "377852",
        "open_close_close_with_content": "377852",
        "open_open_close_with_content": "000000",
        "close_close_close_with_out_content": "216390",
        "close_close_open_with_out_content": "000000",
      };
    
      const key = `${valveStatus}_${wafer}_${dome}_${content}`;
      return mappings[key] || "";
    };

    const handleSubmit = (e:React.SyntheticEvent) =>{
      e.preventDefault();
      
        addDevice({
            valve_box : selectedValveBox?.code,
            name:"Compartimiento 1",
            wafer : selectedWafer?.code,
            dome : selectedDome?.code,
            content : selectedContent?.code,
            codeSeal: generateCodeSeal(selectedValveBox?.code,selectedWafer?.code, selectedDome?.code,selectedContent?.code)
            
        })
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="">Equipo</label>
          
          <Dropdown 
            value={selectedDevice} 
            onChange={(e) => setSelectedDevice(e.value)}
             options={devices} 
             optionLabel="name" 
            className="w-full md:w-14rem" />       
        </div>

        <div className='form-group'>
          <label htmlFor="">Caja Válvulas</label>
          
          <Dropdown 
            value={selectedValveBox} 
            onChange={(e) => setSelectedValveBox(e.value)}
             options={valveBox} 
             optionLabel="name" 
            className="w-full md:w-14rem" />       
        </div>

        <div className='form-group'>
          <label htmlFor="">Oblea</label>
          
          <Dropdown 
            value={selectedWafer} 
            onChange={(e) => setSelectedWafer(e.value)}
             options={wafer} 
             optionLabel="name" 
            className="w-full md:w-14rem" />       
        </div>

        <div className='form-group'>
          <label htmlFor="">Domo</label>
          
          <Dropdown 
            value={selectedDome} 
            onChange={(e) => setSelectedDome(e.value)}
             options={dome} 
             optionLabel="name" 
            className="w-full md:w-14rem" />       
        </div>

        <div className='form-group'>
          <label htmlFor="">Contenido</label>
          
          <Dropdown 
            value={selectedContent} 
            onChange={(e) => setSelectedContent(e.value)}
             options={content} 
             optionLabel="name" 
            className="w-full md:w-14rem" />       
        </div>
        <Button type='submit' label="Submit" />

    </form>
  )
}
