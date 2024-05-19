import React from 'react';

import { CardWrapper } from "@/app/components/wrappers";

import { TableWithFilter, FormDevice } from "@/app/components/ui";

import { headingFont} from "@/app/config/fonts";
import {devices, detailedColumns} from "@/app/lib/data";
import {devicesAll } from "@/app/lib/data";

export default function DevicePage() {

 
  return (
   <div>
      <h2 className={`heading-h2 ${headingFont.className}`}>Unidades</h2>
      <CardWrapper className="mb-5">
        
         <FormDevice data={devicesAll}/>
       
      </CardWrapper>
      <CardWrapper>
          <TableWithFilter 
            data={devices} 
            columns={detailedColumns}
            showActions={true}
            textButtonAction="Ver actividad"
            linkHref="/device/12"
            />
        </CardWrapper>

   </div>
  );
}