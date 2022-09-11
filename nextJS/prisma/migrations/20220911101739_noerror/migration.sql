-- AlterTable
ALTER TABLE `user` ADD COLUMN `password` VARCHAR(191) NULL,
    ADD COLUMN `role` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Branch` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Branch_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` ENUM('HAIRCUT', 'SHAVE') NOT NULL,
    `branchId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `duration` ENUM('THIRTYMINS', 'ONEHR') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Barber` (
    `userId` VARCHAR(191) NOT NULL,
    `branchId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `isAvailable` BOOLEAN NOT NULL,

    UNIQUE INDEX `Barber_userId_key`(`userId`),
    UNIQUE INDEX `Barber_name_key`(`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AppointmentDate` (
    `date` DATETIME(3) NOT NULL,
    `selectedBarber` VARCHAR(191) NOT NULL,
    `selectedBranch` INTEGER NOT NULL,

    UNIQUE INDEX `AppointmentDate_date_key`(`date`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AppointmentTime` (
    `selectedDuration` INTEGER NOT NULL,
    `selectedDate` DATE NOT NULL,
    `appointmentStart` TIME NOT NULL,
    `appointmentEnd` TIME NOT NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    UNIQUE INDEX `AppointmentTime_selectedDuration_key`(`selectedDuration`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AppointmentFinal` (
    `pickedService` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `pickedBarber` VARCHAR(191) NOT NULL,
    `pickedDate` DATE NOT NULL,
    `pickedBranch` VARCHAR(191) NOT NULL,
    `referenceCode` INTEGER NOT NULL,

    UNIQUE INDEX `AppointmentFinal_pickedService_key`(`pickedService`),
    UNIQUE INDEX `AppointmentFinal_pickedBarber_key`(`pickedBarber`),
    UNIQUE INDEX `AppointmentFinal_pickedDate_key`(`pickedDate`),
    UNIQUE INDEX `AppointmentFinal_pickedBranch_key`(`pickedBranch`),
    UNIQUE INDEX `AppointmentFinal_referenceCode_key`(`referenceCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AccountSaved` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('ADMIN', 'CUSTOMER') NOT NULL DEFAULT 'CUSTOMER',
    `providerAccountId` INTEGER NOT NULL,
    `refresh_token` INTEGER NOT NULL,
    `access_token` INTEGER NOT NULL,
    `expires_at` DATETIME(3) NOT NULL,
    `token_type` VARCHAR(191) NOT NULL,
    `id_token` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Schedule` (
    `datesAvailable` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Schedule_datesAvailable_key`(`datesAvailable`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `Service_branchId_fkey` FOREIGN KEY (`branchId`) REFERENCES `Branch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Barber` ADD CONSTRAINT `Barber_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Barber` ADD CONSTRAINT `Barber_branchId_fkey` FOREIGN KEY (`branchId`) REFERENCES `Branch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AppointmentDate` ADD CONSTRAINT `AppointmentDate_selectedBarber_fkey` FOREIGN KEY (`selectedBarber`) REFERENCES `Barber`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AppointmentDate` ADD CONSTRAINT `AppointmentDate_selectedBranch_fkey` FOREIGN KEY (`selectedBranch`) REFERENCES `Branch`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AppointmentTime` ADD CONSTRAINT `AppointmentTime_selectedDuration_fkey` FOREIGN KEY (`selectedDuration`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AppointmentTime` ADD CONSTRAINT `AppointmentTime_selectedDate_fkey` FOREIGN KEY (`selectedDate`) REFERENCES `AppointmentDate`(`date`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AppointmentFinal` ADD CONSTRAINT `AppointmentFinal_pickedService_fkey` FOREIGN KEY (`pickedService`) REFERENCES `Service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AppointmentFinal` ADD CONSTRAINT `AppointmentFinal_pickedBarber_fkey` FOREIGN KEY (`pickedBarber`) REFERENCES `Barber`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AppointmentFinal` ADD CONSTRAINT `AppointmentFinal_pickedDate_fkey` FOREIGN KEY (`pickedDate`) REFERENCES `AppointmentDate`(`date`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AppointmentFinal` ADD CONSTRAINT `AppointmentFinal_pickedBranch_fkey` FOREIGN KEY (`pickedBranch`) REFERENCES `Branch`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AppointmentFinal` ADD CONSTRAINT `AppointmentFinal_referenceCode_fkey` FOREIGN KEY (`referenceCode`) REFERENCES `AppointmentTime`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
