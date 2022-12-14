-- CreateTable
CREATE TABLE `questions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `txt_question` VARCHAR(191) NOT NULL,
    `penality_question` VARCHAR(191) NOT NULL,
    `url_image` VARCHAR(191) NOT NULL DEFAULT 'question.jpg',
    `category` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `challengues` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `txt_challengue` VARCHAR(191) NOT NULL,
    `penality_challengue` VARCHAR(191) NOT NULL,
    `url_image` VARCHAR(191) NOT NULL DEFAULT 'challengue.jpg',
    `category` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_pro` VARCHAR(191) NOT NULL,
    `stock_pro` INTEGER NOT NULL,
    `price_pro` DECIMAL(10, 2) NULL,
    `new_pro` BOOLEAN NOT NULL DEFAULT false,
    `expire_date` DATE NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `questions` ADD CONSTRAINT `questions_category_fkey` FOREIGN KEY (`category`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `challengues` ADD CONSTRAINT `challengues_category_fkey` FOREIGN KEY (`category`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
