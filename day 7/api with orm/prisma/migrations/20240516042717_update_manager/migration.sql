/*
  Warnings:

  - You are about to drop the column `branchId` on the `Manager` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Manager` DROP FOREIGN KEY `Manager_branchId_fkey`;

-- AlterTable
ALTER TABLE `Manager` DROP COLUMN `branchId`;

-- AddForeignKey
ALTER TABLE `Manager` ADD CONSTRAINT `Manager_id_fkey` FOREIGN KEY (`id`) REFERENCES `branches`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
