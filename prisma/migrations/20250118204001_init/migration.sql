-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "tankNumber" TEXT NOT NULL,
    "tankCompartment" INTEGER NOT NULL,
    "seal" TEXT NOT NULL,
    "valvebox" TEXT NOT NULL,
    "oblea" TEXT NOT NULL,
    "domo" TEXT NOT NULL,
    "productStatus" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);
