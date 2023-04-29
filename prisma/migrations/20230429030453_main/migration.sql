/*
  Warnings:

  - You are about to drop the column `userId` on the `Favs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Favs" DROP CONSTRAINT "Favs_userId_fkey";

-- AlterTable
ALTER TABLE "Favs" DROP COLUMN "userId",
ADD COLUMN     "listFavsId" TEXT;

-- CreateTable
CREATE TABLE "ListFavs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "ListFavs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Favs" ADD CONSTRAINT "Favs_listFavsId_fkey" FOREIGN KEY ("listFavsId") REFERENCES "ListFavs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListFavs" ADD CONSTRAINT "ListFavs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
