-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Час створення: Лют 24 2020 р., 09:33
-- Версія сервера: 8.0.15
-- Версія PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `larashop`
--

-- --------------------------------------------------------

--
-- Структура таблиці `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `thumb` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп даних таблиці `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `thumb`, `image`, `active`, `slug`, `parent_id`) VALUES
(13, 'NewCat', NULL, 'category_thumb/3U326e0iaHcNTZSdSuBnHIxWey31RwJakam5jOF0.png', NULL, 1, 'newcat', NULL),
(14, 'NewCat2', NULL, 'category_thumb/wRvH2RDOjY72CntWLp5IDqMkoKRt5wody8b48JSL.png', NULL, 1, 'newcat2', 13),
(15, 'NewCat3', NULL, 'category_thumb/RYeLjHt8zxeuuY0VKAbs4ewhMqFZramSP6XmV1af.png', NULL, 1, 'newcat3', 13),
(19, 'М\'які меблі', NULL, 'category_thumb/eGUyt2Qv4LkpPG6G0ZLjk9oc01QzC72uB4fATEe6.png', 'category_image/M2Mkwa6bE8pHxdbv6UCEIG5daaXRKM7wzCoSnqAk.png', 0, 'm-yaki-mebli', NULL),
(20, 'dfsdfsdf', NULL, 'category_thumb/6Id0ntmGNFLB3R6UYVR2FeFxwcvP8jyoX6gvcSlf.jpeg', 'category_image/veew9xRFP5kZcJoD3Gt3cZYpPTSktYsQtofDoncR.jpeg', 1, 'dfsdfsdf', 15),
(21, 'ddd', NULL, 'category_thumb/YTcnwmkMk39ARUUahiArJMuRRfU9slxaHb5v9Hkq.jpeg', 'category_image/uHAGlF8Te8TItd5DXOSGtZKOkZ0jU5CEgNkFEE3y.png', 0, '123123', 13),
(22, '3534', NULL, 'category_thumb/BXLOb2MF82Bqjdg70Z8eRZRL56TkMwKKD1kcAyse.jpeg', 'category_image/EtXCQv0mobiRcUxBVKVv2Mt3ZhaMk1AKZnsZ92Lz.jpeg', 1, '3534', NULL),
(23, 'ertert', NULL, 'category_thumb/EyhD8jypBsAQSL59uzweFc7f0XYS0K2fXei98c7Y.jpeg', 'category_image/Y0cIQBtBWJU2ccLTfnCHb9o8u4BWT04ZGAUu3EBs.jpeg', 1, 'ertert', NULL),
(24, 'Меблі', NULL, 'category_thumb/OiRSVGppn8HLttOc7ECwmGGzneOA83XoC0pJssLE.jpeg', 'category_image/4WxY08d5rFRSNmQoU3BCyszNdaCEHVdHEc2BFTVv.jpeg', 0, 'dfgssdf', NULL),
(25, 'ddf', NULL, 'category_thumb/ISH8MR5NZpZWro3asaoBmKlSJIRBXSmOAvhNPO1S.jpeg', 'category_image/dSNJ7kmUh1N4ZwlSlbJo2amq9uRFrtaZ7FOE48Hx.jpeg', 0, 'ddf', 13),
(26, 'www', NULL, 'category_thumb/TwElP87lV65fIGIclmzsSRINd0FI3CQAKSLajr6l.png', 'category_image/G9LID5j01TFlibIZKedNvqiZARKqKFPmFMHRop4G.png', 1, 'www', NULL),
(27, 'ssad', NULL, 'category_thumb/O4F9ItFBfSQMN4Ka8H919QzvOkTXxDnUFvILqtav.jpeg', 'category_image/j3qJjqRUdQ1GQZvfLmfJvQ1kx321eOpJ3bhWTsjZ.jpeg', 1, 'ssad', 14),
(28, 'rtytyry', NULL, 'category_thumb/WavY60lmKVM0I56EUrQaqjiZDrBTZNU7Z5QPCY27.jpeg', 'category_image/Lifnmj6mIP9oglF7Kx9koTE5EBLvZJTRpMqDMFKN.jpeg', 1, 'rtytyry', NULL);

-- --------------------------------------------------------

--
-- Структура таблиці `currencies`
--

CREATE TABLE `currencies` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ccy` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `exchange` decimal(9,7) DEFAULT '1.0000000',
  `main` tinyint(1) NOT NULL DEFAULT '0',
  `published` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп даних таблиці `currencies`
--

INSERT INTO `currencies` (`id`, `name`, `ccy`, `desc`, `exchange`, `main`, `published`) VALUES
(1, 'Валюта', 'RUR', 'p.', '1.0000000', 1, 1),
(3, 'Валюта 2', 'RUS', 'ps', '1.0000000', 0, 1),
(4, 't', 'Rt', 't', '1.0000000', 0, 1),
(5, 'd', 's', 'd', '1.0000000', 0, 1),
(6, 'к', 'к', 'к', '1.0000000', 0, 1);

-- --------------------------------------------------------

--
-- Структура таблиці `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп даних таблиці `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2020_01_03_141749_drop_phone_from_users', 1),
(4, '2020_01_03_142416_create_table_roles', 1),
(5, '2020_01_04_114114_drop_role_from_roles_table', 1),
(6, '2020_01_04_114250_add_role_to_roles_table', 1),
(7, '2020_01_04_114721_create_user_role_table', 1),
(8, '2020_01_18_081831_create_categories_table', 2),
(9, '2020_01_23_195530_add_slug_to_categories_table', 3),
(10, '2020_01_23_212224_add_fk_to_categories_table', 4),
(11, '2020_01_23_213829_add_parent_fk_to_categories_table', 5),
(12, '2020_02_01_164730_change_categories_table', 6),
(13, '2020_02_07_100955_create_table_currency', 7);

-- --------------------------------------------------------

--
-- Структура таблиці `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблиці `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп даних таблиці `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Структура таблиці `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп даних таблиці `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'pasha', 'a@gmail.com', NULL, '$2y$10$qzZaUwmqqMmrhIQzZB0WaulZGG6EmeCXMuXOd7LAJZghbP0xtHxhm', NULL, NULL, NULL),
(2, '0668526407', NULL, NULL, '$2y$10$ceOFoAmWTF3FuenlyiwQ1ufETFGc19vhqdD6KwyoakxSbrJr28E.K', NULL, NULL, NULL),
(3, 'pash', 'a@b.com', NULL, '$2y$10$oWue1lBboaP4xXuaJz07BugCjIv3gpHCTW4DdV36KN0DM/PGzm8Zm', NULL, '2020-01-04 15:12:32', '2020-01-04 15:12:32');

-- --------------------------------------------------------

--
-- Структура таблиці `user_role`
--

CREATE TABLE `user_role` (
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `role_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп даних таблиці `user_role`
--

INSERT INTO `user_role` (`user_id`, `role_id`) VALUES
(1, 1),
(2, 2);

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_name_unique` (`name`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`),
  ADD KEY `categories_parent_id_foreign` (`parent_id`);

--
-- Індекси таблиці `currencies`
--
ALTER TABLE `currencies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `currencies_name_unique` (`name`),
  ADD UNIQUE KEY `currencies_ccy_unique` (`ccy`),
  ADD UNIQUE KEY `currencies_desc_unique` (`desc`);

--
-- Індекси таблиці `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Індекси таблиці `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Індекси таблиці `user_role`
--
ALTER TABLE `user_role`
  ADD KEY `user_role_user_id_foreign` (`user_id`),
  ADD KEY `user_role_role_id_foreign` (`role_id`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT для таблиці `currencies`
--
ALTER TABLE `currencies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблиці `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблиці `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблиці `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Обмеження зовнішнього ключа збережених таблиць
--

--
-- Обмеження зовнішнього ключа таблиці `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `categories` (`id`);

--
-- Обмеження зовнішнього ключа таблиці `user_role`
--
ALTER TABLE `user_role`
  ADD CONSTRAINT `user_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_role_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
