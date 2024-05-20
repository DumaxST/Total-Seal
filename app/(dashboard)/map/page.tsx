import { headingFont, bodySecondaryFont } from "@/app/config/fonts";
import { Icon, Button, MapContainer } from "@/app/components/ui";
import { CardWrapper } from "@/app/components/wrappers";

import Link from "next/link";
interface AnyReactComponentProps {
    lat: number;
    lng: number;
    text: string;
    }
const AnyReactComponent = ({ text}: AnyReactComponentProps) => <div>{text}</div>;

export default function MapPage() {
  
  return (
    <>
      <div className="flex flex-row justify-between mb-5">
        <div className="flex flex-row gap-5">
          <h2 className={`heading-h2 ${headingFont.className}`}>Unidades</h2>
          <Icon
            color=""
            size={30}
            icon="unidad-individual"
            className={`bg-primary  rounded p-1.5`}
          />
        </div>
        <Link href="/device/12">
          <Button text="Regresar" />
        </Link>
      </div>
      <CardWrapper>
           
            <div>
                <MapContainer/>

            </div>
      </CardWrapper>
    </>
  );
}
