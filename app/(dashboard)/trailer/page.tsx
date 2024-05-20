
import { AddDevice,HeaderSection } from "@/app/components/ui";
import { CardWrapper } from "@/app/components/wrappers";


export default function MapPage() {
  
  return (
    <>
      <HeaderSection
        title="Agregar evento "
        textButton="Regresar"
        link="/main"
        showIcon={false}
      />
      
      <CardWrapper className="flex justify-center items-center h-60">
           
            <AddDevice/>
  

            
      </CardWrapper>
    </>
  );
}
