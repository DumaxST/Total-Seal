'use server'

import { prismaDb } from "../db/prisma"
 
export const getLastsAlert = async()=>{
    try {
        const lastAlerts = await prismaDb.alert.findMany({})
        return lastAlerts
    } catch (error) {
        console.log(error)
        return []
    }

}