/*
  Warnings:

  - The values [one,two,three] on the enum `Compartiment` will be removed. If these variants are still used in the database, this will fail.
  - The values [MEDIUM] on the enum `PriorityAlert` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `idDevice` to the `Alert` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Compartiment_new" AS ENUM ('ONE', 'TWO', 'THREE');
ALTER TABLE "Alert" ALTER COLUMN "compartiment" TYPE "Compartiment_new" USING ("compartiment"::text::"Compartiment_new");
ALTER TYPE "Compartiment" RENAME TO "Compartiment_old";
ALTER TYPE "Compartiment_new" RENAME TO "Compartiment";
DROP TYPE "Compartiment_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "PriorityAlert_new" AS ENUM ('LOW', 'HIGH');
ALTER TABLE "Alert" ALTER COLUMN "priority" TYPE "PriorityAlert_new" USING ("priority"::text::"PriorityAlert_new");
ALTER TYPE "PriorityAlert" RENAME TO "PriorityAlert_old";
ALTER TYPE "PriorityAlert_new" RENAME TO "PriorityAlert";
DROP TYPE "PriorityAlert_old";
COMMIT;

-- DropIndex
DROP INDEX "Alert_device_idx";

-- AlterTable
ALTER TABLE "Alert" ADD COLUMN     "idDevice" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Alert_idDevice_idx" ON "Alert"("idDevice");
