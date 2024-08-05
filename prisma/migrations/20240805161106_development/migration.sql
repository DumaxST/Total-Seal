-- CreateEnum
CREATE TYPE "PriorityAlert" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "Compartiment" AS ENUM ('one', 'two', 'three');

-- CreateTable
CREATE TABLE "Alert" (
    "id" TEXT NOT NULL,
    "device" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "codeSeal" TEXT NOT NULL,
    "priority" "PriorityAlert" NOT NULL,
    "compartiment" "Compartiment" NOT NULL,
    "event" TEXT NOT NULL,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Alert_device_idx" ON "Alert"("device");
