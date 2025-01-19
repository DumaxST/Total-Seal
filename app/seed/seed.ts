
interface SeedAlert {
    // id: string;
    imei: string;
    tankNumber: number;
    seal: string;
    valvebox: string;
    oblea: string;
    domo: string;
    productStatus: string;
    userId: number;
}

interface SeedData {
    notifications: SeedAlert[]
}

export const initialData: SeedData = {
    notifications: [
        {
            imei: "860186054123977",
            tankNumber: 1,
            seal: '000000',
            valvebox: 'Caja de Válvulas Cerrada',
            oblea: 'Oblea Cerrada',
            domo: 'Domo Abierto',
            productStatus: 'Con Producto',

            userId: 1020,
        },
        {
            imei: "860186054123977",
            tankNumber: 3,
            seal: '888888',
            valvebox: 'Caja de Válvulas Cerrada',
            oblea: 'Oblea Cerrada',
            domo: 'Domo Cerrado',
            productStatus: 'Sin Producto',

            userId: 1020,
        },
        {
            imei: "866770059347576",
            tankNumber: 3,
            seal: '888888',
            valvebox: 'Caja de Válvulas Cerrada',
            oblea: 'Oblea Cerrada',
            domo: 'Domo Cerrado',
            productStatus: 'Sin Producto',
            userId: 1020,
        }
    ]
}