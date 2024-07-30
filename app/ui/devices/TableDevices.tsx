"use client"
import {useState} from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
type Priority = "low | high";

interface Alert{
    id:string
    device:string;
    createdAt: string;
    codeSeal: string;
    priority?: Priority;
    compartment: string;
    event: string;
}
interface Props{
    alerts: Alert[]
}
export const TableDevices = ({alerts}:Props) => {
  
  const [alertsList, setAlertsList] = useState<Alert[]>(alerts);

  return (
    <DataTable value={alertsList} stripedRows>
                <Column field="device" header="Unidad"></Column>
                <Column field="createdAt" header="Fecha"></Column>
                <Column field="priority" header="Prioridad"></Column>
                <Column field="codeSeal" header="Código de Sello"></Column>
    </DataTable>
  )
}
