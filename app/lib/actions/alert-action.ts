'use server'

import { prismaDb } from "../db/prisma"
import { Alert } from "../definitions/alert-definition"
 
export const getLastsAlert = async():Promise<any> =>{
    try {
        const lastAlerts = await prismaDb.alert.findMany({})
        console.log(lastAlerts)
        return lastAlerts
    } catch (error) {
        console.log(error)
    }

}