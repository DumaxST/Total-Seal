'use server'

import { prismaDb } from "../db/prisma"

interface PaginationOptions{
    take : number;
    page : number;

}
export const getPaginatedAlerts = async({take, page}: PaginationOptions)=>{

    if ( isNaN(Number(page))) page = 1;
    if ( page < 1 ) page = 1;

    try {
        const alertsTmp = await prismaDb.alert.findMany({
            take:take,
            skip: (page - 1 ) * take,
        })
        const alerts = alertsTmp.map((alert ) => {
            return {
                id: alert.id,
                device: alert.device,
                idDevice: alert.idDevice,
                createdAt: alert.createdAt,
                codeSeal: alert.codeSeal,
                priority: alert.priority,
                compartment: alert.compartment,
                event: alert.event
            }
        })
        const totalCount = await prismaDb.alert.count({})
        const totalPages = Math.ceil(totalCount / take)
        
        return {
            currentPage: page,
            totalPages,
            totalCount,
            alerts
        }
    } catch (error:any) {
        console.log(error)
       throw new Error('No se pudo cargar las alertas')
    }

}