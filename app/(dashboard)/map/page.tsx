import { headingFont, bodySecondaryFont } from "@/app/config/fonts";
import { MapContainer } from "@/app/components/ui";
import { CardWrapper } from "@/app/components/wrappers";
import HeaderSection from "@/app/components/ui/header/HeaderSection";


export default function MapPage() {
  
  return (
    <>
      <HeaderSection
        title="Mapa"
        textButton="Regresar"
        link="/main"
      />
      
      <CardWrapper className="flex justify-center items-center h-60">
           
            
                <MapContainer/>

            
      </CardWrapper>
    </>
  );
}
