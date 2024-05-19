
'use client';

import { headingFont, bodySecondaryFont} from "@/app/config/fonts";
import { Icon, Button, CardDetailDevice, TableWithFilter } from "@/app/components/ui";
import { CardWrapper } from "@/app/components/wrappers";


import { TabView, TabPanel } from 'primereact/tabview';
import {detailDevice, detailDeviceColumns} from "@/app/lib/data";;
import Link from 'next/link'
import { Button as ButtonPrimary} from '@/app/components/ui';


export default function DeviceLayout() {
  const {data} = detailDevice;

   
  return (
    <div>
        <div className="flex flex-row justify-between mb-5">
          <div className="flex flex-row gap-5">

            <h2 className={`heading-h2 ${headingFont.className}`}>Unidades</h2>
            <Icon
              color=""
              size={30}
              icon="unidad-individual"
              className={`bg-primary  rounded p-1.5`}
            />

          </div>
          <Link href="/main">
            <Button text='Regresar'/>
          </Link>
          
        </div>
        
        <CardWrapper>
                {
                  detailDevice.trailers.map( (trailer) => (
                    <TabView key={trailer.id} className="shadow-lg" >
                        {
                          trailer.compartments.map( (compartment) => (
                           
                            <TabPanel key={compartment.id} header={compartment.name}>
                              <div  className="grid lg:grid-cols-5 md:grid-cols-2 gap-4">
                                <CardDetailDevice 
                                  title="Caja Válvulas"
                                  numberCard="1"
                                  type= "boxPrimary"
                                  status={compartment.valve_box}
                                  />
                                <CardDetailDevice
                                  title="Oblea"  
                                  numberCard="2"
                                  type="boxSecondary"
                                  status={compartment.wafer}
                                  />
                                <CardDetailDevice 
                                  title="Domo"  
                                  numberCard="3"
                                  type="boxSecondary"
                                  status={compartment.dome}
                                  />
                                <CardDetailDevice 
                                  title="Contenido"
                                  type="boxTertiary"
                                  status={compartment.content}
                                  numberCard="4"/>
                                <div className={`py-4 ps-4 pe-4 border-b border-black border-solid text-center`}>
                                  <h2 className={`text-sm ${headingFont.className}`}>Código de Sello</h2>
                                  <p className={` text-4xl	 ${bodySecondaryFont.className}`}>270066</p>
                                </div>
                                            

                              
                              
                                
                              </div>
                          
                            </TabPanel>
                          ))
                        }
                      </TabView>
                  ))
                }
                <p className={`mb-6 mt-5 text-center ${bodySecondaryFont.className}`}> <span className={`text-sm ${headingFont.className} pe-4`}>Última actividad:</span> 20/02/2024 | 13:06 | 29°C</p>

                <TableWithFilter 
                  data={data} 
                  columns={detailDeviceColumns}
                  showActions={true}
                  textButtonAction="Ver mapa"
                  linkHref="/device/12"
                />
        </CardWrapper>
       

    </div>
  );
}