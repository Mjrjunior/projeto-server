/*
  Warnings:

  - You are about to drop the column `number` on the `agenda` table. All the data in the column will be lost.
  - Added the required column `number_house` to the `agenda` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "agenda" DROP COLUMN "number",
ADD COLUMN     "number_house" TEXT NOT NULL;
