-- CreateTable
CREATE TABLE "Sock_user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rooms" INTEGER,

    CONSTRAINT "Sock_user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sock_user_email_key" ON "Sock_user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Sock_user_rooms_key" ON "Sock_user"("rooms");
