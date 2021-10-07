/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : petsvsmachine

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2021-09-24 15:16:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for pet_list
-- ----------------------------
DROP TABLE IF EXISTS `pet_list`;
CREATE TABLE `pet_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `player_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
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
  `farm_start` datetime DEFAULT NULL,
  `farm_stop` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_pet_player` (`player_id`),
  CONSTRAINT `fk_pet_player` FOREIGN KEY (`player_id`) REFERENCES `player_list` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of pet_list
-- ----------------------------

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
-- Records of player_ip
-- ----------------------------

-- ----------------------------
-- Table structure for player_lands
-- ----------------------------
DROP TABLE IF EXISTS `player_lands`;
CREATE TABLE `player_lands` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `player_id` int(11) DEFAULT NULL,
  `floor` varchar(255) DEFAULT '',
  `rarity` varchar(255) DEFAULT '',
  `pets_max` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_land_player` (`player_id`)
) ENGINE=InnoDB AUTO_INCREMENT=486 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of player_lands
-- ----------------------------
INSERT INTO `player_lands` VALUES ('1', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('2', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('3', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('4', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('5', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('6', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('7', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('8', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('9', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('10', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('11', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('12', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('13', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('14', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('15', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('16', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('17', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('18', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('19', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('20', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('21', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('22', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('23', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('24', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('25', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('26', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('27', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('28', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('29', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('30', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('31', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('32', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('33', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('34', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('35', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('36', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('37', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('38', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('39', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('40', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('41', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('42', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('43', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('44', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('45', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('46', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('47', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('48', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('49', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('50', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('51', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('52', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('53', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('54', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('55', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('56', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('57', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('58', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('59', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('60', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('61', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('62', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('63', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('64', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('65', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('66', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('67', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('68', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('69', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('70', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('71', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('72', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('73', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('74', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('75', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('76', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('77', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('78', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('79', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('80', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('81', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('82', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('83', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('84', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('85', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('86', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('87', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('88', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('89', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('90', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('91', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('92', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('93', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('94', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('95', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('96', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('97', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('98', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('99', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('100', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('101', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('102', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('103', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('104', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('105', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('106', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('107', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('108', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('109', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('110', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('111', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('112', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('113', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('114', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('115', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('116', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('117', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('118', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('119', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('120', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('121', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('122', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('123', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('124', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('125', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('126', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('127', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('128', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('129', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('130', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('131', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('132', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('133', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('134', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('135', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('136', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('137', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('138', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('139', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('140', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('141', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('142', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('143', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('144', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('145', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('146', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('147', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('148', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('149', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('150', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('151', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('152', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('153', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('154', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('155', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('156', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('157', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('158', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('159', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('160', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('161', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('162', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('163', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('164', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('165', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('166', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('167', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('168', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('169', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('170', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('171', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('172', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('173', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('174', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('175', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('176', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('177', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('178', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('179', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('180', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('181', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('182', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('183', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('184', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('185', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('186', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('187', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('188', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('189', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('190', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('191', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('192', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('193', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('194', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('195', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('196', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('197', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('198', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('199', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('200', null, '0', 'center', null, null);
INSERT INTO `player_lands` VALUES ('201', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('202', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('203', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('204', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('205', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('206', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('207', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('208', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('209', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('210', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('211', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('212', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('213', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('214', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('215', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('216', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('217', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('218', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('219', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('220', null, '0', 'center', null, null);
INSERT INTO `player_lands` VALUES ('221', null, '0', 'center', null, null);
INSERT INTO `player_lands` VALUES ('222', null, '0', 'center', null, null);
INSERT INTO `player_lands` VALUES ('223', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('224', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('225', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('226', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('227', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('228', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('229', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('230', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('231', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('232', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('233', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('234', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('235', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('236', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('237', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('238', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('239', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('240', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('241', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('242', null, '0', 'center', null, null);
INSERT INTO `player_lands` VALUES ('243', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('244', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('245', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('246', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('247', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('248', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('249', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('250', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('251', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('252', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('253', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('254', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('255', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('256', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('257', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('258', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('259', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('260', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('261', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('262', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('263', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('264', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('265', null, '1', 'mythic', '30', null);
INSERT INTO `player_lands` VALUES ('266', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('267', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('268', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('269', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('270', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('271', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('272', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('273', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('274', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('275', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('276', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('277', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('278', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('279', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('280', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('281', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('282', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('283', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('284', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('285', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('286', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('287', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('288', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('289', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('290', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('291', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('292', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('293', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('294', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('295', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('296', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('297', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('298', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('299', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('300', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('301', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('302', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('303', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('304', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('305', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('306', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('307', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('308', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('309', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('310', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('311', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('312', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('313', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('314', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('315', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('316', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('317', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('318', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('319', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('320', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('321', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('322', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('323', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('324', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('325', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('326', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('327', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('328', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('329', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('330', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('331', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('332', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('333', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('334', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('335', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('336', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('337', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('338', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('339', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('340', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('341', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('342', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('343', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('344', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('345', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('346', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('347', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('348', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('349', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('350', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('351', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('352', null, '3', 'uncommon', '18', null);
INSERT INTO `player_lands` VALUES ('353', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('354', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('355', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('356', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('357', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('358', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('359', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('360', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('361', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('362', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('363', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('364', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('365', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('366', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('367', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('368', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('369', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('370', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('371', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('372', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('373', null, '2', 'rare', '25', null);
INSERT INTO `player_lands` VALUES ('374', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('375', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('376', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('377', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('378', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('379', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('380', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('381', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('382', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('383', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('384', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('385', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('386', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('387', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('388', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('389', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('390', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('391', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('392', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('393', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('394', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('395', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('396', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('397', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('398', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('399', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('400', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('401', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('402', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('403', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('404', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('405', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('406', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('407', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('408', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('409', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('410', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('411', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('412', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('413', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('414', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('415', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('416', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('417', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('418', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('419', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('420', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('421', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('422', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('423', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('424', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('425', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('426', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('427', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('428', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('429', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('430', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('431', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('432', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('433', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('434', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('435', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('436', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('437', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('438', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('439', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('440', null, '4', 'common', '15', null);
INSERT INTO `player_lands` VALUES ('441', null, '4', 'common', '15', null);

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
  `land_id` int(11) DEFAULT NULL,
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

-- ----------------------------
-- Records of player_list
-- ----------------------------

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

-- ----------------------------
-- Records of shop_list
-- ----------------------------
