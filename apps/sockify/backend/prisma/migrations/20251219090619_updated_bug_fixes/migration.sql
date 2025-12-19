/*
  Warnings:

  - You are about to drop the column `connects` on the `SOCK_USERS` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SOCK_USERS" DROP COLUMN "connects",
ADD COLUMN     "accepted" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
ADD COLUMN     "pending" INTEGER[] DEFAULT ARRAY[]::INTEGER[];
