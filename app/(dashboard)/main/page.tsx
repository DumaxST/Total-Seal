import { CardWithIcon } from "@/app/components/ui";

export default function MainPage() {
  return (
    <div className="grid grid-cols-6 gap-4">

      <div className="col-start-1 col-end-2">
        <CardWithIcon
          title="30"
          subtitle="Unidades"
          icon="unidades"
        />
      </div>
      <div className="col-start-2 col-end-3">
        <CardWithIcon
          title="25"
          subtitle="Remolque"
          icon="unidad-pipa"
        />
      </div>
      <div className="col-start-3 col-end-7 bg-lime-800 ">03</div>

      <div className="col-start-1 col-end-2 ">
        <CardWithIcon
          title="18"
          subtitle="Remolques con contenido"
          icon="contenido"
        />
      </div>
      <div className="col-start-2 col-end-3">
        <CardWithIcon
          title="3.5 min"
          subtitle="Promedio de sellos por unidad"
          icon="sellos"
        />
      </div>


      <div className="col-start-1 col-end-3 bg-orange-400">02</div>

    </div>
  );
}