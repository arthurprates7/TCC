-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 28/03/2021 às 17:43
-- Versão do servidor: 10.4.17-MariaDB
-- Versão do PHP: 7.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `economia`
--
CREATE DATABASE IF NOT EXISTS `economia` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `economia`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `controle`
--

CREATE TABLE `controle` (
  `id` int(11) NOT NULL,
  `user` bigint(20) UNSIGNED NOT NULL,
  `valor` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `controle`
--

INSERT INTO `controle` (`id`, `user`, `valor`, `created_at`) VALUES
(1, 1, 9, '2021-03-28 14:37:56'),
(2, 10, 10, '2021-03-28 14:38:02'),
(3, 1, 100, '2021-03-28 14:38:09');

-- --------------------------------------------------------

--
-- Estrutura para tabela `infos`
--

CREATE TABLE `infos` (
  `id` int(11) NOT NULL,
  `user` bigint(20) UNSIGNED NOT NULL,
  `rua` tinyint(1) NOT NULL COMMENT 'true ou false',
  `caixa` decimal(9,2) NOT NULL COMMENT 'em porcentagem',
  `vazamento` tinyint(1) NOT NULL COMMENT 'true ou false',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expo_token` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `expo_token`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Administrador', 'administrador@aptechs.com.br', NULL, '$2y$10$EPvSkiyFPKmOop6WsBfoc.2n8/bGCrUrc/d66owwI1ARtnhxOiKwe', '', NULL, '2020-06-14 00:43:18', '2020-06-14 00:43:18'),
(2, 'Arthur', 'arthur.prates7@gmail.com', NULL, '$2y$10$b3tobMgVpsaBtJt3tRlWEOCmmjtx0hUIuobLPuYyHcAYaO8cxrKAm', 'dasdsadasdasd', NULL, NULL, NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `controle`
--
ALTER TABLE `controle`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `infos`
--
ALTER TABLE `infos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_info` (`user`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `controle`
--
ALTER TABLE `controle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `infos`
--
ALTER TABLE `infos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `infos`
--
ALTER TABLE `infos`
  ADD CONSTRAINT `fk_user_info` FOREIGN KEY (`user`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
