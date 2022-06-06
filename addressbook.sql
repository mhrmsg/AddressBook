/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50720
 Source Host           : localhost:3306
 Source Schema         : addressbook

 Target Server Type    : MySQL
 Target Server Version : 50720
 File Encoding         : 65001

 Date: 26/05/2022 12:13:13
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for addressbook
-- ----------------------------
DROP TABLE IF EXISTS `addressbook`;
CREATE TABLE `addressbook`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `company` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `phoneNumber` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `email` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `backup` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `birthDay` date NULL DEFAULT NULL,
  `phoneMusic` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `avatar_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `premission` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 84 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of addressbook
-- ----------------------------
INSERT INTO `addressbook` VALUES (1, '乐和', 'fXQVN', '', '908155169@qq.com', '无备注', '天长大街1', '2018-04-01', 'wCsyN', 'http://lorempixel.com/300/400/', 'user:1');
INSERT INTO `addressbook` VALUES (2, '侯健', '3WMbP', '', 'mhrmsg@gmail.com', '无备注', '天长大街2', '2018-04-01', 'LEeaq', 'http://lorempixel.com/300/400/', 'user:2');
INSERT INTO `addressbook` VALUES (3, '郑天寿', 'ChwN0', '', 'mhrmsg@gmail.com', '无备注', '天长大街3', '2018-04-02', 'CG5iR', 'http://lorempixel.com/300/400/', 'user:3');
INSERT INTO `addressbook` VALUES (4, '丁得孙', 'HGTR8', '', 'mhr@github.com', '无备注', '天长大街4', '2018-04-01', 'TWh3r', 'http://lorempixel.com/300/400/', 'user:4');
INSERT INTO `addressbook` VALUES (5, '彭玘', '0FVgZ', '', '908155169@qq.com', '无备注', '天长大街5', '2018-04-03', '3nQf5', 'http://lorempixel.com/300/400/', 'user:5');
INSERT INTO `addressbook` VALUES (6, '宋清', 'P4O23', '', 'mhrmsg@gmail.com', '无备注', '天长大街6', '2018-04-01', 'rA9tU', 'http://lorempixel.com/300/400/', 'user:6');
INSERT INTO `addressbook` VALUES (7, '邹渊', 'KR1Oc', '', '908155169@qq.com', '无备注', '天长大街7', '2018-04-01', '0CcrG', 'http://lorempixel.com/300/400/', 'user:7');
INSERT INTO `addressbook` VALUES (8, '吕方', 'PhtNV', '', 'mhr@github.com', '无备注', '天长大街8', '2018-04-03', 'ufsXG', 'http://lorempixel.com/300/400/', 'user:8');
INSERT INTO `addressbook` VALUES (9, '解珍', '9zgSB', '', 'mhrmsg@gmail.com', '无备注', '天长大街9', '2018-04-03', 'tFhBl', 'http://lorempixel.com/300/400/', 'user:9');
INSERT INTO `addressbook` VALUES (10, ' 凌振', 'jNB9j', ' 12345', 'mhrmsg@gmail.com', ' 无备注', ' 天长大街10', '2018-04-02', 'sUWYz', 'http://lorempixel.com/300/400/', 'user:10');
INSERT INTO `addressbook` VALUES (11, '裴宣', 'OqqZG', '', 'mhrmsg@gmail.com', '无备注', '天长大街11', '2018-04-01', 'rPBTX', 'http://lorempixel.com/300/400/', 'user:11');
INSERT INTO `addressbook` VALUES (12, '刘唐', 'gIblw', '', 'mhrmsg@gmail.com', '无备注', '天长大街12', '2018-04-03', '2i6HP', 'http://lorempixel.com/300/400/', 'user:12');
INSERT INTO `addressbook` VALUES (13, '朱仝', '48lo1', '', 'yun@cloud.com', '无备注', '天长大街13', '2018-04-02', 'PiG66', 'http://lorempixel.com/300/400/', 'user:13');
INSERT INTO `addressbook` VALUES (14, '宋清', 'hZOPd', '', 'mhr@qq.com', '无备注', '天长大街14', '2018-04-03', 'nuf8k', 'http://lorempixel.com/300/400/', 'user:14');
INSERT INTO `addressbook` VALUES (15, '皇甫端', 'iQsnY', '', 'mhr@qq.com', '无备注', '天长大街15', '2018-04-02', 'VnfuE', 'http://lorempixel.com/300/400/', 'user:15');
INSERT INTO `addressbook` VALUES (16, '穆春', 'APpt7', '', 'mhrmsg@gmail.com', '无备注', '天长大街16', '2018-04-01', 'raFEd', 'http://lorempixel.com/300/400/', 'user:16');
INSERT INTO `addressbook` VALUES (17, '李逵', 'ap3hV', '', 'mhr@qq.com', '无备注', '天长大街17', '2018-04-02', 'RW0Gd', 'http://lorempixel.com/300/400/', 'user:17');
INSERT INTO `addressbook` VALUES (18, '朱仝', 'jWlN2', '', 'yun@cloud.com', '无备注', '天长大街18', '2018-04-03', 'HOpfY', 'http://lorempixel.com/300/400/', 'user:18');
INSERT INTO `addressbook` VALUES (19, '戴宗', 'nUDNM', '', 'my@163.com', '无备注', '天长大街19', '2018-04-02', 'hkDyM', 'http://lorempixel.com/300/400/', 'user:19');
INSERT INTO `addressbook` VALUES (20, '张青', 'oUmRY', '', 'my@163.com', '无备注', '天长大街20', '2018-04-03', 'OkT01', 'http://lorempixel.com/300/400/', 'user:20');
INSERT INTO `addressbook` VALUES (21, '石秀', 'WpZSZ', '', 'mhr@github.com', '无备注', '天长大街21', '2018-04-02', 'P8bQk', 'http://lorempixel.com/300/400/', 'user:21');
INSERT INTO `addressbook` VALUES (22, '孔亮', 'DAotc', '', 'my@163.com', '无备注', '天长大街22', '2018-04-02', '5oLco', 'http://lorempixel.com/300/400/', 'user:22');
INSERT INTO `addressbook` VALUES (23, '阮小七', 'AOdTQ', '', '908155169@qq.com', '无备注', '天长大街23', '2018-04-02', '6w6h9', 'http://lorempixel.com/300/400/', 'user:23');
INSERT INTO `addressbook` VALUES (24, '裴宣', 'EyJan', '', 'mhr@github.com', '无备注', '天长大街24', '2018-04-02', 'w18hi', 'http://lorempixel.com/300/400/', 'user:24');
INSERT INTO `addressbook` VALUES (25, '段景住', 'x4fvF', '', 'mhr@qq.com', '无备注', '天长大街25', '2018-04-01', '0qTh4', 'http://lorempixel.com/300/400/', 'user:25');
INSERT INTO `addressbook` VALUES (26, '阮小二', '0iGhk', '', 'mhrmsg@gmail.com', '无备注', '天长大街26', '2018-04-02', '9kY7R', 'http://lorempixel.com/300/400/', 'user:26');
INSERT INTO `addressbook` VALUES (27, '张清', 'iVsHM', '', 'yun@cloud.com', '无备注', '天长大街27', '2018-04-01', 'Ps442', 'http://lorempixel.com/300/400/', 'user:27');
INSERT INTO `addressbook` VALUES (28, '项充', 'JqZzA', '', 'my@163.com', '无备注', '天长大街28', '2018-04-02', 'TmkLT', 'http://lorempixel.com/300/400/', 'user:28');
INSERT INTO `addressbook` VALUES (29, '李云', 'YXZRg', '', 'yun@cloud.com', '无备注', '天长大街29', '2018-04-01', '5pKFW', 'http://lorempixel.com/300/400/', 'user:29');
INSERT INTO `addressbook` VALUES (30, '花荣', 'fXoFf', '', 'mhr@qq.com', '无备注', '天长大街30', '2018-04-03', 'VAqL5', 'http://lorempixel.com/300/400/', 'user:30');
INSERT INTO `addressbook` VALUES (31, '段景住', 'qyAoY', '', '908155169@qq.com', '无备注', '天长大街31', '2018-04-01', 'rA7xe', 'http://lorempixel.com/300/400/', 'user:31');
INSERT INTO `addressbook` VALUES (32, '安道全', 'l3sPr', '', 'my@163.com', '无备注', '天长大街32', '2018-04-03', 'KWit9', 'http://lorempixel.com/300/400/', 'user:32');
INSERT INTO `addressbook` VALUES (33, '索超', 'wnyp5', '', 'mhrmsg@gmail.com', '无备注', '天长大街33', '2018-04-02', 'I3zkQ', 'http://lorempixel.com/300/400/', 'user:33');
INSERT INTO `addressbook` VALUES (34, '李逵', '4yETV', '', 'mhrmsg@gmail.com', '无备注', '天长大街34', '2018-04-03', '6u4yN', 'http://lorempixel.com/300/400/', 'user:34');
INSERT INTO `addressbook` VALUES (35, '杜迁', '6xvpA', '', 'mhr@github.com', '无备注', '天长大街35', '2018-04-02', 'Aa9Fv', 'http://lorempixel.com/300/400/', 'user:35');
INSERT INTO `addressbook` VALUES (36, '李应', 'o4ifh', '', 'yun@cloud.com', '无备注', '天长大街36', '2018-04-02', 'DmCIg', 'http://lorempixel.com/300/400/', 'user:36');
INSERT INTO `addressbook` VALUES (37, '张清', 'VnVTT', '', 'yun@cloud.com', '无备注', '天长大街37', '2018-04-03', 'j6Cgk', 'http://lorempixel.com/300/400/', 'user:37');
INSERT INTO `addressbook` VALUES (38, '汤隆', 'h4AT8', '', 'mhr@qq.com', '无备注', '天长大街38', '2018-04-01', 'HALNc', 'http://lorempixel.com/300/400/', 'user:38');
INSERT INTO `addressbook` VALUES (39, '穆春', 'elYS2', '', 'mhr@github.com', '无备注', '天长大街39', '2018-04-03', '0jDtQ', 'http://lorempixel.com/300/400/', 'user:39');
INSERT INTO `addressbook` VALUES (40, '花荣', 'JK9m2', '', 'yun@cloud.com', '无备注', '天长大街40', '2018-04-01', 'XqRt6', 'http://lorempixel.com/300/400/', 'user:40');
INSERT INTO `addressbook` VALUES (41, '穆春', 'TRbp2', '', '908155169@qq.com', '无备注', '天长大街41', '2018-04-02', 'FFNPX', 'http://lorempixel.com/300/400/', 'user:41');
INSERT INTO `addressbook` VALUES (42, '金大坚', '2qWrP', '', 'mhr@qq.com', '无备注', '天长大街42', '2018-04-02', 'lPCSk', 'http://lorempixel.com/300/400/', 'user:42');
INSERT INTO `addressbook` VALUES (43, '凌振', 'LgFF4', '', 'mhr@github.com', '无备注', '天长大街43', '2018-04-02', 'OHtSU', 'http://lorempixel.com/300/400/', 'user:43');
INSERT INTO `addressbook` VALUES (44, '吕方', 'SYLRi', '', 'yun@cloud.com', '无备注', '天长大街44', '2018-04-01', 'xXO0b', 'http://lorempixel.com/300/400/', 'user:44');
INSERT INTO `addressbook` VALUES (45, '孔亮', 'mryEk', '', 'yun@cloud.com', '无备注', '天长大街45', '2018-04-01', 'x79Zs', 'http://lorempixel.com/300/400/', 'user:45');
INSERT INTO `addressbook` VALUES (46, '陶宗旺', 'Oxc9a', '', 'yun@cloud.com', '无备注', '天长大街46', '2018-04-03', 'cxw4U', 'http://lorempixel.com/300/400/', 'user:46');
INSERT INTO `addressbook` VALUES (47, '杨志', 'PHaVO', '', '908155169@qq.com', '无备注', '天长大街47', '2018-04-01', '16kDE', 'http://lorempixel.com/300/400/', 'user:47');
INSERT INTO `addressbook` VALUES (48, '侯健', '4QEPM', '', 'yun@cloud.com', '无备注', '天长大街48', '2018-04-01', '3m9g8', 'http://lorempixel.com/300/400/', 'user:48');
INSERT INTO `addressbook` VALUES (49, '王英', 'YkLzf', '', 'mhrmsg@gmail.com', '无备注', '天长大街49', '2018-04-02', 'PAHSa', 'http://lorempixel.com/300/400/', 'user:49');
INSERT INTO `addressbook` VALUES (50, '宋万', '89rU8', '', 'my@163.com', '无备注', '天长大街50', '2018-04-01', 'nRquX', 'http://lorempixel.com/300/400/', 'user:50');
INSERT INTO `addressbook` VALUES (51, '朱贵', 'TMUoX', '', 'mhr@qq.com', '无备注', '天长大街51', '2018-04-03', 'QY83E', 'http://lorempixel.com/300/400/', 'user:51');
INSERT INTO `addressbook` VALUES (52, '解宝', 'n4viB', '', 'my@163.com', '无备注', '天长大街52', '2018-04-02', 'pR8Mx', 'http://lorempixel.com/300/400/', 'user:52');
INSERT INTO `addressbook` VALUES (53, '黄信', 'x3May', '', 'mhr@github.com', '无备注', '天长大街53', '2018-04-02', 'Vypf5', 'http://lorempixel.com/300/400/', 'user:53');
INSERT INTO `addressbook` VALUES (54, '林冲', 'BIBY4', '', 'mhrmsg@gmail.com', '无备注', '天长大街54', '2018-04-03', 'InddS', 'http://lorempixel.com/300/400/', 'user:54');
INSERT INTO `addressbook` VALUES (55, '薛永', 'fYCnq', '', 'my@163.com', '无备注', '天长大街55', '2018-04-03', 'JOh6M', 'http://lorempixel.com/300/400/', 'user:55');
INSERT INTO `addressbook` VALUES (56, '武松', 'aAypo', '', 'mhr@github.com', '无备注', '天长大街56', '2018-04-01', 'jQTm2', 'http://lorempixel.com/300/400/', 'user:56');
INSERT INTO `addressbook` VALUES (57, '宣赞', 'eifF0', '', 'mhrmsg@gmail.com', '无备注', '天长大街57', '2018-04-01', 'irPUM', 'http://lorempixel.com/300/400/', 'user:57');
INSERT INTO `addressbook` VALUES (58, '李逵', 'OFlrh', '', 'mhr@qq.com', '无备注', '天长大街58', '2018-04-02', 'X4nJ5', 'http://lorempixel.com/300/400/', 'user:58');
INSERT INTO `addressbook` VALUES (59, '柴进', 'QptBl', '', 'my@163.com', '无备注', '天长大街59', '2018-04-02', 'y8N9c', 'http://lorempixel.com/300/400/', 'user:59');
INSERT INTO `addressbook` VALUES (60, '李逵', 'BUKfm', '', 'my@163.com', '无备注', '天长大街60', '2018-04-02', 'Np5TI', 'http://lorempixel.com/300/400/', 'user:60');
INSERT INTO `addressbook` VALUES (61, '杜迁', 'bEcAp', '', 'my@163.com', '无备注', '天长大街61', '2018-04-03', 'zhEC9', 'http://lorempixel.com/300/400/', 'user:61');
INSERT INTO `addressbook` VALUES (62, '项充', 'pOz0i', '', 'mhrmsg@gmail.com', '无备注', '天长大街62', '2018-04-02', 'i1T6f', 'http://lorempixel.com/300/400/', 'user:62');
INSERT INTO `addressbook` VALUES (63, '索超', 'ZqGvE', '', 'my@163.com', '无备注', '天长大街63', '2018-04-01', 'IxH1h', 'http://lorempixel.com/300/400/', 'user:63');
INSERT INTO `addressbook` VALUES (64, '项充', 'qqJMO', '', 'mhrmsg@gmail.com', '无备注', '天长大街64', '2018-04-02', 'nWayC', 'http://lorempixel.com/300/400/', 'user:64');
INSERT INTO `addressbook` VALUES (65, '董平', 'FhUvh', '', 'mhr@github.com', '无备注', '天长大街65', '2018-04-03', 'X039U', 'http://lorempixel.com/300/400/', 'user:65');
INSERT INTO `addressbook` VALUES (66, '林冲', 'UrJxg', '', 'mhr@qq.com', '无备注', '天长大街66', '2018-04-02', 'RH353', 'http://lorempixel.com/300/400/', 'user:66');
INSERT INTO `addressbook` VALUES (67, '魏定国', 'kFZju', '', 'mhr@qq.com', '无备注', '天长大街67', '2018-04-02', 'cFkLY', 'http://lorempixel.com/300/400/', 'user:67');
INSERT INTO `addressbook` VALUES (68, '汤隆', 'DIGTI', '', 'mhr@github.com', '无备注', '天长大街68', '2018-04-03', '0qTAb', 'http://lorempixel.com/300/400/', 'user:68');
INSERT INTO `addressbook` VALUES (69, '董平', 'HIZUU', '', 'mhr@qq.com', '无备注', '天长大街69', '2018-04-02', 'RreAp', 'http://lorempixel.com/300/400/', 'user:69');
INSERT INTO `addressbook` VALUES (70, '穆春', 'OCKRF', '12334', 'mhr@qq.com', '无备注', '天长大街70', '2018-04-02', 'Pkvfz', 'http://lorempixel.com/300/400/', 'user:70');
INSERT INTO `addressbook` VALUES (81, 'asaas', 'saas', 'assa', 'assa', 'saassa', 'asasas', '2022-05-26', 'assa', NULL, NULL);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `permission` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL,
  `phoneNum` varbinary(255) NULL DEFAULT NULL,
  PRIMARY KEY (`username`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('123', '123', NULL, NULL, NULL);
INSERT INTO `user` VALUES ('mhr1', '123', 'system:admin1', 'mhr@learn.cloud.com', 0x313538393037);
INSERT INTO `user` VALUES ('mhr10', '123', 'system:admin10', 'mhr@qq.com', 0x313937303534);
INSERT INTO `user` VALUES ('mhr2', '123', 'system:admin2', 'mhrmsg@gmai.com', 0x3238393931);
INSERT INTO `user` VALUES ('mhr3', '123', 'system:admin3', 'mhr@163.com', 0x3235313739);
INSERT INTO `user` VALUES ('mhr4', '123', 'system:admin4', 'mhr@163.com', 0x3131373330);
INSERT INTO `user` VALUES ('mhr5', '123', 'system:admin5', 'mhr@qq.com', 0x3338303833);
INSERT INTO `user` VALUES ('mhr6', '123', 'system:admin6', '908155169@qq.com', 0x3139363435);
INSERT INTO `user` VALUES ('mhr7', '123', 'system:admin7', 'mhr@learn.cloud.com', 0x313539383135);
INSERT INTO `user` VALUES ('mhr8', '123', 'system:admin8', '908155169@qq.com', 0x313439353635);
INSERT INTO `user` VALUES ('mhr9', '123', 'system:admin9', 'mhr@learn.cloud.com', 0x313431373235);

SET FOREIGN_KEY_CHECKS = 1;
