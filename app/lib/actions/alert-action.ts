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
        const lastAlerts = await prismaDb.alert.findMany({
            take:take,
            skip: (page - 1 ) * take,
        })
        return lastAlerts
    } catch (error) {
       throw new Error('No se pudo cargar las alertas')
    }

}