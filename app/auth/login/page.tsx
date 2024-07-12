
import {headingFont} from '@/app/config/fonts';
import { FormLogin } from '../../ui/auth/FormLogin';

export default function LoginPage() {

  return (
    <section className={`heroForm pt-6 pb-6 pr-5 pl-5`}>
    <h3 className={`${headingFont.className} heroForm__title text-3xl`}>Bienvenido</h3>
    <h3 className={`${headingFont.className} heroForm__subtitle text-2xl uppercase`}>Iniciar sesión</h3>
    <FormLogin/>
  </section>

  );
}