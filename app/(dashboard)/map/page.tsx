
import { MapContainer,HeaderSection } from "@/app/components/ui";
import { CardWrapper } from "@/app/components/wrappers";


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
