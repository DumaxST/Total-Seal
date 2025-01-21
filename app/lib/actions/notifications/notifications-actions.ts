import { prismaDb } from "../../db/prisma"

export const getAllNotificationsByUser = async () => {
    try {
        return await prismaDb.notification.findMany();


    } catch (error) {
        console.log(error)
    }
}

export const getNotificationByDeviceAndUser = async (userId: number, idDevice: string) => {

    try {
        const data = await prismaDb.notification.findMany({
            where: {
                imei: idDevice,
                userId: userId
            }
        })
        console.log(data)

        return data
    } catch (error) {
        console.log(error)
    }

}