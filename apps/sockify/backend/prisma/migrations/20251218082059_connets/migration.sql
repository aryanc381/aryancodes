/*
  Warnings:

  - The `rooms` column on the `Sock_user` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `name` on table `Sock_user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Sock_user" ADD COLUMN     "connects" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
ALTER COLUMN "name" SET NOT NULL,
DROP COLUMN "rooms",
ADD COLUMN     "rooms" INTEGER[] DEFAULT ARRAY[]::INTEGER[];
