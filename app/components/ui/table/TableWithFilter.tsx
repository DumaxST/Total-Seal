'use client'
import React, { useState, useEffect } from 'react'
import {
     PaginatorCurrentPageReportOptions, PaginatorRowsPerPageDropdownOptions,
     PaginatorNextPageLinkOptions, PaginatorPageLinksOptions, PaginatorPrevPageLinkOptions
} from 'primereact/paginator';
import { FilterMatchMode } from 'primereact/api';

import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { Column as Col } from 'primereact/column';
import { Button } from 'primereact/button';
import { Toolbar } from "primereact/toolbar";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Button as ButtonPrimary} from '@/app/components/ui';
import Link from 'next/link'

import { Icon } from "@/app/components/ui";

import styles from './table.module.css';

interface Device {
    id: string | number
    name: string
    trailer: string
    date: string
    status: string
    codeSeal: string
}
interface DeviceDetails{
    date: string
    codeSeal: string
    numberCompartment: string
    motorStatus: string
    capacityDevice: string
    lastLocation: string
}
interface Compartment{
    id: string
    name: string
    valve_box: string
    wafer: string
    dome: string
    content: string
}
interface CompartmentDetail{
    date: string
    codeSeal: string
    numberCompartment: string
    motorStatus: string
}
interface Trailer{
    id: string
    name: string
    compartments: Compartment[]

}
interface detailDeviceById{
   date: string
   codeSeal: string
   numberCompartment: number,
   motorStatus: string
   capacityDevice: string
    lastLocation: number[]
  
}

interface Column {
    id: string | number
    field: string
    header: string
}
interface TableWithFilterProps {
    data: Device[] | detailDeviceById[]
    columns: Column[]
    showToolbar?: boolean
    showActions?: boolean
    textButtonAction?: string
    linkHref?: string
}

interface Status {
    className: string
    icon: string
}

export const TableWithFilter = ( props: TableWithFilterProps) => {
    const { data, columns,showToolbar= false, showActions = false , textButtonAction= '' , linkHref=''} = props;

    const [globalFilterValue, setGlobalFilterValue] = useState<string>('');

    const [filters, setFilters] = useState<DataTableFilterMeta>({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    const PaginatorLeft = (options: PaginatorCurrentPageReportOptions) => {
        return (
            <span className='text-xs'>
                Mostrando {options.first} a {options.last} de {options.totalRecords}{" "}
                entradas
            </span>
        );
    };

    const template = {
        layout: "PrevPageLink PageLinks NextPageLink ",
        PrevPageLink: (options: PaginatorPrevPageLinkOptions) => {
            return (
                <Button 
                    onClick={options.onClick}
                    label='Anterior' 
                    disabled={options.disabled}
                    className={` bg-white  border-gray-300 text-black rounded-e-none ${styles.tableButton} ${styles.borderTopLeftRadius}  ${styles.borderBottomLeftRadius}`}>
                   
                </Button>
            );
        },
        NextPageLink: (options: PaginatorNextPageLinkOptions) => {
            return (
              <Button
                className={` bg-white  border-gray-300 text-black rounded-s-none  ${styles.tableButton} ${styles.borderLeftNone} ${styles.borderRightTopRadius}  ${styles.borderRightBottomRadius}`}
                onClick={options.onClick}
                disabled={options.disabled}
                label='Siguiente'
              />
              
            );
        },
        PageLinks: (options:PaginatorPageLinksOptions) => {
            
            return (
                <Button 
                    className={` bg-white rounded-t border-gray-300 text-black  ${styles.tableButton} ${styles.buttonBorderNone} ${styles.borderLeftNone}`}
                    disabled={ options.className === 'p-disabled' ? true : false} 
                    onClick={options.onClick}>
                    {options.page + 1}
                    
                </Button>
            );
        },


    }
    const statusBodyTemplate = (product: Device) => {
        let [colorStatus,icon] = getStatus(product);
        return <span className={colorStatus}>
            {product.status }
            <Icon
                color='#FF6900'
                size={15}
                icon={icon}
                className='ml-1'
        
            />
            </span>
    };

    const getStatus = (product: Device) : [string, string]=> {
        switch (product.status) {
            case 'Ralentí':
                return ['success', '' ];

            case 'En movimiento':
                return ['movement-color', 'alerta'];
            default:
                return ['', ''];
        }
    };

    const actionBodyTemplate = (textButtonAction:string, linkHref:string) => {
    return (
        <Link href="/device/12">
            <ButtonPrimary
             //   onClick={() =>handleClickShowHide(rowData.id, rowData.isDisplayedOnMap)}
             
              text={textButtonAction}
              />
        </Link>
    );
  };
  const renderHeaderRight = () => {
    return (
      <div className="flex flex-column gap-1">
        
        <span className="p-input-icon-left">
        
        <p className='font-size-xs'>Buscar</p>
        <IconField>
            <InputIcon>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14" height="14" viewBox="0 0 50 50">
                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                </svg>
            </InputIcon>
           <InputText 
                v-model="value2" 
                className={`${styles.inputSearch}`}  
                value={globalFilterValue}
                onChange={onGlobalFilterChange} 
            />
        </IconField>
        </span>
      </div>
    );
  };
  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let _filters = { ...filters };

    // @ts-ignore
    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
};
  const headerRight = renderHeaderRight();

  const generateFilterFields = (columns) => {
   
    return columns.map((column) => {
       return column.field;
     })
 
 };
 const generateFilters = (columns) => {
   const hashFilters = columns.reduce((hash, { field }) => {
     hash[field] = { value: null, matchMode: FilterMatchMode.EQUALS };
     return hash;
   }, {});
   hashFilters["global"] = {
     value: null,
     matchMode: FilterMatchMode.STARTS_WITH,
   };
   setFilters(hashFilters);
 };

 useEffect(() => {
    generateFilterFields(columns);
    generateFilters(columns);
  }, [columns]); 

    return (
        <>
            {
                showToolbar && (
                    <Toolbar
                    className="mb-4 bg-white flex align-items-end border-none"
                    end={headerRight}
                />)
            }
            
             <DataTable
                value={data}
                dataKey="id"
                size="normal"
                scrollable
                scrollHeight="700px"
                className='text-xs'
                emptyMessage="Sin datos para los filtros seleccionados"
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50]}
                paginatorLeft={PaginatorLeft}
                paginatorTemplate={template}
                filters={filters}
                globalFilterFields={generateFilterFields(columns)}
        >
            {
                columns.map((column) => {
                    if(column.field === 'status'){
                        return(
                            <Col
                                key={column.id}
                                field={column.field}
                                header={column.header}
                                sortable
                                className='background-gray-100'
                                body={statusBodyTemplate}
                            />
                        )
                    }else{
                        return(
                        <Col
                            key={column.id}
                            field={column.field}
                            header={column.header}
                            sortable
                            className='background-gray-100'
                        />)
                    }
                }
            )
            }
            { showActions &&  (
                <Col
                className='background-gray-100'
                header="Acciones"  
                body={ ()=> actionBodyTemplate(textButtonAction, linkHref)} 
                exportable={false} />
                )
            }
        </DataTable>        
        </>
       

    )
}
