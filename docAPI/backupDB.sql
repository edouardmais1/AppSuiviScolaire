-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Dim 08 Mai 2022 à 11:16
-- Version du serveur :  5.7.37-0ubuntu0.18.04.1
-- Version de PHP :  7.2.24-0ubuntu0.18.04.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `appscolaire`
--
CREATE DATABASE IF NOT EXISTS `appscolaire` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `appscolaire`;

-- --------------------------------------------------------

--
-- Structure de la table `tb_Actualites`
--

CREATE TABLE `tb_Actualites` (
  `ActualiteID` int(11) NOT NULL,
  `Date` datetime NOT NULL,
  `Titre` varchar(50) NOT NULL,
  `Contenu` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `tb_Actualites`
--

INSERT INTO `tb_Actualites` (`ActualiteID`, `Date`, `Titre`, `Contenu`) VALUES
(1, '2022-03-24 00:00:00', 'Actu 1', '\"Mon nom est Maximus Decimus Meredius, commandant en chef des armées du Nord, général des légions Felix, fidèle serviteur du vrai empereur Marc Aurèle.Père d\'un fils assassiné, époux d\'une femme assassinée, et j\'aurai ma vengeance, dans cette vie ou dans l\'autre.\"'),
(3, '2022-04-10 00:00:00', 'Discours Theoden', 'Voici venue l’heure de tirer l’épée ensemble ! Cruauté réveille-toi ! Qu’importe le courroux, qu’importe la ruine et que l’aube soit rouge ! Pour Eorlingas !'),
(6, '2022-04-10 00:00:00', 'Discours Aragorn ', '\"Tenez vos position, Tenez vos position! Fils du Gondor et du Rohan! Mes frères! Je lis dans vos yeux la même peur qui pourrait saisir mon coeur! Un jour peut venir où le courage des hommes faillira, où nous abandonnerons nos amis et où nous briserons tout lien! Mais ce jour n\'est pas arrivé! Ce sera l\'heure des loups et des boucliers fracassés lorsque l\'âge des hommes s\'effondrera! Mais ce jour n\'est pas arrivé! Aujourd\'hui nous combattrons pour tout ce qui vous est chèr sur cette bonne terre! Je vous ordonne de tenir! Hommes de l\'Ouest!\"'),
(7, '2022-04-10 00:00:00', 'Cavaliers Rohirims', 'Debout, debout, Cavaliers de Théoden!\r\ndes évènements terribles s\'annoncent: feu et massacres!\r\nLa lance sera secouée, le bouclier volera en éclats,\r\nUne journée de l\'épée, une journée rouge, avant que le soleil ne se lève!\r\nAu galop maintenant, au galop! Au Gondor!'),
(24, '2022-04-27 00:00:00', 'Actualité Mois Avril', 'Goooood Morning Vietnam !'),
(25, '2022-04-28 00:00:00', 'Ceci est un test 2 !', 'Ceci est un test 2 !');

-- --------------------------------------------------------

--
-- Structure de la table `tb_Bulletins`
--

CREATE TABLE `tb_Bulletins` (
  `EleveID` int(11) NOT NULL,
  `Bulletin` blob NOT NULL,
  `Date` date NOT NULL,
  `BulletinID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `tb_Calendrier`
--

CREATE TABLE `tb_Calendrier` (
  `EvenementID` int(11) NOT NULL,
  `Titre` varchar(30) NOT NULL,
  `Classe` varchar(2) NOT NULL,
  `Contenu` varchar(300) NOT NULL,
  `Date` date NOT NULL,
  `StartTime` datetime NOT NULL,
  `StopTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `tb_Calendrier`
--

INSERT INTO `tb_Calendrier` (`EvenementID`, `Titre`, `Classe`, `Contenu`, `Date`, `StartTime`, `StopTime`) VALUES
(23, 'Cours de math', '1A', 'Cours de math prévu sur les polynomes', '2022-05-05', '2022-05-05 14:27:00', '2022-05-05 15:27:00');

-- --------------------------------------------------------

--
-- Structure de la table `tb_Classe`
--

CREATE TABLE `tb_Classe` (
  `Mail` varchar(60) NOT NULL,
  `Classe` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `tb_Classe`
--

INSERT INTO `tb_Classe` (`Mail`, `Classe`) VALUES
('g.zebi@prof..be', '1A'),
('g.zebi@prof..be', '5B');

-- --------------------------------------------------------

--
-- Structure de la table `tb_Comportements`
--

CREATE TABLE `tb_Comportements` (
  `ComportementID` int(11) NOT NULL,
  `Mail` varchar(60) NOT NULL,
  `Contenu` varchar(140) NOT NULL,
  `EleveID` int(11) NOT NULL,
  `Date` date NOT NULL,
  `Signature` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `tb_Comportements`
--

INSERT INTO `tb_Comportements` (`ComportementID`, `Mail`, `Contenu`, `EleveID`, `Date`, `Signature`) VALUES
(3, 'Simon.test@gmail.com', 'zevvreq', 2, '2022-04-22', 0);

-- --------------------------------------------------------

--
-- Structure de la table `tb_Eleves`
--

CREATE TABLE `tb_Eleves` (
  `EleveID` int(11) NOT NULL,
  `Nom` varchar(30) NOT NULL,
  `Prenom` varchar(30) NOT NULL,
  `Mail` varchar(60) DEFAULT NULL,
  `Classe` varchar(2) NOT NULL,
  `DateDeNaissance` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Table contenant la liste de tous les élèves de l''école';

--
-- Contenu de la table `tb_Eleves`
--

INSERT INTO `tb_Eleves` (`EleveID`, `Nom`, `Prenom`, `Mail`, `Classe`, `DateDeNaissance`) VALUES
(1, 'Maisin', 'Edouard', 'efsefsef@test.fr', '1A', '2022-03-17'),
(2, 'Momin', 'Maxime', 'lol@lol.lol', '5B', '2022-04-14'),
(16, 'Test', 'test', 'test@gmail.com', '1A', '2022-05-06');

-- --------------------------------------------------------

--
-- Structure de la table `tb_Utilisateurs`
--

CREATE TABLE `tb_Utilisateurs` (
  `Prenom` varchar(30) NOT NULL,
  `Nom` varchar(30) NOT NULL,
  `Mail` varchar(60) NOT NULL,
  `MotDePasse` varchar(60) NOT NULL,
  `Roles` int(11) DEFAULT '1',
  `Token` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='table contenant toutes les finormations sur les utilisateurs';

--
-- Contenu de la table `tb_Utilisateurs`
--

INSERT INTO `tb_Utilisateurs` (`Prenom`, `Nom`, `Mail`, `MotDePasse`, `Roles`, `Token`) VALUES
('Edouard', 'Maisin', 'edouard.test@gmail.com', 'testtest', 1, '3cejefsidq47syi4wtfu6w'),
('Maxime', 'Momin', 'maxime.test@gmail.com', 'testtest', 1, 'vcmtcrnkg1b1fhnyp8hs7'),
('Simon', 'Kinet', 'Simon.test@gmail.com', 'testtest', 1, 'e0cqma1k4qj0pfae8dfkjcg'),
('test', 'test', 'test@gmail.com', 'testtest', 1, 'mfhsiri8xgd7sref7rj9go');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `tb_Actualites`
--
ALTER TABLE `tb_Actualites`
  ADD PRIMARY KEY (`ActualiteID`);

--
-- Index pour la table `tb_Bulletins`
--
ALTER TABLE `tb_Bulletins`
  ADD PRIMARY KEY (`BulletinID`),
  ADD KEY `ElevesID` (`EleveID`);

--
-- Index pour la table `tb_Calendrier`
--
ALTER TABLE `tb_Calendrier`
  ADD PRIMARY KEY (`EvenementID`),
  ADD KEY `Classe` (`Classe`);

--
-- Index pour la table `tb_Classe`
--
ALTER TABLE `tb_Classe`
  ADD PRIMARY KEY (`Classe`),
  ADD KEY `Mail` (`Mail`);

--
-- Index pour la table `tb_Comportements`
--
ALTER TABLE `tb_Comportements`
  ADD PRIMARY KEY (`ComportementID`),
  ADD KEY `MailExist` (`Mail`),
  ADD KEY `EleveIDExist` (`EleveID`);

--
-- Index pour la table `tb_Eleves`
--
ALTER TABLE `tb_Eleves`
  ADD PRIMARY KEY (`EleveID`),
  ADD KEY `Mail` (`Mail`),
  ADD KEY `Classe` (`Classe`);

--
-- Index pour la table `tb_Utilisateurs`
--
ALTER TABLE `tb_Utilisateurs`
  ADD PRIMARY KEY (`Mail`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `tb_Actualites`
--
ALTER TABLE `tb_Actualites`
  MODIFY `ActualiteID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT pour la table `tb_Bulletins`
--
ALTER TABLE `tb_Bulletins`
  MODIFY `BulletinID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `tb_Calendrier`
--
ALTER TABLE `tb_Calendrier`
  MODIFY `EvenementID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT pour la table `tb_Comportements`
--
ALTER TABLE `tb_Comportements`
  MODIFY `ComportementID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT pour la table `tb_Eleves`
--
ALTER TABLE `tb_Eleves`
  MODIFY `EleveID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `tb_Bulletins`
--
ALTER TABLE `tb_Bulletins`
  ADD CONSTRAINT `ElevesID` FOREIGN KEY (`EleveID`) REFERENCES `tb_Eleves` (`EleveID`);

--
-- Contraintes pour la table `tb_Calendrier`
--
ALTER TABLE `tb_Calendrier`
  ADD CONSTRAINT `tb_Calendrier_ibfk_1` FOREIGN KEY (`Classe`) REFERENCES `tb_Classe` (`Classe`);

--
-- Contraintes pour la table `tb_Classe`
--
ALTER TABLE `tb_Classe`
  ADD CONSTRAINT `tb_Classe_ibfk_1` FOREIGN KEY (`Mail`) REFERENCES `tb_Utilisateurs` (`Mail`);

--
-- Contraintes pour la table `tb_Comportements`
--
ALTER TABLE `tb_Comportements`
  ADD CONSTRAINT `EleveIDExist` FOREIGN KEY (`EleveID`) REFERENCES `tb_Eleves` (`EleveID`),
  ADD CONSTRAINT `MailExist` FOREIGN KEY (`Mail`) REFERENCES `tb_Utilisateurs` (`Mail`);

--
-- Contraintes pour la table `tb_Eleves`
--
ALTER TABLE `tb_Eleves`
  ADD CONSTRAINT `tb_Eleves_ibfk_1` FOREIGN KEY (`Classe`) REFERENCES `tb_Classe` (`Classe`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
