/*
  Warnings:

  - You are about to drop the column `deviceId` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `tankCompartment` on the `Notification` table. All the data in the column will be lost.
  - Added the required column `imei` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `tankNumber` on the `Notification` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "deviceId",
DROP COLUMN "tankCompartment",
ADD COLUMN     "imei" TEXT NOT NULL,
DROP COLUMN "tankNumber",
ADD COLUMN     "tankNumber" INTEGER NOT NULL;
