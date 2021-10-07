/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : petsvsmachine

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2021-09-24 00:33:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for pet_list
-- ----------------------------
DROP TABLE IF EXISTS `pet_list`;
CREATE TABLE `pet_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `player_id` int(11) NOT NULL,
  `image` varchar(45) NOT NULL,
  `production` int(11) NOT NULL,
  `days` int(11) NOT NULL,
  `type` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL,
  `rarity` varchar(45) NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for player_ip
-- ----------------------------
DROP TABLE IF EXISTS `player_ip`;
CREATE TABLE `player_ip` (
  `player_id` int(11) NOT NULL,
  `ip` varchar(64) NOT NULL,
  `operative_system` varchar(255) DEFAULT NULL,
  `explorer` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`player_id`,`ip`),
  CONSTRAINT `fk_player_ip` FOREIGN KEY (`player_id`) REFERENCES `player_list` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for player_list
-- ----------------------------
DROP TABLE IF EXISTS `player_list`;
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
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Table structure for shop_list
-- ----------------------------
DROP TABLE IF EXISTS `shop_list`;
CREATE TABLE `shop_list` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `days` varchar(255) DEFAULT NULL,
  `usage` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `cost` decimal(10,0) DEFAULT NULL,
  `action` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
