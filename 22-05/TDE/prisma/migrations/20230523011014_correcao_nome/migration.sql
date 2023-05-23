/*
  Warnings:

  - You are about to drop the column `decricao` on the `Tarefa` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `Tarefa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Tarefa` DROP COLUMN `decricao`,
    ADD COLUMN `descricao` VARCHAR(191) NOT NULL;
