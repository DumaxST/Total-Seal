import {headingFont} from '@/app/config/fonts';
import {Icon } from "@/app/components/ui";

export default function LoginPage() {
  return (
    <section className={`heroForm pt-6 pb-6 pr-5 pl-5`}>
    <h2 className={`${headingFont.className} heroForm__title text-5xl `}>Bienvenido a Total Seal </h2>
    <h3 className={`${headingFont.className} heroForm__subtitle text-3xl uppercase`}>Iniciar sesión</h3>
    <form className="form">
      
      <div className="form__group">
        <label htmlFor="username">Nombre de usuario</label>
        
        <input id="username" type="text" />
      </div>

      <div className={`form__group styles.password_wrapper`}>
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" className={`form__control`}/>
        <Icon color="#444" size={25} icon="visualize" className={`password_icon`}/>

      </div>

      <div className='flex  flex-row-reverse'>
        
        <button className="styles.button">Acceder</button>
      </div>

    </form>
  </section>

  );
}