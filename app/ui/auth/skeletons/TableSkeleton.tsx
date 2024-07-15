
import React from 'react';
import { Skeleton } from 'primereact/skeleton';
import { DataTable, DataTableValue } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnsProps } from '@/app/lib/definitions';

interface Props{
    columns : ColumnsProps[]
}
export default function TableSkeleton({columns}:Props) {
    const items: DataTableValue[] = Array.from({ length: 10  }, (v, i) => ({ code: i, name: '', category: '', quantity: 0 }));

    return (
        <DataTable value={items}  tableStyle={{ minWidth: '60rem' }}>
            {
                columns.map(column =>(
                    <Column key={column.id} field={column.field}  header={column.header} body={<Skeleton />}/>)
                )
            }
        </DataTable>
      
    );
}
        