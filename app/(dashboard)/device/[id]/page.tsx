

import {  HeaderSection } from "@/app/components/ui";

import { CardWrapper } from "@/app/components/wrappers";

import { DetailDevice } from '../../../ui/device/DetailDevice';

import { getItemFromCookies } from "@/app/utils/cookies";

interface Props{
  params: {id:string}
}
export default async function DeviceLayout({params}:Props) {
  //Esto se puede cambiar al login para refactor
  const response =  await fetch("https://lite.dumaxst.com/v1/users/settings", {
    method: 'GET',
    headers: {
      'X-Api-Key': "GPCZeUzVrpsIypnhF2FX+28NVNH2ZebhnBUVLHvbn3Q=",
      'Content-Type': 'application/json',
      'Uuid': 'RESTFul-API',
      "App": "RESTFul API"
    }
  });

  const data = await response.json();
  

  const detailDevice = getItemFromCookies(params.id, 'devices');

  return (
    <>
        {
          detailDevice === undefined ? 
            <p>Device not found</p>  :
            <>
            <HeaderSection
              title={detailDevice?.device ?? ''}
              showIcon={true}
              textButton="Regresar"
              link="/main"
            />
            <CardWrapper>
              {detailDevice !== null && <DetailDevice imei={params.id} code={data.user_preferences.code} device={{...detailDevice}}/>}
            </CardWrapper>
            </>
        }
       
        {/* <CardWrapper>
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
                  linkHref="/map"
                />
        </CardWrapper>
        */}

    </>
  );
}