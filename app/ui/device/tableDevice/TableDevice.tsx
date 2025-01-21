"use client"
import React, { useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { bodyFont } from '@/app/config/fonts';
import { Alert } from '@/app/lib/definitions/alert-definition';
import { formatDate } from '@/app/lib/utils/date-utils';
import { Notification } from '@/app/lib/definitions/notification-definition';
interface Props {
  detailAlert: Notification[]
}
interface ColumnMeta {
  field: string;
  header: string;
}
export default function TableDevice({ detailAlert }: Props) {


  const dt = useRef<DataTable<Notification[]>>(null);

  const exportCSV = (selectionOnly: any) => {
    dt?.current?.exportCSV({ selectionOnly });
  };
  const saveAsExcelFile = (buffer: any, fileName: any) => {
    import('file-saver').then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data = new Blob([buffer], {
          type: EXCEL_TYPE
        });

        module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
      }
    });
  };
  const exportPdf = (detailAlert: any) => {
    import('jspdf').then((module) => {
      import('jspdf-autotable').then((autoTable) => {
        var doc = new module.default('p', 'pt');


        const exportColumns: ColumnMeta[] = [
          { field: 'createdAt', header: 'Fecha' },
          { field: 'codeSeal', header: 'Código de Sello' },
          { field: 'compartment', header: 'Compartimento' },
        ];

        let info: any[] = [];
        detailAlert.forEach((alert: Notification) => {
          info.push([formatDate(alert.createdAt), alert.seal, alert.tankNumber])
          // info.push([formatDate(alert.createdAt), alert.seal, compartmentLabel[alert.tankNumber ?? 1]]);
        })
        autoTable.default(doc, {
          columns: exportColumns,
          body: info
        });

        doc.save('alerts.pdf');
      });
    });
  };

  const exportExcel = () => {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(detailAlert);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array'
      });

      saveAsExcelFile(excelBuffer, 'devices');
    });
  };

  const dateBodyTemplate = (rowData: Notification) => (
    <span className={`${bodyFont.className} text-xs black-200`}>{formatDate(rowData.createdAt)}</span>
  );

  const codeSealBodyTemplate = (rowData: Notification) => (
    <span className={`${bodyFont.className} text-xs black-200`}>{rowData.seal}</span>
  )

  const compartmentLabelBodyTemplate = (rowData: Notification) => (
    <span className={`${bodyFont.className} text-xs black-200`}>{rowData.tankNumber}</span>
  )

  const header = (
    <div className="flex align-items-center justify-content-end gap-2">
      <button type="button" onClick={() => exportCSV(false)} data-pr-tooltip="CSV" className={`${bodyFont.className} pt-4 pb-4 pl-4  max-h-8 rounded	 text-white bg-secondary font-bold  py-2 px-6  focus:outline-none  text-xs  text-center flex items-center flex-row justify-center `}>
        CSV
      </button>
      <button type="button" onClick={() => exportPdf(detailAlert)} data-pr-tooltip="PDF" className={`${bodyFont.className} pt-4 pb-4 pl-4  max-h-8 rounded	 text-white bg-secondary font-bold  py-2 px-6  focus:outline-none  text-xs  text-center flex items-center flex-row justify-center `}>
        PDF
      </button>
      <button type="button" onClick={exportExcel} data-pr-tooltip="CSV" className={`${bodyFont.className} pt-4 pb-4 pl-4  max-h-8 rounded	 text-white bg-secondary font-bold  py-2 px-6  focus:outline-none  text-xs  text-center flex items-center flex-row justify-center `}>
        Excel
      </button>


    </div>
  );

  return (
    <>

      <DataTable
        value={detailAlert}
        stripedRows
        size="small"
        className='mt-6'
        tableStyle={{ minWidth: "47rem" }}
        header={header}
        ref={dt}
        emptyMessage="Sin alertas registradas">
        <Column field="createdAt" sortable header="Fecha" body={dateBodyTemplate} headerClassName={`${bodyFont.className}   rounded-tl text-xs text-left `} />
        <Column field="codeSeal" sortable header="Código de Sello" body={codeSealBodyTemplate} headerClassName={`${bodyFont.className}  text-xs pl-4 text-left `} />
        <Column field="compartment" sortable header="Compartimento" body={compartmentLabelBodyTemplate} headerClassName={`${bodyFont.className} rounded-tr text-xs pl-4 text-left `} />
      </DataTable>
    </>

  )
}
