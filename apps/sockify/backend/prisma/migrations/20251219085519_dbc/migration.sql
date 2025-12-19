/*
  Warnings:

  - You are about to drop the `Sock_user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Sock_user";

-- CreateTable
CREATE TABLE "SOCK_USERS" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "rooms" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "connects" INTEGER[] DEFAULT ARRAY[]::INTEGER[],

    CONSTRAINT "SOCK_USERS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SOCK_ROOMS" (
    "id" SERIAL NOT NULL,
    "user_one" INTEGER NOT NULL,
    "user_two" INTEGER NOT NULL,

    CONSTRAINT "SOCK_ROOMS_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SOCK_PAYLOAD" (
    "id" SERIAL NOT NULL,
    "room_id" INTEGER NOT NULL,
    "sender" INTEGER NOT NULL,
    "payload" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SOCK_PAYLOAD_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SOCK_USERS_email_key" ON "SOCK_USERS"("email");
