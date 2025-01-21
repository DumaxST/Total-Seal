import { prismaDb } from "../lib/db/prisma";
import { initialData } from "./seed";

async function main() {
    await prismaDb.notification.deleteMany();

    const { notifications } = initialData;

    const notificationsDB = await prismaDb.notification.createMany({
        data: notifications
    })
    console.log('Seed ejecutado correctamente');

}


(() => {

    if (process.env.NODE_ENV === 'production') return;


    main();
})();