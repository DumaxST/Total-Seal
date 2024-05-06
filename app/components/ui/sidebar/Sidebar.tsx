import React from 'react'
import {Icon} from "@/app/components/ui";   

export const Sidebar = () => {
  return (
   <div id="menu" className="bg-white min-h-screen z-10 text-black w-64  left-0 h-screen">
            <div id="logo" className="my-4 px-6 flex flex-row gap-1.5">
               <Icon  color='#80D602' size={20} icon="close-tab" />
               <h1 className="text-sm uppercase">Menú</h1>
            </div>

            <hr  className='pb-2 pt-2 h-10 border-l-2 border-primary'/>

            <div id="nav" className="w-full px-6">

              <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-gray-300 py-3 hover:bg-white/5 transition ease-linear duration-150">
                  <div>
                    <Icon color="" size={20} icon="reports-3" className='bg-primary'/>

                  </div>
                  <div className="flex flex-col">
                      <span className="text-sm  leading-5 ">Dashboard</span>
                  </div>
              </a>

              <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-gray-300 py-3 hover:bg-white/5 transition ease-linear duration-150">
                  <div>
                    <Icon color="#444" size={20} icon="unidades" />
                      
                  </div>
                  <div className="flex flex-col">
                      <span className="text-sm leading-5">Unidades</span>
                  </div>
              </a>

              
            </div>
          </div>
  )
}
