/*
  Warnings:

  - You are about to drop the column `emai` on the `User` table. All the data in the column will be lost.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "emai",
ADD COLUMN     "email" TEXT NOT NULL;
