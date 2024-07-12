"use client";
import { login } from "@/app/lib/actions/auth-actions";
import { useActionState } from "react";
import { useFormState } from 'react-dom';
import { Button } from '@/app/components/ui';


export const FormLogin = () => {
  const [state, action] = useFormState(login,{message:''});

  return (
    <form className="form" action={action}>
      <div className="form__group">
        <label htmlFor="username">Nombre de usuario
        <input
          id="username"
          name="username"
          type="text"
          className="rounded background-gray-200 border border-slate-200 outline-transparent py-2 px-1.5 "
        />
        </label>
      </div>

      <div className="form__group">
        <label htmlFor="password">Contraseña
        <input
          id="password"
          name="password"
          type="password"
          className="rounded background-gray-200 border border-slate-200 outline-transparent py-2 px-1.5 "
        />
        </label>
      </div>
      
     
      {/* <div className='flex  flex-row-reverse'> */}
      {/* <Link  href="/main" className="border text-white  py-2 px-16 background-secondary">
           
            
            Acceder
          
            
          
          </Link> */}
      {/* </div> */}
    </form>
  );
};
