import {headingFont} from '@/app/config/fonts';

export default function LoginPage() {
  return (
    <section className={`heroForm pt-6 pb-6 pr-5 pl-5`}>
    <h2 className={`${headingFont.className} heroForm__title text-5xl `}>Bienvenido a Total Seal </h2>
    <h3 className={`${headingFont.className} heroForm__subtitle text-3xl uppercase`}>Iniciar sesión</h3>
    <form className="form">
      
      <div className="form__group">
        <label htmlFor="username">Nombre de usuario</label>
        
        <input id="username" type="text" className='rounded background-gray-200 border border-slate-200 outline-transparent py-2 px-1.5 '/>
      </div>

      <div className={`form__group`}>
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" className='rounded background-gray-200 border border-slate-200 outline-transparent py-2 px-1.5 '/>

      </div>

      <div className='flex  flex-row-reverse'>
        
        <button className="border text-white  py-2 px-16 background-secondary">Acceder</button>
      </div>

    </form>
  </section>

  );
}