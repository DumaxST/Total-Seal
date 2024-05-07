'use client'
import React, { useEffect, useState } from 'react'
import {
    Paginator, PaginatorPageChangeEvent, PaginatorJumpToPageInputOptions, PaginatorCurrentPageReportOptions, PaginatorRowsPerPageDropdownOptions,
    PaginatorLastPageLinkOptions, PaginatorNextPageLinkOptions, PaginatorPageLinksOptions, PaginatorPrevPageLinkOptions, PaginatorFirstPageLinkOptions
} from 'primereact/paginator';
import { Ripple } from "primereact/ripple";
import { classNames } from "primereact/utils";

import { DataTable } from 'primereact/datatable';
import { Column as Col } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';

interface Device {
    id: string | number
    name: string
    trailer: string
    date: string
    status: string
    codeSeal: string
}
interface Column {
    id: string | number
    field: string
    header: string
}
interface TableWithFilterProps {
    data: Device[]
    columns: Column[]
}
interface optionPaginatorLeft {
    first: number
    last: number
    totalRecords: number

}
export const TableWithFilter = ({ data, columns }: TableWithFilterProps) => {

    const [rowsPerPage, setRowsPerPage] = useState(10);
    
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
                    className='text-xs bg-white rounded-t border-gray-300 text-black'>
                    <Ripple />
                </Button>
            );
        },
        NextPageLink: (options: PaginatorNextPageLinkOptions) => {
            return (
              <Button
                className='text-xs bg-white rounded-t border-gray-300 text-black'
                onClick={options.onClick}
                disabled={options.disabled}
                label='Siguiente'
              >
               
                <Ripple />
              </Button>
            );
        },
        PageLinks: (options:PaginatorPageLinksOptions) => {
            if (
              (options.view.startPage === options.page &&
                options.view.startPage !== 0) ||
              (options.view.endPage === options.page &&
                options.page + 1 !== options.totalPages)
            ) {
              const className = classNames(options.className, { "p-disabled": true });
      
              return (
                <span className={className} style={{ userSelect: "none" }}>
                  ...
                </span>
              );
            }
      
            return (
              <Button
                className={`text-xs bg-white rounded-t border-gray-300 text-black ${options.className}`}
                onClick={options.onClick}
              >
                {options.page + 1}
                <Ripple />
              </Button>
            );
          },


    }
    const statusBodyTemplate = (product: Device) => {
        const colorStatus = getSeverity(product);
        return <p className={colorStatus}>{product.status }</p>
    };

    const getSeverity = (product: Device) => {
        switch (product.status) {
            case 'Ralentí':
                return 'success';

            case 'En movimiento':
                return 'movement-color';

            case 'stop':
                return 'danger';

            default:
                return '';
        }
    };


    return (

        <DataTable
            value={data}
            dataKey="id"
            size="normal"
            scrollable
            scrollHeight="700px"
            className='text-xs rounded-lg'
            emptyMessage="Sin datos para los filtros seleccionados"
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            paginatorLeft={PaginatorLeft}
            paginatorTemplate={template}
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
        </DataTable>



    )
}
