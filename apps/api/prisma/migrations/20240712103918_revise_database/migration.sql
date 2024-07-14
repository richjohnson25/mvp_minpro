/*
  Warnings:

  - You are about to drop the column `available_seats` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `participant_uid` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `ticket_types` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `event_participants` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `review` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `event_participants` DROP FOREIGN KEY `event_participants_event_id_fkey`;

-- DropForeignKey
ALTER TABLE `event_participants` DROP FOREIGN KEY `event_participants_participant_uid_fkey`;

-- DropForeignKey
ALTER TABLE `events` DROP FOREIGN KEY `events_participant_uid_fkey`;

-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `Review_event_id_fkey`;

-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `Review_participant_uid_fkey`;

-- AlterTable
ALTER TABLE `events` DROP COLUMN `available_seats`,
    DROP COLUMN `date`,
    DROP COLUMN `participant_uid`,
    DROP COLUMN `ticket_types`,
    DROP COLUMN `time`,
    DROP COLUMN `type`;

-- AlterTable
ALTER TABLE `transactions` DROP COLUMN `date`,
    DROP COLUMN `time`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `address`;

-- DropTable
DROP TABLE `event_participants`;

-- DropTable
DROP TABLE `review`;

-- CreateTable
CREATE TABLE `schedules` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `start_time` DATETIME(3) NOT NULL,
    `end_time` DATETIME(3) NOT NULL,
    `available_seats` INTEGER NOT NULL,
    `event_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ticket_types` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `class_name` VARCHAR(191) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `event_id` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reviews` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rating` INTEGER NOT NULL,
    `overall_experience` TEXT NOT NULL,
    `event_quality` TEXT NOT NULL,
    `suggestions` TEXT NOT NULL,
    `event_id` INTEGER NOT NULL,
    `participant_uid` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `schedules` ADD CONSTRAINT `schedules_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ticket_types` ADD CONSTRAINT `ticket_types_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_participant_uid_fkey` FOREIGN KEY (`participant_uid`) REFERENCES `users`(`uid`) ON DELETE RESTRICT ON UPDATE CASCADE;
