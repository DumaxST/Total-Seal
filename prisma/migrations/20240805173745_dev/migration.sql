-- CreateEnum
CREATE TYPE "PriorityAlert" AS ENUM ('LOW', 'HIGH');

-- CreateEnum
CREATE TYPE "Compartment" AS ENUM ('ONE', 'TWO', 'THREE');

-- CreateTable
CREATE TABLE "Alert" (
    "id" TEXT NOT NULL,
    "device" TEXT NOT NULL,
    "idDevice" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "codeSeal" TEXT NOT NULL,
    "priority" "PriorityAlert" NOT NULL,
    "compartment" "Compartment" NOT NULL,
    "event" TEXT NOT NULL,

    CONSTRAINT "Alert_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Alert_idDevice_idx" ON "Alert"("idDevice");
