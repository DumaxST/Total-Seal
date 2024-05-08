import { CardWrapper } from "@/app/components/wrappers";
import { TableWithFilter } from "@/app/components/ui";

import { headingFont} from "@/app/config/fonts";
import {devices, columns, detailedColumns} from "@/app/lib/data";

export default function DevicePage() {
  return (
   <div>
      <h2 className={`heading-h2 ${headingFont.className}`}>Unidades</h2>
      <CardWrapper>
          <TableWithFilter 
            data={devices} 
            columns={detailedColumns}
            showActions={true}
            showToolbar={true}
            />
        </CardWrapper>

   </div>
  );
}