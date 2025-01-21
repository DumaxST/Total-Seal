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

        return data
    } catch (error) {
        console.log(error)
    }

}

export const newNotification = async (

    imei: string,
    deviceName: string,
    tankNumber: number,
    valvebox: string,

    seal: string,
    oblea: string,
    domo: string,
    productStatus: string,
    userId: number
) => {
    try {
        const data = await prismaDb.notification.create({
            data: {
                imei: imei,
                deviceName: deviceName,
                tankNumber: tankNumber,
                seal: seal,
                valvebox: valvebox,
                oblea: oblea,
                domo: domo,
                productStatus: productStatus,
                userId: userId
            }
        })
    } catch (error) {

    }
}