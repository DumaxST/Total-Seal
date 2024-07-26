"use client";
import React from "react";
import { Icon } from "./Icon";
import { useSearchParams , useRouter, usePathname} from 'next/navigation'

interface SearchProps {
  placeholder?: string;
}
export default function Search({placeholder=''}:SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();


  const handleSearch = (term:string) =>{
    const params = new URLSearchParams(searchParams);
    if(term){
        params.set('query', term);
    }else{
        params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="relative flex flex-col w-52">
        <label htmlFor="search"> 
            Buscar
        </label>
        <input
            className='h-7 w-full rounded-md border border-gray-200 py-[2px] pl-1 text-sm outline-2 placeholder:text-gray-500 bg-gray-100 focus:outline-none' 
            id="search"
            type="text"
            placeholder={placeholder}
            defaultValue={searchParams.get('query')?.toString()}
            onChange= { e => handleSearch(e.target.value)}
            />
        <Icon 
            className="absolute left-44  peer-focus:text-gray-900 top-1/2 "
            icon="icon-find" 
            color="#A6A6A6"  
            size={20}/>
    </div>
  )
}
