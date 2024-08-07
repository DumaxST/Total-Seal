'use server'

import { prismaDb } from "../db/prisma"

interface PaginationOptions {
  take: number;
  page: number;
}

interface Alert {
  id: string;
  device: string;
  idDevice: string;
  createdAt: Date;
  codeSeal: string;
  priority: string;
  compartment: string;
  event: string;
}

export const getPaginatedAlerts = async ({ take, page }: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    const alertsTmp = await prismaDb.alert.findMany({
      take: take,
      skip: (page - 1) * take,
    });

    const alerts: Alert[] = alertsTmp.map((alert) => {
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
    });

    const totalCount = await prismaDb.alert.count({});
    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages,
      totalCount,
      alerts
    }
  } catch (error: any) {
    console.log(error);
    throw new Error('No se pudo cargar las alertas');
  }
}

export const getAlertsByDeviceId = async (idDevice: string) => {
  try {
    const alertsTmp = await prismaDb.alert.findMany({
      where: {
        idDevice: idDevice
      }
    });

    const alerts: Alert[] = alertsTmp.map((alert) => {
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
    });

    return alerts;
  } catch (error: any) {
    throw new Error('No se pudo cargar las alertas');
  }
}
