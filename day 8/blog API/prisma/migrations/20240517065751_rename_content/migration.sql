/*
  Warnings:

  - You are about to drop the column `Content` on the `categories` table. All the data in the column will be lost.
  - Added the required column `content` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categories` DROP COLUMN `Content`,
    ADD COLUMN `content` VARCHAR(191) NOT NULL;
