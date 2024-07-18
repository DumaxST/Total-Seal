
import { headingFont} from "@/app/config/fonts";
import { Main } from '@/app/ui';
import { CardWrapper } from "@/app/ui/CardWrapper";

export default function MainPage() {

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12">
          <CardWrapper>
            <h3 className={`${headingFont.className} pb-4`}>Últimas alertas</h3>
            <Main />
          </CardWrapper>
      </div>
    </div>
  );
}