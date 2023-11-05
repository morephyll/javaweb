/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50717
Source Host           : 127.0.0.1:3306
Source Database       : shoppingmall

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2023-06-28 10:29:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tbladdress
-- ----------------------------
DROP TABLE IF EXISTS `tbladdress`;
CREATE TABLE `tbladdress` (
  `addrId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `regionId` int(11) DEFAULT NULL,
  `addr` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`addrId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbladdress
-- ----------------------------

-- ----------------------------
-- Table structure for tblevaluate
-- ----------------------------
DROP TABLE IF EXISTS `tblevaluate`;
CREATE TABLE `tblevaluate` (
  `evaluateId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `goodsId` int(11) DEFAULT NULL,
  `content` varchar(200) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  PRIMARY KEY (`evaluateId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tblevaluate
-- ----------------------------

-- ----------------------------
-- Table structure for tblfavorite
-- ----------------------------
DROP TABLE IF EXISTS `tblfavorite`;
CREATE TABLE `tblfavorite` (
  `favoriteId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `goodsId` int(11) DEFAULT NULL,
  PRIMARY KEY (`favoriteId`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tblfavorite
-- ----------------------------
INSERT INTO `tblfavorite` VALUES ('31', '1', '38');
INSERT INTO `tblfavorite` VALUES ('32', '1', '27');
INSERT INTO `tblfavorite` VALUES ('35', '1', '34');
INSERT INTO `tblfavorite` VALUES ('36', '1', '32');

-- ----------------------------
-- Table structure for tblgoods
-- ----------------------------
DROP TABLE IF EXISTS `tblgoods`;
CREATE TABLE `tblgoods` (
  `goodsId` int(11) NOT NULL AUTO_INCREMENT,
  `goodsTypeId` int(11) DEFAULT NULL,
  `goodsNo` varchar(20) DEFAULT NULL,
  `goodsName` varchar(50) DEFAULT NULL,
  `goodsBrand` varchar(50) DEFAULT NULL,
  `goodsPrice` double DEFAULT NULL,
  `goodsUnits` varchar(10) DEFAULT NULL,
  `goodsDiscount` double DEFAULT NULL,
  `repertoryNum` double DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  `createDate` date DEFAULT NULL,
  `deadDate` date DEFAULT NULL,
  `mainImage` varchar(100) DEFAULT NULL,
  `image1` varchar(100) DEFAULT NULL,
  `image2` varchar(100) DEFAULT NULL,
  `image3` varchar(100) DEFAULT NULL,
  `image4` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tblgoods
-- ----------------------------
INSERT INTO `tblgoods` VALUES ('10', '17', 'shouji-vivo-01', 'vivoX80', 'vivo', '6199', '台', '8', '5880', '1', '2023-06-15', null, null, null, null, null, null);
INSERT INTO `tblgoods` VALUES ('14', '16', '002', 'oppo find x6', 'oppo', '5199', '部', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/2eed8230905143e485696146743c5018.png', 'upload/4980b4586bb94e16b8f04102c9654337.png', 'upload/3db540665fdc42f69c85bb75d9c56c35.png', 'upload/3416cc1a307748bfb6803c6aacbdbcb8.png', 'upload/c99dd6bdf80748f398e75c2b26aa41bd.png');
INSERT INTO `tblgoods` VALUES ('15', '5', '1', '111', '酷酷仔', '111', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/b949f10c0c244d71afde51bb94a6cb25.png', 'upload/c1e66f9ccc23456bbdcc6a6ca5bf4c23.png', 'upload/6aa34c3b4e64421883d4964d5880aa3a.png', 'upload/cc914fee7821414db84c4c0b8df551e4.png', 'upload/5193128d81734b2c900c8309d601f5a5.png');
INSERT INTO `tblgoods` VALUES ('28', '11', '002', '成熟大叔-男裤', '七只狼', '8999', '条', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/1025a8629cd1435eb8a7cf885bd94366.png', 'upload/e3199cff2e7148149144919db9eaaeb4.png', 'upload/4417c167d08246d7b426a31bfd210b82.png', 'upload/73c801b1793d4719a884e7c34c937d2a.png', 'upload/3f1e9347fb34434c92b4bd05df282768.png');
INSERT INTO `tblgoods` VALUES ('29', '10', '002', '西部牛仔男裤', '七只狼', '123', '条', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/85b10ee3baae4855bdc929688800e77f.png', 'upload/409c153bb3f44fc3a5dc023e9a7f199c.png', 'upload/7afd74d6fe064c97a2c68f37adac7dbe.png', 'upload/4815b3c72e3d445296c80b18f60dcb6d.png', 'upload/a7d1a946aca84c1f9a949bb93d8b567d.png');
INSERT INTO `tblgoods` VALUES ('30', '5', '2334', '少女可爱T恤', '少女时代', '99', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/9ca716318f394c03980677de606c8c45.png', 'upload/3cae164735e14eb5be3cd1657bc5482b.png', 'upload/df5dec9767a14638844dc8c065eecb64.png', 'upload/29a67ddb043449859642467907eba881.png', 'upload/8a590805b41143729970993ce9688e83.png');
INSERT INTO `tblgoods` VALUES ('32', '8', 'nanzhuang3', '男装3', '', '123', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/98c2eb5acce34269ac1d5f65ae7022c2.png', 'upload/a45659da4d6c46fc9b4c16c732909aee.png', 'upload/3bad1872517443ee8859462b298e1372.png', 'upload/368ba0c4fe534016a1dc5d4eb84aed45.png', 'upload/34d05033d95f4ba4a595677779e6702d.png');
INSERT INTO `tblgoods` VALUES ('33', '8', 'nanzhaung4', '男装4', '七只狼', '123', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/93049942b2e44f8d821d98eb7a3d296c.png', 'upload/e545bc779bd34a709f648f1cf882571c.png', 'upload/ab21d48665c24089a02fd3e7324d50c8.png', 'upload/f38a04644e35403d9e8825038daeeacb.png', 'upload/c957d058ab8a4e5da69601ff9c463197.png');
INSERT INTO `tblgoods` VALUES ('34', '8', 'nanzhuang5', '男装5', '七只狼', '199', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/75312c410e1f450097b33816a2b12dfa.png', 'upload/a768b3586aec4d37869ecda1a70a50af.png', 'upload/99535006e202429ca50c647bce3840c1.png', 'upload/fb37be8eb7b0422cb7c6df14027d2ff6.png', 'upload/81ed59113d7c4a48ab3c25e4f95c45fe.png');
INSERT INTO `tblgoods` VALUES ('35', '8', 'nanzhuang6', '男装6', '', '88', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/6016641aff2a4784ac34df7badba599d.png', 'upload/e30c51defd054a4bbb9aba3bf8d2637e.png', 'upload/f5fe6d68f0154aa788ccd34f7d70e3b2.png', 'upload/3b305dea092c4d47bd2715b5cebeea54.png', 'upload/045a948c227e4fef854c61f1ba4a1d22.png');
INSERT INTO `tblgoods` VALUES ('36', '8', 'nanzhuang7', '男装7', '七只狼', '99', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/67357927099b4acaa62eb64b56f279d1.png', 'upload/34bd376f31794d3eb9c7abe9b7b2faf6.png', 'upload/bbb9df8b97a34f9886bb8c5452767865.png', 'upload/9e387ab4fc2542a79c257963caeb5827.png', 'upload/c88feeae74ec4cd584951ce32f111d1d.png');
INSERT INTO `tblgoods` VALUES ('37', '8', 'nanzhuang8', '男装8', '七只狼', '99', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/857d1ecce5aa456399dbc6420402f21a.png', 'upload/7c704b37b9464b1bad466fd29f92e155.png', 'upload/6bc50ffc1e794f5581ecaca8fbcbe97b.png', 'upload/9390adda8db347979ae78aa4c1eb7767.png', 'upload/a09f9a27fe44404fbbad1e1a36a6d2b4.png');
INSERT INTO `tblgoods` VALUES ('38', '82', 'nvzhuang3', '女装3', 'ck', '324', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/e350e9d42ef64d72a7a954b19ca3cbfc.png', 'upload/2a43790416a74730b1dc178b952fe154.png', 'upload/fd2e58612a92485b85a273a8ea265bd8.png', 'upload/39ed9bf9393445dea3b914756a57a19f.png', 'upload/76f5764402d146eda8ad5b5aa7bd5184.png');
INSERT INTO `tblgoods` VALUES ('39', '82', 'nvzhuang4', '女装4', 'ck', '632', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/ed859dd991eb40cfa9ae00f646e587ac.png', 'upload/2b2332ab274b477a94dc864fa409740c.png', 'upload/ad0ce5b8be544ce9b09f2b0235abb6ba.png', 'upload/3457c0e2ba4749eea8b667f12351ae0e.png', 'upload/5a28e23cff3840a5b4fb1ae176ab3f5d.png');
INSERT INTO `tblgoods` VALUES ('40', '82', 'nvzhuang5', '女装5', 'ck', '999', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/b69ea31e609e4baab82a46df16a78685.png', 'upload/02ea8890a9bf4ae7b1615c46b63053de.png', 'upload/4500748fe4d648058b83ccda283616af.png', 'upload/f98e5aa032214ab5afdd98f6cb4b067d.png', 'upload/4231b6f60bbf435187a5b1883d490810.png');
INSERT INTO `tblgoods` VALUES ('41', '82', 'nvzhuang6', '女装6', 'ck', '999', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/80f82b5013d9484f829429dd7fef5d88.png', 'upload/8f933aecdc4b44f08f34477776cf2a65.png', 'upload/a60e60fa1adf4a13870e1f59336292ed.png', 'upload/35632bef31ad455f90a3d64024137a19.png', 'upload/4801e11804244756a9dc523d1c8ab350.png');
INSERT INTO `tblgoods` VALUES ('42', '82', 'nvzhuang7', '女装7', 'ck', '888', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/22d914ec1871423e98c4b882af515493.png', 'upload/2b0ef64bac8345e183646f9a4fe926a6.png', 'upload/fa7809fb91e84b209c5b67f9a9f3888e.png', 'upload/b81d2d4cf2b24777b29fac8879c0991c.png', 'upload/181befaa8a0b4516abd25de93a543951.png');
INSERT INTO `tblgoods` VALUES ('43', '82', 'nvzhuang8', '女装8', 'ck', '888', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/8827e7c8a9404f279463609327e64029.png', 'upload/76ceb0a5067a445681dab12160acb421.png', 'upload/8ee0208c5b384ab7b6bc11261a656a42.png', 'upload/a9bcc26b0b144cf184a23b8e09e3f28c.png', 'upload/cea4e077ce5f4871a60b4c00a85b7327.png');
INSERT INTO `tblgoods` VALUES ('44', '82', 'nvzhuang9', '女装9', 'ck', '8999', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/e64aa6f4e10c4e14bf3d4c16924ccfac.png', 'upload/e25906fbf0f245898bc4535db69f8472.png', 'upload/f2bfee3b4495409ea64b50b6c460dbfb.png', 'upload/c1220ea1a2de45e48cb9a73a7d28cb7f.png', 'upload/04d4575b55924c5599d50e24b721e975.png');
INSERT INTO `tblgoods` VALUES ('45', '82', 'nvzhuang10', '女装10', 'ck', '678', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/c6289caafb364c87b8cbe8d4e9dcdda3.png', 'upload/1ba42fbc7f464f39b495fd4f8ca15722.png', 'upload/ee78d59435ea4a2ab6ac7076f6a5c2d2.png', 'upload/c20ebe7ac5d6404a8c0cf7907bafb3c1.png', 'upload/6928995d3f5348e09c6c8ba7e3f15d9f.png');
INSERT INTO `tblgoods` VALUES ('46', '82', 'nvzhuang11', '女装11', 'ck', '778', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/d7c1cd04a28449e684e3806be9a638ce.png', 'upload/b03d051e68404df49b574711acdd1230.png', 'upload/0676df98db0842c8814aab65c38f056c.png', 'upload/21797534c38449ddab346b6ba5941f5c.png', 'upload/6c5d3baa15304810946c94bc8ac06258.png');
INSERT INTO `tblgoods` VALUES ('47', '82', 'nvzhuang12', '女装12', 'ck', '990', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/c74205d1f4224aeaa715473d431b3a31.png', 'upload/a020cc8929764296b058e191cabbda92.png', 'upload/e73b97d70e784863a02bc3edad8ab01a.png', 'upload/936a8454945e425088d908a24e60cbe3.png', 'upload/8c0d212c7f0f44b6b4d21a0e41f6b9fe.png');
INSERT INTO `tblgoods` VALUES ('48', '82', 'nvzhuang13', '女装13', 'ck', '790', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/7307e4590251405aac2ae85da4a7a98c.png', 'upload/9204f09cffa2463a9bacf8ee5939fa5b.png', 'upload/e9505e77ddf34475b64d59611e7cf0fa.png', 'upload/dcccdabb06294538b5669ce0ca6dbc56.png', 'upload/db077c7188b44ef2b3dcfad44f9c5d34.png');
INSERT INTO `tblgoods` VALUES ('49', '5', 'nvzhuang14', '女装14', 'ck', '9999', '件', '8', '10000', '1', '2023-05-20', '2023-05-20', 'upload/2c1ee5753ad7455bb1695d48b211e9b1.png', 'upload/f278e34217c24015a4156938755a6b4e.png', 'upload/79107539337247a6894aab3552525384.png', 'upload/6f01a9e8edf24c4a87fc7339333df80b.png', 'upload/eae9b92f1f9a4773a966b3b96b95dcf8.png');
INSERT INTO `tblgoods` VALUES ('50', '15', 'shouji-apple-02', 'iphone 14pro max', 'apple', '899999', '部', '10', '10000', '1', '2023-05-20', '2023-05-20', 'upload/cd05547c854445d5a279cf2c849a7018.png', 'upload/0a23f2a5e92048a387edda845abcca5f.png', 'upload/237d5fb2c7804f01a5ab49d296d6bb87.png', 'upload/edeb4d7cf4d04642b7b10db60ea8f909.png', 'upload/d2875ce49d5f43c6a369184de5955d67.png');

-- ----------------------------
-- Table structure for tblmanager
-- ----------------------------
DROP TABLE IF EXISTS `tblmanager`;
CREATE TABLE `tblmanager` (
  `managerId` int(11) NOT NULL AUTO_INCREMENT,
  `managerAcc` varchar(20) DEFAULT NULL,
  `managerPwd` varchar(20) DEFAULT NULL,
  `realName` varchar(20) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`managerId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tblmanager
-- ----------------------------
INSERT INTO `tblmanager` VALUES ('1', '1', '1', '张三', '1');

-- ----------------------------
-- Table structure for tblorder
-- ----------------------------
DROP TABLE IF EXISTS `tblorder`;
CREATE TABLE `tblorder` (
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `addrId` int(11) DEFAULT NULL,
  `money` double DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `payTime` datetime DEFAULT NULL,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tblorder
-- ----------------------------

-- ----------------------------
-- Table structure for tblregion
-- ----------------------------
DROP TABLE IF EXISTS `tblregion`;
CREATE TABLE `tblregion` (
  `regionId` int(11) NOT NULL AUTO_INCREMENT,
  `regionName` varchar(20) DEFAULT NULL,
  `parentId` int(11) DEFAULT NULL,
  PRIMARY KEY (`regionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tblregion
-- ----------------------------

-- ----------------------------
-- Table structure for tblshoppingcart
-- ----------------------------
DROP TABLE IF EXISTS `tblshoppingcart`;
CREATE TABLE `tblshoppingcart` (
  `cartId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `goodsId` int(11) DEFAULT NULL,
  `goodsNum` int(11) DEFAULT NULL,
  PRIMARY KEY (`cartId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tblshoppingcart
-- ----------------------------

-- ----------------------------
-- Table structure for tbltype
-- ----------------------------
DROP TABLE IF EXISTS `tbltype`;
CREATE TABLE `tbltype` (
  `goodsTypeId` int(11) NOT NULL AUTO_INCREMENT,
  `typeName` varchar(20) DEFAULT NULL,
  `parentId` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  PRIMARY KEY (`goodsTypeId`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbltype
-- ----------------------------
INSERT INTO `tbltype` VALUES ('1', '女装', '0', '1');
INSERT INTO `tbltype` VALUES ('2', '男装', '0', '1');
INSERT INTO `tbltype` VALUES ('3', '衬衫', '1', '1');
INSERT INTO `tbltype` VALUES ('4', '针织衫', '1', '1');
INSERT INTO `tbltype` VALUES ('5', 'T恤', '1', '1');
INSERT INTO `tbltype` VALUES ('6', '卫衣', '1', '1');
INSERT INTO `tbltype` VALUES ('7', '牛仔裤', '1', '1');
INSERT INTO `tbltype` VALUES ('8', 'T恤', '2', '1');
INSERT INTO `tbltype` VALUES ('9', '衬衫', '2', '1');
INSERT INTO `tbltype` VALUES ('10', '牛仔裤', '2', '1');
INSERT INTO `tbltype` VALUES ('11', '工装裤', '2', '1');
INSERT INTO `tbltype` VALUES ('12', '手机', '0', '1');
INSERT INTO `tbltype` VALUES ('13', '小米手机', '12', '1');
INSERT INTO `tbltype` VALUES ('14', '华为手机', '12', '1');
INSERT INTO `tbltype` VALUES ('15', '苹果手机', '12', '1');
INSERT INTO `tbltype` VALUES ('16', 'oppo手机', '12', '1');
INSERT INTO `tbltype` VALUES ('19', '羽绒服', '1', '1');
INSERT INTO `tbltype` VALUES ('21', '内衣', '1', '1');
INSERT INTO `tbltype` VALUES ('22', '吊带', '1', '1');
INSERT INTO `tbltype` VALUES ('82', '连衣裙', '1', '1');

-- ----------------------------
-- Table structure for tbluser
-- ----------------------------
DROP TABLE IF EXISTS `tbluser`;
CREATE TABLE `tbluser` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userAcc` varchar(15) DEFAULT NULL,
  `userPwd` varchar(15) DEFAULT NULL,
  `userName` varchar(15) DEFAULT NULL,
  `idType` varchar(10) DEFAULT NULL,
  `idNo` varchar(20) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `email` varchar(11) DEFAULT NULL,
  `realName` varchar(20) DEFAULT NULL,
  `sex` varchar(1) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `balance` double DEFAULT NULL,
  `registerDate` date DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbluser
-- ----------------------------
INSERT INTO `tbluser` VALUES ('1', '1', '1', '张三', null, null, null, null, null, null, null, null, '2023-06-21', '1');
INSERT INTO `tbluser` VALUES ('2', '2', '2', '李四', null, null, null, null, null, null, null, null, '2023-06-20', '1');
INSERT INTO `tbluser` VALUES ('3', '3', '3', '王五', null, null, null, null, null, null, null, null, '2023-06-02', '1');
INSERT INTO `tbluser` VALUES ('4', '4', '4', '赵六', null, null, null, null, null, null, null, null, '2023-04-20', '1');
INSERT INTO `tbluser` VALUES ('5', '5', '5', '小七', null, null, null, null, null, null, null, null, '2023-03-21', '1');
INSERT INTO `tbluser` VALUES ('6', '6', '6', '大巴', null, null, null, null, null, null, null, null, '2022-11-24', '1');
INSERT INTO `tbluser` VALUES ('7', '7', '7', '九爷', null, null, null, null, null, null, null, null, '2023-06-21', '1');
