/*
  Warnings:

  - You are about to drop the column `compartiment` on the `Alert` table. All the data in the column will be lost.
  - Added the required column `compartment` to the `Alert` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Compartment" AS ENUM ('ONE', 'TWO', 'THREE');

-- AlterTable
ALTER TABLE "Alert" DROP COLUMN "compartiment",
ADD COLUMN     "compartment" "Compartment" NOT NULL;

-- DropEnum
DROP TYPE "Compartiment";
