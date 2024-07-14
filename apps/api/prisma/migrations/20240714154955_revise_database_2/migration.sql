/*
  Warnings:

  - You are about to drop the column `price` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `class_name` on the `ticket_types` table. All the data in the column will be lost.
  - You are about to drop the column `participant_id` on the `transactions` table. All the data in the column will be lost.
  - You are about to drop the column `registration_date` on the `users` table. All the data in the column will be lost.
  - Added the required column `type_name` to the `ticket_types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number_of_tickets` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticket_type_id` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `price`;

-- AlterTable
ALTER TABLE `ticket_types` DROP COLUMN `class_name`,
    ADD COLUMN `type_name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `transactions` DROP COLUMN `participant_id`,
    ADD COLUMN `number_of_tickets` INTEGER NOT NULL,
    ADD COLUMN `ticket_type_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `registration_date`;

-- AddForeignKey
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_ticket_type_id_fkey` FOREIGN KEY (`ticket_type_id`) REFERENCES `ticket_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
