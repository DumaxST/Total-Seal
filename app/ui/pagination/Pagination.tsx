import React from 'react'

export const Pagination = () => {
  return (
<div className="flex justify-center">
  <nav aria-label="Page navigation example">
    <ul className="flex list-style-none">

      <li className="page-item disabled"><a
          className="page-link relative block py-1.5 px-3   bg-transparent outline-none transition-all duration-300  border border-[#F4F4F4] rounded-l-lg text-tertiary pointer-events-none focus:shadow-none"
          href="#" >Anterior</a></li>
      <li className="page-item"><a
          className="page-link relative block py-1.5 px-3   bg-transparent outline-none transition-all duration-300 border border-[#F4F4F4] text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">1</a></li>

      <li className="page-item active"><a
          className="page-link relative block py-1.5 px-3   bg-blue-600 outline-none transition-all duration-300 border border-[#F4F4F4] text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
          href="#">2 <span className="visually-hidden"></span></a></li>

      <li className="page-item"><a
          className="page-link relative block py-1.5 px-3   bg-transparent outline-none transition-all duration-300 border border-[#F4F4F4] text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">3</a></li>

      <li className="page-item"><a
          className="page-link relative block py-1.5 px-3   bg-transparent outline-none transition-all duration-300 border border-[#F4F4F4] rounded-r-lg text-tertiary hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">Siguiente</a></li>
    </ul>
  </nav>
</div>
  )
}
