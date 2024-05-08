
import { CardWithIcon, HorizontalBar, TableWithFilter } from "@/app/components/ui";

import { CardWrapper } from "@/app/components/wrappers";
import { headingFont} from "@/app/config/fonts";

import {devices, columns} from "@/app/lib/data";

export default function MainPage() {
  return (
    <div className="grid grid-cols-12 gap-4">

      <div className="grid grid-cols-subgrid gap-4 col-span-4">
        <div className="col-start-1 col-end-3">
          <CardWithIcon
            title="30"
            subtitle="Unidades"
            icon="unidades"
          />
        </div>
        <div className="col-start-3 col-end-6">
          <CardWithIcon
            title="25"
            subtitle="Remolque"
            icon="unidad-pipa"
          />
        </div>
        <div className="col-start-1 col-end-3">
        <CardWithIcon
          title="18"
          subtitle="Remolques con contenido"
          icon="contenido"
        />
        </div>
        <div className="col-start-3 col-end-6">
        <CardWithIcon
          title="3.5 min"
          subtitle="Promedio de sellos por unidad"
          icon="sellos"
        />
        </div>
        <div className="col-start-1 col-end-6">
          <CardWrapper className="col-start-1 col-end-3">
            <h3 className={`${headingFont.className}`}>Unidades con más alertas - últimos 7 días</h3>
            <HorizontalBar/>
          </CardWrapper>
         </div>
      </div>

      <div className="col-span-8">
        <CardWrapper>
          <h3 className={`${headingFont.className} pb-4 `}>Últimas alertas</h3>
          <TableWithFilter 
            data={devices} 
            columns={columns}
            showActions={true}
            showToolbar={false}
            />
        </CardWrapper>

      </div>

    </div>
  );
}