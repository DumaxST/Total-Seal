"use client"
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button } from '../Button';


export const FormLogin = () => {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials', {
      username: formData.get('username'),
      password: formData.get('password'),
      redirect: false
    });
    if (!response?.error) {
      router.push('/dashboard');
      router.refresh();
    }
    
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="username" className="flex flex-col">
        Nombre de usuario
        <input
          id="username"
          name="username"
          type="text"
          className="rounded background-gray-200 border border-slate-200 outline-transparent py-2 px-1.5 mt-1.5"
        />
      </label>

      <label htmlFor="password" className="flex flex-col gap-1.5">Contraseña
        <input
          id="password"
          name="password"
          type="password"
          className="rounded background-gray-200 border border-slate-200 outline-transparent py-2 px-1.5 mt-1.5"
        />
      </label>
      {/* TODO:
      - add error states */}
    
      <Button type='submit'>
        Acceder
      </Button>   
  
           


    </form>
  );
};
