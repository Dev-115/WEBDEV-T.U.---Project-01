-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,

    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,
    `role` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    UNIQUE INDEX `VerificationToken_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Branch` (
    `branchID` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`branchID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `serviceID` INTEGER NOT NULL AUTO_INCREMENT,
    `FK_categoryId` INTEGER NOT NULL,
    `FK_branchId` INTEGER NOT NULL,
    `serviceName` VARCHAR(191) NOT NULL,
    `servicePrice` INTEGER NOT NULL,
    `serviceDuration` INTEGER NOT NULL,

    PRIMARY KEY (`serviceID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ServiceCategory` (
    `categoryID` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryName` VARCHAR(191) NOT NULL,
    `FK_branchId` INTEGER NOT NULL,

    PRIMARY KEY (`categoryID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BarberList` (
    `barberID` INTEGER NOT NULL AUTO_INCREMENT,
    `FK_branchId` INTEGER NOT NULL,
    `barberName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`barberID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DayOff` (
    `workdayID` INTEGER NOT NULL AUTO_INCREMENT,
    `day` DATE NOT NULL,
    `isAvailable` BOOLEAN NOT NULL,
    `FK_barberListId` INTEGER NOT NULL,

    PRIMARY KEY (`workdayID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Schedules` (
    `scheduleID` INTEGER NOT NULL AUTO_INCREMENT,
    `FK_barberId` INTEGER NOT NULL,
    `time` TIME NOT NULL,
    `AmPm` BOOLEAN NOT NULL,

    PRIMARY KEY (`scheduleID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DateAppointment` (
    `dateID` INTEGER NOT NULL AUTO_INCREMENT,
    `FK_barberId` INTEGER NOT NULL,
    `date` DATE NOT NULL,
    `isAvailable` BOOLEAN NOT NULL,

    PRIMARY KEY (`dateID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TimeAppointment` (
    `timeID` INTEGER NOT NULL AUTO_INCREMENT,
    `FK_dateId` INTEGER NOT NULL,
    `time` TIME NOT NULL,
    `isAvailable` BOOLEAN NOT NULL,

    PRIMARY KEY (`timeID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FinalAppointment` (
    `appointmentID` INTEGER NOT NULL AUTO_INCREMENT,
    `FK_branchId` INTEGER NOT NULL,
    `FK_serviceId` INTEGER NOT NULL,
    `FK_barberListId` INTEGER NOT NULL,
    `FK_dateId` INTEGER NOT NULL,
    `FK_timeId` INTEGER NOT NULL,

    PRIMARY KEY (`appointmentID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `Service_FK_categoryId_fkey` FOREIGN KEY (`FK_categoryId`) REFERENCES `ServiceCategory`(`categoryID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `Service_FK_branchId_fkey` FOREIGN KEY (`FK_branchId`) REFERENCES `Branch`(`branchID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ServiceCategory` ADD CONSTRAINT `ServiceCategory_FK_branchId_fkey` FOREIGN KEY (`FK_branchId`) REFERENCES `Branch`(`branchID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BarberList` ADD CONSTRAINT `BarberList_FK_branchId_fkey` FOREIGN KEY (`FK_branchId`) REFERENCES `Branch`(`branchID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DayOff` ADD CONSTRAINT `DayOff_FK_barberListId_fkey` FOREIGN KEY (`FK_barberListId`) REFERENCES `BarberList`(`barberID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Schedules` ADD CONSTRAINT `Schedules_FK_barberId_fkey` FOREIGN KEY (`FK_barberId`) REFERENCES `BarberList`(`barberID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DateAppointment` ADD CONSTRAINT `DateAppointment_FK_barberId_fkey` FOREIGN KEY (`FK_barberId`) REFERENCES `BarberList`(`barberID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TimeAppointment` ADD CONSTRAINT `TimeAppointment_FK_dateId_fkey` FOREIGN KEY (`FK_dateId`) REFERENCES `DateAppointment`(`dateID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FinalAppointment` ADD CONSTRAINT `FinalAppointment_FK_branchId_fkey` FOREIGN KEY (`FK_branchId`) REFERENCES `Branch`(`branchID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FinalAppointment` ADD CONSTRAINT `FinalAppointment_FK_serviceId_fkey` FOREIGN KEY (`FK_serviceId`) REFERENCES `Service`(`serviceID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FinalAppointment` ADD CONSTRAINT `FinalAppointment_FK_barberListId_fkey` FOREIGN KEY (`FK_barberListId`) REFERENCES `BarberList`(`barberID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FinalAppointment` ADD CONSTRAINT `FinalAppointment_FK_dateId_fkey` FOREIGN KEY (`FK_dateId`) REFERENCES `DateAppointment`(`dateID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FinalAppointment` ADD CONSTRAINT `FinalAppointment_FK_timeId_fkey` FOREIGN KEY (`FK_timeId`) REFERENCES `TimeAppointment`(`timeID`) ON DELETE RESTRICT ON UPDATE CASCADE;
