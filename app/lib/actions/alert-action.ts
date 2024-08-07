'use server'

import { prismaDb } from "../db/prisma"
import { Alert, PriorityAlert, Compartment } from "@/app/lib/definitions/alert-definition"

interface PaginationOptions {
  take: number;
  page: number;
}

export const getPaginatedAlerts = async ({ take, page }: PaginationOptions) => {
  if (isNaN(Number(page)) || page < 1) page = 1;
  if (take <= 0) take = 10; 

  try {
    const alertsTmp = await prismaDb.alert.findMany({
      take,
      skip: (page - 1) * take,
    });

    const alerts: Alert[] = alertsTmp.map((alert: any) => ({
      id: alert.id,
      device: alert.device,
      idDevice: alert.idDevice,
      createdAt: alert.createdAt,
      codeSeal: alert.codeSeal,
      priority: alert.priority as PriorityAlert,
      compartment: alert.compartment as Compartment,
      event: alert.event
    }));

    const totalCount = await prismaDb.alert.count({});
    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages,
      totalCount,
      alerts
    };
  } catch (error: any) {
    console.error("Error fetching paginated alerts:", error);
    throw new Error(`No se pudo cargar las alertas: ${error.message}`);
  }
};


export const getAlertsByDeviceId = async (idDevice: string) => {
  try {
    const alertsTmp = await prismaDb.alert.findMany({
      where: {
        idDevice: idDevice
      }
    });

    const alerts: Alert[] = alertsTmp.map((alert: any) => { // Usa "any" temporalmente para alert
      return {
        id: alert.id,
        device: alert.device,
        idDevice: alert.idDevice,
        createdAt: alert.createdAt,
        codeSeal: alert.codeSeal,
        priority: alert.priority as PriorityAlert, // Asegurar el tipo correcto
        compartment: alert.compartment as Compartment, // Asegurar el tipo correcto
        event: alert.event
      }
    });

    return alerts;
  } catch (error: any) {
    throw new Error('No se pudo cargar las alertas');
  }
}
