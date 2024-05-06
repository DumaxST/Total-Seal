'use client'
import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column as Col} from 'primereact/column' ;
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';

interface Device{
    id: string | number
    name: string
    trailer : string
    date: string
    status: string
    codeSeal : string
}
interface Column{
    id: string | number
    field: string
    header: string
}
interface TableWithFilterProps {
    data: Device[]
    columns : Column[]
}
export const TableWithFilter = ({data , columns}: TableWithFilterProps) => {
  return (
    <>
        <DataTable value={data}  dataKey="id" >
            {
                columns.map((column) =>(
                    <Col 
                        key={column.id}
                        field={column.field} 
                        header={column.header} 
                        sortable 
                    />
                
                ))
            }
        </DataTable>


    </>
  )
}
