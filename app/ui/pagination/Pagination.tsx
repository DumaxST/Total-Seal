"use client"
import { generatePaginationNumbers } from "@/app/lib/utils";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { clsx } from 'clsx';

interface Props{
    totalPages: number;
}

export const Pagination = ({totalPages}:Props) => {

    const pathname = usePathname();
    const searchParams = useSearchParams();

    const pageString = searchParams.get('page') ?? 1;

    const pageNumber = Number(pageString);
   
    const currentPage = isNaN(pageNumber) ? 1 : pageNumber;
   
    if(currentPage < 1  || isNaN(currentPage)){
        redirect( pathname );
    }

    const allPages = generatePaginationNumbers(currentPage, totalPages);
    const createPageUrl = ( pageNumber : number | string ) => {
        const params = new URLSearchParams(searchParams);

        if(pageNumber === '...'){
            return `${ pathname }?${params.toString()}`
        }

        if( Number(pageNumber) <= 0){
            return `${ pathname }` //href='/'    }
        }
        
        if( Number(pageNumber) > totalPages){ //Next >
            return `${ pathname }?${ params.toString() }`
        }
        params.set('page', pageNumber.toString());

        return ` ${pathname}?${params.toString()}`
    }

  return (
    <div className="flex justify-center mb-32">
        <nav aria-label="Page navigation example">
            <ul className="flex list-style-none">
                <li className={`page-item ${ currentPage == 1 ? "disabled" : "" }`}>
                    <Link href={ createPageUrl( currentPage - 1 )}
                        className="page-link relative block py-1.5 px-3  bg-transparent outline-none transition-all duration-300  border border-[#F4F4F4] rounded-l-lg text-tertiary hover:text-gray-800 hover:bg-gray-200 focus:shadow-none ">
                        Anterior</Link>
                </li>
               {
                     allPages.map((page, index) => (
                          <li key={index} className="page-item">
                            <Link href={ createPageUrl( page )}
                                className={
                                    clsx(
                                        "page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                                        {
                                            'bg-blue-600 shadow-sm text-white hover:text-white hover:bg-blue-700': page === currentPage
                                        }
                                    )
                                }
                                >
                                {page}
                            </Link>
                        </li>))
               } 
                
                <li className="page-item">
                    <Link href={ createPageUrl( currentPage + 1 )}
                        className="page-link relative block py-1.5 px-3   bg-transparent outline-none transition-all duration-300 border border-[#F4F4F4] rounded-r-lg text-tertiary hover:text-gray-800 hover:bg-gray-200 focus:shadow-none">
                            Siguiente
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
