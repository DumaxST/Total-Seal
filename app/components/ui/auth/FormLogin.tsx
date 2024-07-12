"use client "
import {useActionState} from 'react'

export const FormLogin = () => {

async function onSubmit(){
  
}
  return (
    <form className="form" >
      
      <div className="form__group">
        <label htmlFor="username">Nombre de usuario</label> 
        <input id="username"  name="username" type="text" className='rounded background-gray-200 border border-slate-200 outline-transparent py-2 px-1.5 '/>
      </div>

      <div className="form__group">
        <label htmlFor="password">Contraseña</label>
        <input id="password" name="password" type="password" className='rounded background-gray-200 border border-slate-200 outline-transparent py-2 px-1.5 '/>
      </div>

      {/* <div className='flex  flex-row-reverse'> */}
        {/* <Link  href="/main" className="border text-white  py-2 px-16 background-secondary">
           
            
            Acceder
          
            
          
          </Link> */}
      {/* </div> */}

    </form>
  )
}
