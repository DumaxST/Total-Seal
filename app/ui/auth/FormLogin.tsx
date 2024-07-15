"use client";
import { useFormState } from 'react-dom';
import { useEffect} from 'react';
import { setCookie } from 'cookies-next';
import { Button } from "@/app/components/Button";
import { login } from "@/app/lib/actions/auth-actions";
import { redirect } from 'next/navigation';

const initialState = {
  success: false,
  errors: null,
  token:null
}
export const FormLogin = () => {
  const [state, action] = useFormState(login,initialState);

  useEffect(() => {
    if (state.success && state.token) {
      setCookie('token', state.token) // 1 week
      redirect('/dashboard');

      // router.push('/dashboard')
    }
  }, [state])

  return (
    <form className="form" action={action}>
     
       <label htmlFor="username" className ="flex flex-col">
          Nombre de usuario
        <input
          id="username"
          name="username"
          type="text"
          className="rounded background-gray-200 border border-slate-200 outline-transparent py-2 px-1.5 mt-1.5"
        />
        </label>

        <label htmlFor="password" className ="flex flex-col gap-1.5">Contraseña
        <input
          id="password"
          name="password"
          type="password"
          className="rounded background-gray-200 border border-slate-200 outline-transparent py-2 px-1.5 mt-1.5"
        />
        </label>

        {/* <span className="tex-red-400">{}</span> */}
        <Button>
          Acceder
        </Button>

     
    </form>
  );
};
