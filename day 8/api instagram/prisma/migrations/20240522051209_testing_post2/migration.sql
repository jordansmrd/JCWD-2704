-- AlterTable
ALTER TABLE `comments` ADD COLUMN `post2Id` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `likes` ADD COLUMN `post2Id` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `posts2` (
    `id` VARCHAR(191) NOT NULL,
    `caption` VARCHAR(191) NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `image_blob` LONGBLOB NOT NULL,

    INDEX `posts2_image_idx`(`image`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `posts2` ADD CONSTRAINT `posts2_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_post2Id_fkey` FOREIGN KEY (`post2Id`) REFERENCES `posts2`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `likes` ADD CONSTRAINT `likes_post2Id_fkey` FOREIGN KEY (`post2Id`) REFERENCES `posts2`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
