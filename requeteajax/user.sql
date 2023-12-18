-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 18 déc. 2023 à 09:44
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `tutodevcomputer`
--

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `computer` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `computer`) VALUES
(1, '[danvent@gmail.com]', '[Toshiba]'),
(2, '[pat75@hotmail.fr]', '[HP]'),
(3, 'johndoe@gmail.com', 'Asus'),
(4, 'linda56@gmail.com', 'Apple'),
(5, 'bernard78@gmail.com', 'Lenovo'),
(6, 'samri@aol.com', 'MacBook'),
(7, 'jason@wanadoo.fr', 'Acer'),
(8, 'malika69@orange.fr', 'MSI'),
(9, 'momo785@ionos.fr', 'DELL'),
(10, 'jeanpierre65@hostinger.com', 'Medion'),
(11, 'cindy75@gmail.com', 'Compaq'),
(12, 'gerard236@aol.com', 'Asus'),
(13, 'anthony452@gmail.com', 'Asus'),
(14, 'simonParis@gmail.com', 'Toshiba'),
(15, 'papy324@gmail.com', 'Medion'),
(16, 'cindyLyon@orange.com', 'MSI'),
(17, 'eric74@gmail.com', 'Asus'),
(18, 'sophie42@gmail.com', 'Medion'),
(19, 'dady894@aol.com', 'DELL'),
(20, 'gege@wanadoo.com', 'HP'),
(21, 'antho_78@gmail.com', 'MSI'),
(22, 'titi_masto@gmail.com', 'Medion');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
