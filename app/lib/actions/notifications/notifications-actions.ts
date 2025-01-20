import { prismaDb } from "../../db/prisma"

export const getAllNotificationsByUser = async () => {
    try {
        const data = await prismaDb.notification.findMany()
        const filterNotification = data.map(notification => {
            return {
                id: notification.id,
                seal: notification.seal,
                createdAt: notification.createdAt,
            }
        })
        return filterNotification
    } catch (error) {
        console.log(error)
    }
}