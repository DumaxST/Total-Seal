"use client"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { bodyFont } from '@/app/config/fonts';
import { Alert } from '@/app/lib/definitions/alert-definition';
import { formatDate } from '@/app/lib/utils/date-utils';

interface Props {
  detailAlert: Alert[]
}
export default function TableDevice({ detailAlert }: Props) {

  const compartmentLabel = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
  };

  const dateBodyTemplate = (rowData: Alert) => (
    <span className={`${bodyFont.className} text-xs black-200`}>{formatDate(rowData.createdAt)}</span>
  );

  const codeSealBodyTemplate = (rowData: Alert) => (
    <span className={`${bodyFont.className} text-xs black-200`}>{rowData.codeSeal}</span>
  )
  
  const compartmentLabelBodyTemplate = (rowData: Alert) => (
    <span className={`${bodyFont.className} text-xs black-200`}>{compartmentLabel[rowData.compartment]}</span>
  )

  return (
    <DataTable
      value={detailAlert}
      stripedRows
      size="small"
      className='mt-6'
      tableStyle={{ minWidth: "47rem" }}
      emptyMessage="Sin alertas registradas">
      <Column field="createdAt" sortable header="Fecha" body={dateBodyTemplate} headerClassName={`${bodyFont.className}   rounded-tl text-xs text-left `} />
      <Column field="codeSeal" sortable header="Código de Sello" body={codeSealBodyTemplate} headerClassName={`${bodyFont.className}  text-xs pl-4 text-left `} />
      <Column field="compartment" sortable header="Compartimento" body={compartmentLabelBodyTemplate} headerClassName={`${bodyFont.className} rounded-tr text-xs pl-4 text-left `} />
    </DataTable>
  )
}
