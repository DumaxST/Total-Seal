'use server'

import { prismaDb } from "../db/prisma"
import { Alert } from "../definitions/alert-definition";

interface PaginationOptions{
    take : number;
    page : number;

}
export const getPaginatedAlerts = async({take, page}: PaginationOptions):Promise<{currentPage:number,totalPages:number,totalCount:number, alerts:Alert[] }>=>{
    if ( isNaN(Number(page))) page = 1;
    if ( page < 1 ) page = 1;

    try {
        const alerts = await prismaDb.alert.findMany({
            take:take,
            skip: (page - 1 ) * take,
        })

        const totalCount = await prismaDb.alert.count({})
        const totalPages = Math.ceil(totalCount / take)
        
        return {
            currentPage: page,
            totalPages,
            totalCount,
            alerts
        }
    } catch (error) {
       throw new Error('No se pudo cargar las alertas')
    }

}