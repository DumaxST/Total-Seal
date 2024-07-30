"use client"
import {useState} from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { bodyFont } from "@/app/config/fonts";
import { Tag } from "primereact/tag";
import Link from "next/link";
type Priority = 'low'|'high';

export interface Alert{
    id:string
    device:string;
    idDevice:string;
    createdAt: string;
    codeSeal: string;
    priority: Priority;
    compartment: string;
    event: string;
}
interface Props{
    alerts: Alert[]
}
export const TableDevices = ({alerts}:Props) => {
  
  const [alertsList, setAlertsList] = useState<Alert[]>(alerts);

  const priorityLabel ={
    low: "Baja",
    high: "Alta"
  };

  const deviceBodyTemplate = (rowData:Alert) => (
    <span  className={`${bodyFont.className} text-xs  `}>{rowData.device}</span>
  );
  const dateBodyTemplate = (rowData:Alert) =>(
    <span  className={`${bodyFont.className} text-xs  `}>{rowData.createdAt}</span>
  );
  const priorityBodyTemplate = (rowData:Alert) => (
    <Tag  className={`${bodyFont.className} text-xs`} severity={rowData.priority === 'low'?  "success" : "danger"} value={priorityLabel[rowData.priority]}/>
  )
  const codeSealBodyTemplate = (rowData:Alert) => (
    <span  className={`${bodyFont.className} text-xs  `}>{rowData.codeSeal}</span>
  )

  const actionBodyTemplate = (rowData:Alert) => (
    <Link href={`/device/${rowData.idDevice}`} key={`/device`} >
      <button type="button" className={`${bodyFont.className} pt-4 pb-4 pl-4  max-h-8 rounded	 text-white bg-secondary font-bold  py-2 px-6  focus:outline-none  text-xs  text-center flex items-center flex-row justify-center `}>
          Ver actividad
      </button>
    </Link>
  )
  return (
    <DataTable value={alertsList} stripedRows size="small" tableStyle={{ minWidth: "45rem" }}
    emptyMessage="Sin alertas registradas">
                <Column field="device" sortable body={deviceBodyTemplate} header={"Unidad"} headerClassName={`${bodyFont.className}  text-xs rounded-tl pl-4 text-left `}/>
                <Column field="createdAt" sortable header="Fecha" body={dateBodyTemplate} headerClassName={`${bodyFont.className}  text-xs text-left `}/>
                <Column field="priority" sortable header="Prioridad" body ={priorityBodyTemplate} headerClassName={`${bodyFont.className}  text-xs text-left `}/>
                <Column field="codeSeal" sortable header="Código de Sello"  body ={codeSealBodyTemplate}  headerClassName={`${bodyFont.className}  text-xs pl-4 text-left `}/>
                <Column field="codeSeal"  header="Acciones" body ={actionBodyTemplate} headerClassName={`${bodyFont.className}  text-xs rounded-tr  pr-4 text-left `}/>

    </DataTable>
  )
}
