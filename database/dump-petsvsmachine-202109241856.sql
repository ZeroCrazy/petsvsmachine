-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: petsvsmachine
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `land_list`
--

DROP TABLE IF EXISTS `land_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `land_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rarity_id` int(11) DEFAULT NULL,
  `player_id` int(11) DEFAULT NULL,
  `floor` varchar(45) DEFAULT NULL,
  `pets_max` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_lands_rarity_idx` (`rarity_id`),
  CONSTRAINT `fk_lands_rarity` FOREIGN KEY (`rarity_id`) REFERENCES `land_rarity` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=442 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `land_rarity`
--

DROP TABLE IF EXISTS `land_rarity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `land_rarity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pet_list`
--

DROP TABLE IF EXISTS `pet_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pet_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `player_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `rarity_id` int(11) NOT NULL,
  `image` varchar(45) NOT NULL,
  `production` int(11) NOT NULL,
  `days` int(11) NOT NULL,
  `type` varchar(45) NOT NULL,
  `hp` varchar(45) NOT NULL,
  `attack` varchar(45) NOT NULL,
  `armor` varchar(45) NOT NULL,
  `speed` varchar(45) NOT NULL,
  `is_shop` tinyint(4) DEFAULT 0,
  `is_open` tinyint(4) NOT NULL DEFAULT 0,
  `open_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_pet_player` (`player_id`),
  CONSTRAINT `fk_pet_player` FOREIGN KEY (`player_id`) REFERENCES `player_list` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pet_rarity`
--

DROP TABLE IF EXISTS `pet_rarity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pet_rarity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `pet_role`
--

DROP TABLE IF EXISTS `pet_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pet_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `player_ip`
--

DROP TABLE IF EXISTS `player_ip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `player_ip` (
  `player_id` int(11) NOT NULL,
  `ip` varchar(64) NOT NULL,
  `operative_system` varchar(255) DEFAULT NULL,
  `explorer` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`player_id`,`ip`),
  CONSTRAINT `fk_player_ip` FOREIGN KEY (`player_id`) REFERENCES `player_list` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `player_list`
--

DROP TABLE IF EXISTS `player_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `player_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `password` varchar(140) DEFAULT NULL,
  `metamask_address` varchar(64) DEFAULT NULL,
  `group` varchar(45) DEFAULT NULL,
  `coins` varchar(255) DEFAULT '0',
  `role` varchar(45) DEFAULT '1',
  `use_house` varchar(255) DEFAULT '0',
  `use_food` varchar(255) DEFAULT '0',
  `use_cress` varchar(255) DEFAULT '0',
  `login_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `wallet_metamask_UNIQUE` (`metamask_address`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `player_os`
--

DROP TABLE IF EXISTS `player_os`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `player_os` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `player_id` int(11) DEFAULT NULL,
  `so` varchar(45) DEFAULT NULL,
  `browser` varchar(45) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `player_resources`
--

DROP TABLE IF EXISTS `player_resources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `player_resources` (
  `player_id` int(11) NOT NULL,
  `coins` int(11) NOT NULL DEFAULT 0,
  `house` int(11) NOT NULL DEFAULT 0,
  `food` int(11) NOT NULL DEFAULT 0,
  `cress` int(11) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`player_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `shop_list`
--

DROP TABLE IF EXISTS `shop_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shop_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `days` int(11) DEFAULT NULL,
  `utilization` int(11) DEFAULT NULL,
  `description` text NOT NULL,
  `cost` decimal(10,0) NOT NULL,
  `action` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping routines for database 'petsvsmachine'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-24 18:56:40
