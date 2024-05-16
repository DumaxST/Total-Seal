import React from 'react';
import { Icon } from "@/app/components/ui";

import { SidebarItem } from '@/app/components/ui';

const menuItems = [
    {
        path: "/main",
        icon: "reports-3",
        title: "Dashboard",
    },
    {
        path: "/devices",
        icon: "unidades",
        title: "Unidades",
    },
];

export const Sidebar = () => {
  return (
   <div id="menu" className="bg-white min-h-screen z-10 text-black w-64  left-0 h-screen">
            <div id="logo" className="my-4 px-6 flex flex-row gap-1.5">
               <Icon  color='#80D602' size={20} icon="close-tab" />
               <h1 className="text-sm uppercase">Menú</h1>
            </div>

            <hr  className='pb-2 pt-2  border-primary'/>

            <div id="nav" className="w-full px-6">


             {
                menuItems.map(item =>(
                    <SidebarItem key={item.path} {...item} />
                ))
             }

              
            </div>
          </div>
  )
}
