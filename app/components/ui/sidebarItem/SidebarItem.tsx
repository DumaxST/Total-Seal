'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icon } from "@/app/components/ui";

interface SidebarItemProps {
  path: string;
  icon: string;
  title: string;
}

export const SidebarItem = ({ path, icon, title }: SidebarItemProps) => {
  const currentPath = usePathname();

  return (
    <Link
      href={path}
      className="w-full px-2 inline-flex space-x-2 items-center border-b border-gray-300 py-2 hover:bg-white/5 transition ease-linear duration-150"
    >
      <div>
        <Icon
          color=""
          size={30}
          icon={icon}
          className={` ${currentPath === path ? 'bg-primary' : '' }  rounded p-1.5`}
        />
      </div>

      <div className="flex flex-col">
        <span className= {` ${currentPath === path ? 'font-bold' : '' }  text-sm  leading-5`}>{title}</span>
      </div>
    </Link>
  );
};
