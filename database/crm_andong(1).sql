-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 29, 2024 at 02:11 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crm_andong`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat-patient`
--

CREATE TABLE `chat-patient` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `patientId` int(11) NOT NULL,
  `created_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL,
  `id_code` int(11) NOT NULL,
  `name_en` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `full_name_en` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`id`, `name`, `created_at`, `id_code`, `name_en`, `full_name`, `full_name_en`, `latitude`, `longitude`) VALUES
(1, 'An Giang', '1728725100', 0, '', '', '', '', ''),
(2, 'Bà Rịa - Vũng Tàu', '1728725100', 0, '', '', '', '', ''),
(3, 'Bắc Giang', '1728725100', 0, '', '', '', '', ''),
(4, 'Bắc Kạn', '1728725100', 0, '', '', '', '', ''),
(5, 'Bạc Liêu', '1728725100', 0, '', '', '', '', ''),
(6, 'Bắc Ninh', '1728725100', 0, '', '', '', '', ''),
(7, 'Bến Tre', '1728725100', 0, '', '', '', '', ''),
(8, 'Bình Dương', '1728725100', 0, '', '', '', '', ''),
(9, 'Bình Phước', '1728725100', 0, '', '', '', '', ''),
(10, 'Bình Thuận', '1728725100', 0, '', '', '', '', ''),
(11, 'Bình Định', '1728725100', 0, '', '', '', '', ''),
(12, 'Cà Mau', '1728725100', 0, '', '', '', '', ''),
(13, 'Cần Thơ', '1728725100', 0, '', '', '', '', ''),
(14, 'Cao Bằng', '1728725100', 0, '', '', '', '', ''),
(15, 'Gia Lai', '1728725100', 0, '', '', '', '', ''),
(16, 'Hà Giang', '1728725100', 0, '', '', '', '', ''),
(17, 'Hà Nam', '1728725100', 0, '', '', '', '', ''),
(18, 'Hà Nội', '1728725100', 0, '', '', '', '', ''),
(19, 'Hà Tĩnh', '1728725100', 0, '', '', '', '', ''),
(20, 'Hải Dương', '1728725100', 0, '', '', '', '', ''),
(21, 'Hải Phòng', '1728725100', 0, '', '', '', '', ''),
(22, 'Hậu Giang', '1728725100', 0, '', '', '', '', ''),
(23, 'Hồ Chí Minh', '1728725100', 0, '', '', '', '', ''),
(24, 'Hoà Bình', '1728725100', 0, '', '', '', '', ''),
(25, 'Hưng Yên', '1728725100', 0, '', '', '', '', ''),
(26, 'Khánh Hòa', '1728725100', 0, '', '', '', '', ''),
(27, 'Kiên Giang', '1728725100', 0, '', '', '', '', ''),
(28, 'Kon Tum', '1728725100', 0, '', '', '', '', ''),
(29, 'Lai Châu', '1728725100', 0, '', '', '', '', ''),
(30, 'Lâm Đồng', '1728725100', 0, '', '', '', '', ''),
(31, 'Lạng Sơn', '1728725100', 0, '', '', '', '', ''),
(32, 'Lào Cai', '1728725100', 0, '', '', '', '', ''),
(33, 'Long An', '1728725100', 0, '', '', '', '', ''),
(34, 'Nam Định', '1728725100', 0, '', '', '', '', ''),
(35, 'Nghệ An', '1728725100', 0, '', '', '', '', ''),
(36, 'Ninh Bình', '1728725100', 0, '', '', '', '', ''),
(37, 'Ninh Thuận', '1728725100', 0, '', '', '', '', ''),
(38, 'Phú Thọ', '1728725100', 0, '', '', '', '', ''),
(39, 'Phú Yên', '1728725100', 0, '', '', '', '', ''),
(40, 'Quảng Bình', '1728725100', 0, '', '', '', '', ''),
(41, 'Quảng Nam', '1728725100', 0, '', '', '', '', ''),
(42, 'Quảng Ngãi', '1728725100', 0, '', '', '', '', ''),
(43, 'Quảng Ninh', '1728725100', 0, '', '', '', '', ''),
(44, 'Quảng Trị', '1728725100', 0, '', '', '', '', ''),
(45, 'Sóc Trăng', '1728725100', 0, '', '', '', '', ''),
(46, 'Sơn La', '1728725100', 0, '', '', '', '', ''),
(47, 'Tây Ninh', '1728725100', 0, '', '', '', '', ''),
(48, 'Thái Bình', '1728725100', 0, '', '', '', '', ''),
(49, 'Thái Nguyên', '1728725100', 0, '', '', '', '', ''),
(50, 'Thanh Hóa', '1728725100', 0, '', '', '', '', ''),
(51, 'Thừa Thiên Huế', '1728725100', 0, '', '', '', '', ''),
(52, 'Tiền Giang', '1728725100', 0, '', '', '', '', ''),
(53, 'Trà Vinh', '1728725100', 0, '', '', '', '', ''),
(54, 'Tuyên Quang', '1728725100', 0, '', '', '', '', ''),
(55, 'Vĩnh Long', '1728725100', 0, '', '', '', '', ''),
(56, 'Vĩnh Phúc', '1728725100', 0, '', '', '', '', ''),
(57, 'Yên Bái', '1728725100', 0, '', '', '', '', ''),
(58, 'Đà Nẵng', '1728725100', 0, '', '', '', '', ''),
(59, 'Đắk Lắk', '1728725100', 0, '', '', '', '', ''),
(60, 'Đắk Nông', '1728725100', 0, '', '', '', '', ''),
(61, 'Điện Biên', '1728725100', 0, '', '', '', '', ''),
(62, 'Đồng Nai', '1728725100', 0, '', '', '', '', ''),
(63, 'Đồng Tháp', '1728725100', 0, '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` int(11) NOT NULL,
  `hospitalId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`, `created_at`, `hospitalId`, `userId`) VALUES
(1, 'nam khoa', 1728378104, 2, 4),
(2, 'phụ khoa', 1728378104, 2, 4),
(3, 'ngoại khoa', 1728378104, 2, 4),
(4, 'hậu môn', 1728378104, 2, 4),
(5, 'thai', 1728378104, 2, 4),
(6, 'bệnh xã hội', 1728378104, 2, 4),
(7, 'nam khoa', 1728378690, 3, 4),
(8, 'phụ khoa', 1728378690, 3, 4),
(9, 'ngoại khoa', 1728378690, 3, 4),
(10, 'hậu môn', 1728378690, 3, 4),
(11, 'thai', 1728378690, 3, 4),
(12, 'bệnh xã hội', 1728378690, 3, 4);

-- --------------------------------------------------------

--
-- Table structure for table `diseases`
--

CREATE TABLE `diseases` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `hospitalId` int(11) NOT NULL,
  `created_at` int(11) NOT NULL,
  `isshow` tinyint(4) NOT NULL,
  `departmentId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `diseases`
--

INSERT INTO `diseases` (`id`, `name`, `userId`, `hospitalId`, `created_at`, `isshow`, `departmentId`) VALUES
(1, 'VIEM BAO QUY DAU 包皮炎', 4, 3, 1728380523, 1, 1),
(2, 'CAT BAO QUY DAU 割包皮', 4, 3, 1728380523, 1, 1),
(3, 'XUAT TINH SOM 早泄', 4, 2, 1728380523, 1, 1),
(4, 'ROI LOAN CUONG DUONG 勃起功能障碍', 4, 2, 1728380523, 1, 1),
(5, 'YEU SINH LY 性功能障碍', 4, 2, 1728380523, 1, 1),
(6, 'VIEM TINH HOAN 睾丸炎', 4, 2, 1728380523, 1, 1),
(7, 'XET NGHIEM TDD 检查精子', 4, 2, 1728380523, 1, 1),
(8, 'VIEM TUYEN TIEN LIET 前列腺炎', 4, 2, 1728380523, 1, 1),
(9, 'KHAM NAM KHOA 看男科', 4, 2, 1728380523, 1, 1),
(10, 'CHINH HINH  整形', 4, 2, 1728380523, 1, 1),
(11, 'NHIEM TRUNG TIET NIEU 泌尿', 4, 2, 1728380523, 1, 1),
(12, 'PHA THAI 人流', 4, 2, 1728380523, 1, 5),
(13, 'PHA THAI BANG THUOC 药流', 4, 2, 1728380523, 1, 5),
(14, 'VIEM AM DAO 阴道炎', 4, 2, 1728380523, 1, 2),
(15, 'VIEM LO TUYEN CTC 宫颈糜烂', 4, 2, 1728380523, 1, 2),
(16, 'MUN ROP SINH DUC 疱疹', 4, 2, 1728380523, 1, 6),
(17, 'EP SANH NON 引产', 4, 2, 1728380523, 1, 5),
(18, 'KHAM PHU KHOA 看妇科', 4, 2, 1728380523, 1, 2),
(19, 'KINH NGUYET KHONG DEU 月经', 4, 2, 1728380523, 1, 2),
(20, 'VO SINH (NU) 不孕', 4, 2, 1728380523, 1, 2),
(21, 'SUI MAO GA 湿疣', 4, 2, 1728380523, 1, 6),
(22, 'BENH LAU 淋病', 4, 2, 1728380523, 1, 6),
(23, 'BENH XA HOI 性病', 4, 2, 1728380523, 1, 6),
(24, 'BENH TRI 痔疮', 4, 2, 1728380523, 1, 6),
(37, 'bệnh nam khoa', 4, 3, 1730172187, 1, 7);

-- --------------------------------------------------------

--
-- Table structure for table `district`
--

CREATE TABLE `district` (
  `id` int(11) NOT NULL,
  `cityId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `name_en` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `full_name_en` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `created_at` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `district`
--

INSERT INTO `district` (`id`, `cityId`, `name`, `name_en`, `full_name`, `full_name_en`, `latitude`, `longitude`, `created_at`) VALUES
(2, 1, 'An Phú', 'An Phu', 'Huyện An Phú', 'An Phu District', '10.835033150000001', '105.10362474984248', '1728783132'),
(3, 1, 'Châu Phú', 'Chau Phu', 'Huyện Châu Phú', 'Chau Phu District', '10.5685319', '105.16583749352154', '1728783132'),
(4, 1, 'Châu Thành', 'Chau Thanh', 'Huyện Châu Thành', 'Chau Thanh District', '10.42530055', '105.25706780940934', '1728783132'),
(5, 1, 'Châu Đốc', 'Chau Doc', 'Thành phố Châu Đốc', 'Chau Doc City', '10.7101815', '105.1188675', '1728783132'),
(6, 1, 'Chợ Mới', 'Cho Moi', 'Huyện Chợ Mới', 'Cho Moi District', '10.4551289', '105.47792757666878', '1728783132'),
(7, 1, 'Long Xuyên', 'Long Xuyen', 'Thành phố Long Xuyên', 'Long Xuyen City', '10.3905437', '105.4337523', '1728783132'),
(8, 1, 'Phú Tân', 'Phu Tan', 'Huyện Phú Tân', 'Phu Tan District', '10.6541774', '105.27791502938487', '1728783132'),
(9, 1, 'Tân Châu', 'Tan Chau', 'Thị xã Tân Châu', 'Tan Chau Town', '10.8128293', '105.1920348451795', '1728783132'),
(10, 1, 'Thoại Sơn', 'Thoai Son', 'Huyện Thoại Sơn', 'Thoai Son District', '10.27864325', '105.2691602988576', '1728783132'),
(11, 1, 'Tịnh Biên', 'Tinh Bien', 'Thị xã Tịnh Biên', 'Tinh Bien Town', '10.55794285', '104.99147440332891', '1728783132'),
(12, 1, 'Tri Tôn', 'Tri Ton', 'Huyện Tri Tôn', 'Tri Ton District', '10.41222205', '104.97094380778296', '1728783132'),
(13, 2, 'Bà Rịa', 'Ba Ria', 'Thành phố Bà Rịa', 'Ba Ria City', '10.4962696', '107.1688433', '1728783291'),
(14, 2, 'Châu Đức', 'Chau Duc', 'Huyện Châu Đức', 'Chau Duc District', '10.6564461', '107.26674688112058', '1728783291'),
(15, 2, 'Long Điền', 'Long Dien', 'Huyện Long Điền', 'Long Dien District', '10.4517959', '107.2323591', '1728783291'),
(16, 2, 'Phú Mỹ', 'Phu My', 'Thị xã Phú Mỹ', 'Phu My Town', '10.5882274', '107.0583976', '1728783291'),
(17, 2, 'Vũng Tàu', 'Vung Tau', 'Thành phố Vũng Tàu', 'Vung Tau City', '10.3486485', '107.0765028', '1728783291'),
(18, 2, 'Xuyên Mộc', 'Xuyen Moc', 'Huyện Xuyên Mộc', 'Xuyen Moc District', '10.6100336', '107.4225763', '1728783291'),
(19, 2, 'Đất Đỏ', 'Dat Do', 'Huyện Đất Đỏ', 'Dat Do District', '10.4781804', '107.30779138044201', '1728783291'),
(20, 3, 'Bắc Giang', 'Bac Giang', 'Thành phố Bắc Giang', 'Bac Giang City', '21.2795479', '106.2038074', '1728783349'),
(21, 3, 'Hiệp Hòa', 'Hiep Hoa', 'Huyện Hiệp Hòa', 'Hiep Hoa District', '21.33028415', '105.95727248053711', '1728783349'),
(22, 3, 'Lạng Giang', 'Lang Giang', 'Huyện Lạng Giang', 'Lang Giang District', '21.367404999999998', '106.24753101320522', '1728783349'),
(23, 3, 'Lục Nam', 'Luc Nam', 'Huyện Lục Nam', 'Luc Nam District', '21.304446249999998', '106.40238937066697', '1728783349'),
(24, 3, 'Lục Ngạn', 'Luc Ngan', 'Huyện Lục Ngạn', 'Luc Ngan District', '21.4369085', '106.62252810075765', '1728783349'),
(25, 3, 'Sơn Động', 'Son Dong', 'Huyện Sơn Động', 'Son Dong District', '21.32794775', '106.89968263418987', '1728783349'),
(26, 3, 'Tân Yên', 'Tan Yen', 'Huyện Tân Yên', 'Tan Yen District', '21.3891758', '106.0932876', '1728783349'),
(27, 3, 'Việt Yên', 'Viet Yen', 'Thị xã Việt Yên', 'Viet Yen Town', '21.27026545', '106.08614160365526', '1728783349'),
(28, 3, 'Yên Dũng', 'Yen Dung', 'Huyện Yên Dũng', 'Yen Dung District', '21.20490835', '106.24287470550964', '1728783349'),
(29, 3, 'Yên Thế', 'Yen The', 'Huyện Yên Thế', 'Yen The District', '21.52444285', '106.10659369977785', '1728783349'),
(30, 4, 'Ba Bể', 'Ba Be', 'Huyện Ba Bể', 'Ba Be District', '22.4107026', '105.722867615312', '1728783541'),
(31, 4, 'Bắc Kạn', 'Bac Kan', 'Thành phố Bắc Kạn', 'Bac Kan City', '22.1494915', '105.837248', '1728783541'),
(32, 4, 'Bạch Thông', 'Bach Thong', 'Huyện Bạch Thông', 'Bach Thong District', '22.20210065', '105.9357949031498', '1728783541'),
(33, 4, 'Chợ Mới', 'Cho Moi', 'Huyện Chợ Mới', 'Cho Moi District', '21.96519485', '105.87654689505666', '1728783541'),
(34, 4, 'Chợ Đồn', 'Cho Don', 'Huyện Chợ Đồn', 'Cho Don District', '22.18756805', '105.57468620828968', '1728783541'),
(35, 4, 'Na Rì', 'Na Ri', 'Huyện Na Rì', 'Na Ri District', '22.162882449999998', '106.11203860923689', '1728783541'),
(36, 4, 'Ngân Sơn', 'Ngan Son', 'Huyện Ngân Sơn', 'Ngan Son District', '22.43076375', '105.98546513057482', '1728783541'),
(37, 4, 'Pác Nặm', 'Pac Nam', 'Huyện Pác Nặm', 'Pac Nam District', '22.6105131', '105.64470999536512', '1728783541'),
(38, 5, 'Bạc Liêu', 'Bac Lieu', 'Thành phố Bạc Liêu', 'Bac Lieu City', '9.2824882', '105.7260685', '1728783567'),
(39, 5, 'Giá Rai', 'Gia Rai', 'Thị xã Giá Rai', 'Gia Rai Town', '9.2376931', '105.4562528', '1728783567'),
(40, 5, 'Hoà Bình', 'Hoa Binh', 'Huyện Hoà Bình', 'Hoa Binh District', '9.257159900000001', '105.63050185969095', '1728783567'),
(41, 5, 'Hồng Dân', 'Hong Dan', 'Huyện Hồng Dân', 'Hong Dan District', '9.509955300000001', '105.4324807212819', '1728783567'),
(42, 5, 'Phước Long', 'Phuoc Long', 'Huyện Phước Long', 'Phuoc Long District', '9.386051250000001', '105.43759603998447', '1728783567'),
(43, 5, 'Vĩnh Lợi', 'Vinh Loi', 'Huyện Vĩnh Lợi', 'Vinh Loi District', '9.34220005', '105.72991146599932', '1728783567'),
(44, 5, 'Đông Hải', 'Dong Hai', 'Huyện Đông Hải', 'Dong Hai District', '9.1381507', '105.41996743162707', '1728783567'),
(45, 6, 'Bắc Ninh', 'Bac Ninh', 'Thành phố Bắc Ninh', 'Bac Ninh City', '21.1781515', '106.0710078', '1728783585'),
(46, 6, 'Gia Bình', 'Gia Binh', 'Huyện Gia Bình', 'Gia Binh District', '21.0638566', '106.20034615342385', '1728783585'),
(47, 6, 'Lương Tài', 'Luong Tai', 'Huyện Lương Tài', 'Luong Tai District', '21.02481855', '106.24108574105982', '1728783585'),
(48, 6, 'Quế Võ', 'Que Vo', 'Thị xã Quế Võ', 'Que Vo Town', '21.14473675', '106.19972677152838', '1728783585'),
(49, 6, 'Thuận Thành', 'Thuan Thanh', 'Thị xã Thuận Thành', 'Thuan Thanh Town', '21.0384562', '106.07811573738266', '1728783585'),
(50, 6, 'Tiên Du', 'Tien Du', 'Huyện Tiên Du', 'Tien Du District', '21.1260431', '106.02947969566553', '1728783585'),
(51, 6, 'Từ Sơn', 'Tu Son', 'Thành phố Từ Sơn', 'Tu Son City', '21.113309', '105.9568611', '1728783585'),
(52, 6, 'Yên Phong', 'Yen Phong', 'Huyện Yên Phong', 'Yen Phong District', '21.2100296', '105.97596819463995', '1728783585'),
(53, 7, 'Ba Tri', 'Ba Tri', 'Huyện Ba Tri', 'Ba Tri District', '10.0729285', '106.59765216475205', '1728783625'),
(54, 7, 'Bến Tre', 'Ben Tre', 'Thành phố Bến Tre', 'Ben Tre City', '10.2448214', '106.3734823', '1728783625'),
(55, 7, 'Bình Đại', 'Binh Dai', 'Huyện Bình Đại', 'Binh Dai District', '10.167321699999999', '106.69708382638183', '1728783625'),
(56, 7, 'Châu Thành', 'Chau Thanh', 'Huyện Châu Thành', 'Chau Thanh District', '10.28990475', '106.30288211003801', '1728783625'),
(57, 7, 'Chợ Lách', 'Cho Lach', 'Huyện Chợ Lách', 'Cho Lach District', '10.2237865', '106.19144912276975', '1728783625'),
(58, 7, 'Giồng Trôm', 'Giong Trom', 'Huyện Giồng Trôm', 'Giong Trom District', '10.1466808', '106.46136457060388', '1728783625'),
(59, 7, 'Mỏ Cày Bắc', 'Mo Cay Bac', 'Huyện Mỏ Cày Bắc', 'Mo Cay Bac District', '10.167109799999999', '106.29169666428709', '1728783625'),
(60, 7, 'Mỏ Cày Nam', 'Mo Cay Nam', 'Huyện Mỏ Cày Nam', 'Mo Cay Nam District', '10.07112875', '106.35854291843015', '1728783625'),
(61, 7, 'Thạnh Phú', 'Thanh Phu', 'Huyện Thạnh Phú', 'Thanh Phu District', '9.9280022', '106.56729845935249', '1728783625'),
(62, 8, 'Bắc Tân Uyên', 'Bac Tan Uyen', 'Huyện Bắc Tân Uyên', 'Bac Tan Uyen District', '11.1376419', '106.86759671642224', '1728783646'),
(63, 8, 'Bàu Bàng', 'Bau Bang', 'Huyện Bàu Bàng', 'Bau Bang District', '11.2697956', '106.62771355641692', '1728783646'),
(64, 8, 'Bến Cát', 'Ben Cat', 'Thị xã Bến Cát', 'Ben Cat Town', '11.1521407', '106.59346097262608', '1728783646'),
(65, 8, 'Dầu Tiếng', 'Dau Tieng', 'Huyện Dầu Tiếng', 'Dau Tieng District', '11.31884255', '106.44088839716765', '1728783646'),
(66, 8, 'Dĩ An', 'Di An', 'Thành phố Dĩ An', 'Di An City', '10.91662445', '106.77641520276015', '1728783646'),
(67, 8, 'Phú Giáo', 'Phu Giao', 'Huyện Phú Giáo', 'Phu Giao District', '11.340211', '106.75387081097304', '1728783646'),
(68, 8, 'Tân Uyên', 'Tan Uyen', 'Thành phố Tân Uyên', 'Tan Uyen City', '11.0600684', '106.795688', '1728783646'),
(69, 8, 'Thủ Dầu Một', 'Thu Dau Mot', 'Thành phố Thủ Dầu Một', 'Thu Dau Mot City', '10.9808435', '106.6537483', '1728783646'),
(70, 8, 'Thuận An', 'Thuan An', 'Thành phố Thuận An', 'Thuan An City', '10.9035106', '106.6990779', '1728783646'),
(71, 9, 'Bình Long', 'Binh Long', 'Thị xã Bình Long', 'Binh Long Town', '11.6511751', '106.6070795', '1728783665'),
(72, 9, 'Bù Gia Mập', 'Bu Gia Map', 'Huyện Bù Gia Mập', 'Bu Gia Map District', '12.060083500000001', '107.10732992003989', '1728783665'),
(73, 9, 'Bù Đăng', 'Bu Dang', 'Huyện Bù Đăng', 'Bu Dang District', '11.770288749999999', '107.22347900827236', '1728783665'),
(74, 9, 'Bù Đốp', 'Bu Dop', 'Huyện Bù Đốp', 'Bu Dop District', '11.9863174', '106.80647332330909', '1728783665'),
(75, 9, 'Chơn Thành', 'Chon Thanh', 'Thị xã Chơn Thành', 'Chon Thanh Town', '11.4199483', '106.616017', '1728783665'),
(76, 9, 'Hớn Quản', 'Hon Quan', 'Huyện Hớn Quản', 'Hon Quan District', '11.625486299999999', '106.6944495338796', '1728783665'),
(77, 9, 'Lộc Ninh', 'Loc Ninh', 'Huyện Lộc Ninh', 'Loc Ninh District', '11.82333655', '106.60494691423611', '1728783665'),
(78, 9, 'Phú Riềng', 'Phu Rieng', 'Huyện Phú Riềng', 'Phu Rieng District', '11.73928175', '106.91362991028632', '1728783665'),
(79, 9, 'Phước Long', 'Phuoc Long', 'Thị xã Phước Long', 'Phuoc Long Town', '11.8208285', '106.9582406', '1728783665'),
(80, 9, 'Đồng Phú', 'Dong Phu', 'Huyện Đồng Phú', 'Dong Phu District', '11.47919465', '107.00509554584136', '1728783665'),
(81, 9, 'Đồng Xoài', 'Dong Xoai', 'Thành phố Đồng Xoài', 'Dong Xoai City', '11.5389583', '106.9047378', '1728783665'),
(82, 10, 'Bắc Bình', 'Bac Binh', 'Huyện Bắc Bình', 'Bac Binh District', '11.26154015', '108.36324766097175', '1728783680'),
(83, 10, 'Hàm Tân', 'Ham Tan', 'Huyện Hàm Tân', 'Ham Tan District', '10.7423325', '107.63489093755462', '1728783680'),
(84, 10, 'Hàm Thuận Bắc', 'Ham Thuan Bac', 'Huyện Hàm Thuận Bắc', 'Ham Thuan Bac District', '11.15549885', '108.09888403011699', '1728783680'),
(85, 10, 'Hàm Thuận Nam', 'Ham Thuan Nam', 'Huyện Hàm Thuận Nam', 'Ham Thuan Nam District', '10.93781585', '107.95472767739528', '1728783680'),
(86, 10, 'La Gi', 'La Gi', 'Thị xã La Gi', 'La Gi Town', '10.6588219', '107.7731192', '1728783680'),
(87, 10, 'Phan Thiết', 'Phan Thiet', 'Thành phố Phan Thiết', 'Phan Thiet City', '10.9311514', '108.1015919', '1728783680'),
(88, 10, 'Phú Quí', 'Phu Qui', 'Huyện Phú Quí', 'Phu Qui District', '', '', '1728783680'),
(89, 10, 'Tánh Linh', 'Tanh Linh', 'Huyện Tánh Linh', 'Tanh Linh District', '11.140132900000001', '107.68394269387258', '1728783680'),
(90, 10, 'Tuy Phong', 'Tuy Phong', 'Huyện Tuy Phong', 'Tuy Phong District', '11.344508300000001', '108.74496330649986', '1728783680'),
(91, 10, 'Đức Linh', 'Duc Linh', 'Huyện Đức Linh', 'Duc Linh District', '11.1947987', '107.53431840444601', '1728783680'),
(92, 11, 'An Lão', 'An Lao', 'Huyện An Lão', 'An Lao District', '14.53447105', '108.78248704267554', '1728783694'),
(93, 11, 'An Nhơn', 'An Nhon', 'Thị xã An Nhơn', 'An Nhon Town', '13.857558000000001', '109.06631028176767', '1728783694'),
(94, 11, 'Hoài Ân', 'Hoai An', 'Huyện Hoài Ân', 'Hoai An District', '14.346528', '108.907238596789', '1728783694'),
(95, 11, 'Hoài Nhơn', 'Hoai Nhon', 'Thị xã Hoài Nhơn', 'Hoai Nhon Town', '14.514937150000002', '109.01951205449926', '1728783694'),
(96, 11, 'Phù Cát', 'Phu Cat', 'Huyện Phù Cát', 'Phu Cat District', '14.061683500000001', '109.0669996788363', '1728783694'),
(97, 11, 'Phù Mỹ', 'Phu My', 'Huyện Phù Mỹ', 'Phu My District', '14.24487345', '109.10179494932541', '1728783694'),
(98, 11, 'Quy Nhơn', 'Quy Nhon', 'Thành phố Quy Nhơn', 'Quy Nhon City', '13.7696017', '109.2314599', '1728783694'),
(99, 11, 'Tây Sơn', 'Tay Son', 'Huyện Tây Sơn', 'Tay Son District', '13.9108292', '108.9215469', '1728783694'),
(100, 11, 'Tuy Phước', 'Tuy Phuoc', 'Huyện Tuy Phước', 'Tuy Phuoc District', '13.8403565', '109.17853275896996', '1728783694'),
(101, 11, 'Vân Canh', 'Van Canh', 'Huyện Vân Canh', 'Van Canh District', '13.6759022', '108.95706901191005', '1728783694'),
(102, 11, 'Vĩnh Thạnh', 'Vinh Thanh', 'Huyện Vĩnh Thạnh', 'Vinh Thanh District', '14.2380395', '108.74181476174671', '1728783694'),
(103, 12, 'Cà Mau', 'Ca Mau', 'Thành phố Cà Mau', 'Ca Mau City', '9.1782047', '105.1519707', '1728783709'),
(104, 12, 'Cái Nước', 'Cai Nuoc', 'Huyện Cái Nước', 'Cai Nuoc District', '9.00702305', '105.04459602705924', '1728783709'),
(105, 12, 'Năm Căn', 'Nam Can', 'Huyện Năm Căn', 'Nam Can District', '8.781762449999999', '104.97694777242388', '1728783709'),
(106, 12, 'Ngọc Hiển', 'Ngoc Hien', 'Huyện Ngọc Hiển', 'Ngoc Hien District', '8.6794654', '104.95858975790725', '1728783709'),
(107, 12, 'Phú Tân', 'Phu Tan', 'Huyện Phú Tân', 'Phu Tan District', '8.8915899', '104.88915518303278', '1728783709'),
(108, 12, 'Thới Bình', 'Thoi Binh', 'Huyện Thới Bình', 'Thoi Binh District', '9.3806554', '105.1722542433858', '1728783709'),
(109, 12, 'Trần Văn Thời', 'Tran Van Thoi', 'Huyện Trần Văn Thời', 'Tran Van Thoi District', '9.1255942', '104.93817229302493', '1728783709'),
(110, 12, 'U Minh', 'U Minh', 'Huyện U Minh', 'U Minh District', '9.37369485', '104.94139535552951', '1728783709'),
(111, 12, 'Đầm Dơi', 'Dam Doi', 'Huyện Đầm Dơi', 'Dam Doi District', '8.962345', '105.24668001439721', '1728783709'),
(112, 13, 'Bình Thuỷ', 'Binh Thuy', 'Quận Bình Thuỷ', 'Binh Thuy District', '10.0608131', '105.72092471486414', '1728783724'),
(113, 13, 'Cái Răng', 'Cai Rang', 'Quận Cái Răng', 'Cai Rang District', '9.998906999999999', '105.7878060043328', '1728783724'),
(114, 13, 'Cờ Đỏ', 'Co Do', 'Huyện Cờ Đỏ', 'Co Do District', '10.1302561', '105.4634468471533', '1728783724'),
(115, 13, 'Ninh Kiều', 'Ninh Kieu', 'Quận Ninh Kiều', 'Ninh Kieu District', '10.03214805', '105.76643609586725', '1728783724'),
(116, 13, 'Ô Môn', 'O Mon', 'Quận Ô Môn', 'O Mon District', '10.123111699999999', '105.65126298667732', '1728783724'),
(117, 13, 'Phong Điền', 'Phong Dien', 'Huyện Phong Điền', 'Phong Dien District', '9.99820225', '105.66215011822494', '1728783724'),
(118, 13, 'Thới Lai', 'Thoi Lai', 'Huyện Thới Lai', 'Thoi Lai District', '10.0241003', '105.5218734810569', '1728783724'),
(119, 13, 'Thốt Nốt', 'Thot Not', 'Quận Thốt Nốt', 'Thot Not District', '10.23913005', '105.5485178423072', '1728783724'),
(120, 13, 'Vĩnh Thạnh', 'Vinh Thanh', 'Huyện Vĩnh Thạnh', 'Vinh Thanh District', '10.2068056', '105.35527840360352', '1728783724'),
(121, 14, 'Bảo Lạc', 'Bao Lac', 'Huyện Bảo Lạc', 'Bao Lac District', '22.8746728', '105.75083174079195', '1728783745'),
(122, 14, 'Bảo Lâm', 'Bao Lam', 'Huyện Bảo Lâm', 'Bao Lam District', '22.876005749999997', '105.46837084050352', '1728783745'),
(123, 14, 'Cao Bằng', 'Cao Bang', 'Thành phố Cao Bằng', 'Cao Bang City', '22.6657612', '106.2588307', '1728783745'),
(124, 14, 'Hạ Lang', 'Ha Lang', 'Huyện Hạ Lang', 'Ha Lang District', '22.7125811', '106.663947376492', '1728783745'),
(125, 14, 'Hà Quảng', 'Ha Quang', 'Huyện Hà Quảng', 'Ha Quang District', '22.8420028', '105.95487237053942', '1728783745'),
(126, 14, 'Hoà An', 'Hoa An', 'Huyện Hoà An', 'Hoa An District', '22.68792585', '106.30639535789939', '1728783745'),
(127, 14, 'Nguyên Bình', 'Nguyen Binh', 'Huyện Nguyên Bình', 'Nguyen Binh District', '22.648736999999997', '105.9379062357025', '1728783745'),
(128, 14, 'Quảng Hòa', 'Quang Hoa', 'Huyện Quảng Hòa', 'Quang Hoa District', '22.623941600000002', '106.47900902575776', '1728783745'),
(129, 14, 'Thạch An', 'Thach An', 'Huyện Thạch An', 'Thach An District', '22.480930700000002', '106.32169821921431', '1728783745'),
(130, 14, 'Trùng Khánh', 'Trung Khanh', 'Huyện Trùng Khánh', 'Trung Khanh District', '22.8263904', '106.46093906329244', '1728783745'),
(131, 15, 'An Khê', 'An Khe', 'Thị xã An Khê', 'An Khe Town', '14.0221216', '108.69422150756694', '1728783763'),
(132, 15, 'Ayun Pa', 'Ayun Pa', 'Thị xã Ayun Pa', 'Ayun Pa Town', '13.3111375', '108.42486410412874', '1728783763'),
(133, 15, 'Chư Păh', 'Chu Pah', 'Huyện Chư Păh', 'Chu Pah District', '14.222075499999999', '107.97107446802119', '1728783763'),
(134, 15, 'Chư Prông', 'Chu Prong', 'Huyện Chư Prông', 'Chu Prong District', '13.5919097', '107.76766898747725', '1728783763'),
(135, 15, 'Chư Pưh', 'Chu Puh', 'Huyện Chư Pưh', 'Chu Puh District', '13.5086136', '108.07913603684142', '1728783763'),
(136, 15, 'Chư Sê', 'Chu Se', 'Huyện Chư Sê', 'Chu Se District', '13.6980161', '108.09586188392815', '1728783763'),
(137, 15, 'Ia Grai', 'Ia Grai', 'Huyện Ia Grai', 'Ia Grai District', '13.990353899999999', '107.75625852801647', '1728783763'),
(138, 15, 'Ia Pa', 'Ia Pa', 'Huyện Ia Pa', 'Ia Pa District', '13.52690085', '108.577835369865', '1728783763'),
(139, 15, 'KBang', 'KBang', 'Huyện KBang', 'KBang District', '14.301794600000001', '108.47937459255267', '1728783763'),
(140, 15, 'Kông Chro', 'Kong Chro', 'Huyện Kông Chro', 'Kong Chro District', '13.76235545', '108.59066693938226', '1728783763'),
(141, 15, 'Krông Pa', 'Krong Pa', 'Huyện Krông Pa', 'Krong Pa District', '13.2348415', '108.6668368242042', '1728783763'),
(142, 15, 'Mang Yang', 'Mang Yang', 'Huyện Mang Yang', 'Mang Yang District', '13.956394199999998', '108.31598800727713', '1728783763'),
(143, 15, 'Phú Thiện', 'Phu Thien', 'Huyện Phú Thiện', 'Phu Thien District', '13.506160000000001', '108.32629239570144', '1728783763'),
(144, 15, 'Pleiku', 'Pleiku', 'Thành phố Pleiku', 'Pleiku City', '13.9715982', '108.0143597', '1728783763'),
(145, 15, 'Đăk Pơ', 'Dak Po', 'Huyện Đăk Pơ', 'Dak Po District', '13.9286381', '108.60482178285714', '1728783763'),
(146, 15, 'Đăk Đoa', 'Dak Doa', 'Huyện Đăk Đoa', 'Dak Doa District', '14.115959499999999', '108.17517950183655', '1728783763'),
(147, 15, 'Đức Cơ', 'Duc Co', 'Huyện Đức Cơ', 'Duc Co District', '13.7715552', '107.65923805336625', '1728783763'),
(148, 16, 'Bắc Mê', 'Bac Me', 'Huyện Bắc Mê', 'Bac Me District', '22.763282750000002', '105.28234608698708', '1728783819'),
(149, 16, 'Bắc Quang', 'Bac Quang', 'Huyện Bắc Quang', 'Bac Quang District', '22.3933691', '104.92831463191126', '1728783819'),
(150, 16, 'Hà Giang', 'Ha Giang', 'Thành phố Hà Giang', 'Ha Giang City', '22.8264592', '104.9846342', '1728783819'),
(151, 16, 'Hoàng Su Phì', 'Hoang Su Phi', 'Huyện Hoàng Su Phì', 'Hoang Su Phi District', '22.694388099999998', '104.69078956169419', '1728783819'),
(152, 16, 'Mèo Vạc', 'Meo Vac', 'Huyện Mèo Vạc', 'Meo Vac District', '23.1516557', '105.437853298152', '1728783819'),
(153, 16, 'Quản Bạ', 'Quan Ba', 'Huyện Quản Bạ', 'Quan Ba District', '23.0679595', '104.95037589574648', '1728783819'),
(154, 16, 'Quang Bình', 'Quang Binh', 'Huyện Quang Bình', 'Quang Binh District', '22.3848683', '104.65359949614746', '1728783819'),
(155, 16, 'Vị Xuyên', 'Vi Xuyen', 'Huyện Vị Xuyên', 'Vi Xuyen District', '22.76347785', '105.04439585401522', '1728783819'),
(156, 16, 'Xín Mần', 'Xin Man', 'Huyện Xín Mần', 'Xin Man District', '22.6344501', '104.50424938229064', '1728783819'),
(157, 16, 'Yên Minh', 'Yen Minh', 'Huyện Yên Minh', 'Yen Minh District', '23.07187915', '105.20839490144274', '1728783819'),
(158, 16, 'Đồng Văn', 'Dong Van', 'Huyện Đồng Văn', 'Dong Van District', '23.242517550000002', '105.24756766400756', '1728783819'),
(159, 17, 'Bình Lục', 'Binh Luc', 'Huyện Bình Lục', 'Binh Luc District', '20.5002363', '106.0508339', '1728783839'),
(160, 17, 'Duy Tiên', 'Duy Tien', 'Thị xã Duy Tiên', 'Duy Tien Town', '20.630617649999998', '105.97138916063906', '1728783839'),
(161, 17, 'Kim Bảng', 'Kim Bang', 'Huyện Kim Bảng', 'Kim Bang District', '20.57129535', '105.84344789008205', '1728783839'),
(162, 17, 'Lý Nhân', 'Ly Nhan', 'Huyện Lý Nhân', 'Ly Nhan District', '20.54725985', '106.0996179984094', '1728783839'),
(163, 17, 'Phủ Lý', 'Phu Ly', 'Thành phố Phủ Lý', 'Phu Ly City', '20.5447207', '105.915517', '1728783839'),
(164, 17, 'Thanh Liêm', 'Thanh Liem', 'Huyện Thanh Liêm', 'Thanh Liem District', '20.44534775', '105.92103804498532', '1728783839'),
(165, 18, 'Ba Vì', 'Ba Vi', 'Huyện Ba Vì', 'Ba Vi District', '21.155976600000002', '105.37494274237581', '1728783855'),
(166, 18, 'Ba Đình', 'Ba Dinh', 'Quận Ba Đình', 'Ba Dinh District', '21.0365377', '105.8285908', '1728783855'),
(167, 18, 'Bắc Từ Liêm', 'Bac Tu Liem', 'Quận Bắc Từ Liêm', 'Bac Tu Liem District', '21.0712548', '105.7644855', '1728783855'),
(168, 18, 'Cầu Giấy', 'Cau Giay', 'Quận Cầu Giấy', 'Cau Giay District', '21.0295015', '105.7914212', '1728783855'),
(169, 18, 'Chương Mỹ', 'Chuong My', 'Huyện Chương Mỹ', 'Chuong My District', '20.87851585', '105.64923352491572', '1728783855'),
(170, 18, 'Gia Lâm', 'Gia Lam', 'Huyện Gia Lâm', 'Gia Lam District', '21.0238721', '105.97050129109073', '1728783855'),
(171, 18, 'Hà Đông', 'Ha Dong', 'Quận Hà Đông', 'Ha Dong District', '20.9551855', '105.758011', '1728783855'),
(172, 18, 'Hai Bà Trưng', 'Hai Ba Trung', 'Quận Hai Bà Trưng', 'Hai Ba Trung District', '21.0064704', '105.8578519', '1728783855'),
(173, 18, 'Hoài Đức', 'Hoai Duc', 'Huyện Hoài Đức', 'Hoai Duc District', '21.02292555', '105.70347943078642', '1728783855'),
(174, 18, 'Hoàn Kiếm', 'Hoan Kiem', 'Quận Hoàn Kiếm', 'Hoan Kiem District', '21.0302237', '105.8523115', '1728783855'),
(175, 18, 'Hoàng Mai', 'Hoang Mai', 'Quận Hoàng Mai', 'Hoang Mai District', '20.9757581', '105.8626556', '1728783855'),
(176, 18, 'Long Biên', 'Long Bien', 'Quận Long Biên', 'Long Bien District', '21.0359662', '105.9021921', '1728783855'),
(177, 18, 'Mê Linh', 'Me Linh', 'Huyện Mê Linh', 'Me Linh District', '21.18078845', '105.70725700576077', '1728783855'),
(178, 18, 'Mỹ Đức', 'My Duc', 'Huyện Mỹ Đức', 'My Duc District', '20.697382599999997', '105.71577535499549', '1728783855'),
(179, 18, 'Nam Từ Liêm', 'Nam Tu Liem', 'Quận Nam Từ Liêm', 'Nam Tu Liem District', '21.0173512', '105.7613329', '1728783855'),
(180, 18, 'Phú Xuyên', 'Phu Xuyen', 'Huyện Phú Xuyên', 'Phu Xuyen District', '20.72904585', '105.91023981311886', '1728783855'),
(181, 18, 'Phúc Thọ', 'Phuc Tho', 'Huyện Phúc Thọ', 'Phuc Tho District', '21.1096428', '105.57094469616789', '1728783855'),
(182, 18, 'Quốc Oai', 'Quoc Oai', 'Huyện Quốc Oai', 'Quoc Oai District', '20.9779128', '105.62959219969346', '1728783855'),
(183, 18, 'Sóc Sơn', 'Soc Son', 'Huyện Sóc Sơn', 'Soc Son District', '21.2808747', '105.82924029963563', '1728783855'),
(184, 18, 'Sơn Tây', 'Son Tay', 'Thị xã Sơn Tây', 'Son Tay Town', '21.1386671', '105.5056335', '1728783855'),
(185, 18, 'Tây Hồ', 'Tay Ho', 'Quận Tây Hồ', 'Tay Ho District', '21.0683576', '105.8240984', '1728783855'),
(186, 18, 'Thạch Thất', 'Thach That', 'Huyện Thạch Thất', 'Thach That District', '21.0235566', '105.55373581804929', '1728783855'),
(187, 18, 'Thanh Oai', 'Thanh Oai', 'Huyện Thanh Oai', 'Thanh Oai District', '20.8602693', '105.78016441102196', '1728783855'),
(188, 18, 'Thanh Trì', 'Thanh Tri', 'Huyện Thanh Trì', 'Thanh Tri District', '20.9408967', '105.83650808063207', '1728783855'),
(189, 18, 'Thanh Xuân', 'Thanh Xuan', 'Quận Thanh Xuân', 'Thanh Xuan District', '20.9944171', '105.8171316', '1728783855'),
(190, 18, 'Thường Tín', 'Thuong Tin', 'Huyện Thường Tín', 'Thuong Tin District', '20.8319978', '105.87006434087073', '1728783855'),
(191, 18, 'Ứng Hòa', 'Ung Hoa', 'Huyện Ứng Hòa', 'Ung Hoa District', '20.7110772', '105.81433035379561', '1728783855'),
(192, 18, 'Đan Phượng', 'Dan Phuong', 'Huyện Đan Phượng', 'Dan Phuong District', '21.11962705', '105.67846820592845', '1728783855'),
(193, 18, 'Đông Anh', 'Dong Anh', 'Huyện Đông Anh', 'Dong Anh District', '21.1367358', '105.84603245401874', '1728783855'),
(194, 18, 'Đống Đa', 'Dong Da', 'Quận Đống Đa', 'Dong Da District', '21.0146852', '105.8235426', '1728783855'),
(195, 19, 'Cẩm Xuyên', 'Cam Xuyen', 'Huyện Cẩm Xuyên', 'Cam Xuyen District', '18.19102625', '106.00904519195946', '1728791539'),
(196, 19, 'Can Lộc', 'Can Loc', 'Huyện Can Lộc', 'Can Loc District', '18.4436926', '105.73145497029198', '1728791539'),
(197, 19, 'Hà Tĩnh', 'Ha Tinh', 'Thành phố Hà Tĩnh', 'Ha Tinh City', '18.3452745', '105.9019482', '1728791539'),
(198, 19, 'Hồng Lĩnh', 'Hong Linh', 'Thị xã Hồng Lĩnh', 'Hong Linh Town', '18.5338755', '105.71148245187794', '1728791539'),
(199, 19, 'Hương Khê', 'Huong Khe', 'Huyện Hương Khê', 'Huong Khe District', '18.1927292', '105.6794761598388', '1728791539'),
(200, 19, 'Hương Sơn', 'Huong Son', 'Huyện Hương Sơn', 'Huong Son District', '18.4457607', '105.24850978616601', '1728791539'),
(201, 19, 'Kỳ Anh', 'Ky Anh', 'Huyện Kỳ Anh', 'Ky Anh District', '18.089233', '106.17562770662599', '1728791539'),
(202, 19, 'Kỳ Anh', 'Ky Anh', 'Thị xã Kỳ Anh', 'Ky Anh Town', '18.0665114', '106.3001346', '1728791539'),
(203, 19, 'Lộc Hà', 'Loc Ha', 'Huyện Lộc Hà', 'Loc Ha District', '18.4667912', '105.86786423728505', '1728791539'),
(204, 19, 'Nghi Xuân', 'Nghi Xuan', 'Huyện Nghi Xuân', 'Nghi Xuan District', '18.644494199999997', '105.75753114971519', '1728791539'),
(205, 19, 'Thạch Hà', 'Thach Ha', 'Huyện Thạch Hà', 'Thach Ha District', '18.304754199999998', '105.82942551493511', '1728791539'),
(206, 19, 'Vũ Quang', 'Vu Quang', 'Huyện Vũ Quang', 'Vu Quang District', '18.324171550000003', '105.4534327766688', '1728791539'),
(207, 19, 'Đức Thọ', 'Duc Tho', 'Huyện Đức Thọ', 'Duc Tho District', '18.4886823', '105.60529294514542', '1728791539'),
(208, 20, 'Bình Giang', 'Binh Giang', 'Huyện Bình Giang', 'Binh Giang District', '20.875629500000002', '106.19346351646702', '1728791555'),
(209, 20, 'Cẩm Giàng', 'Cam Giang', 'Huyện Cẩm Giàng', 'Cam Giang District', '20.9512277', '106.21698098447946', '1728791555'),
(210, 20, 'Chí Linh', 'Chi Linh', 'Thành phố Chí Linh', 'Chi Linh City', '21.1074209', '106.3873204', '1728791555'),
(211, 20, 'Gia Lộc', 'Gia Loc', 'Huyện Gia Lộc', 'Gia Loc District', '20.8443905', '106.30103708763326', '1728791555'),
(212, 20, 'Hải Dương', 'Hai Duong', 'Thành phố Hải Dương', 'Hai Duong City', '20.9430878', '106.3225388', '1728791555'),
(213, 20, 'Kim Thành', 'Kim Thanh', 'Huyện Kim Thành', 'Kim Thanh District', '20.927149749999998', '106.51089146358728', '1728791555'),
(214, 20, 'Kinh Môn', 'Kinh Mon', 'Thị xã Kinh Môn', 'Kinh Mon Town', '20.9999626', '106.51302527084664', '1728791555'),
(215, 20, 'Nam Sách', 'Nam Sach', 'Huyện Nam Sách', 'Nam Sach District', '21.021640249999997', '106.33553342548927', '1728791555'),
(216, 20, 'Ninh Giang', 'Ninh Giang', 'Huyện Ninh Giang', 'Ninh Giang District', '20.75314105', '106.33174108024527', '1728791555'),
(217, 20, 'Thanh Hà', 'Thanh Ha', 'Huyện Thanh Hà', 'Thanh Ha District', '20.886690899999998', '106.43271350035486', '1728791555'),
(218, 20, 'Thanh Miện', 'Thanh Mien', 'Huyện Thanh Miện', 'Thanh Mien District', '20.76602915', '106.22868145662432', '1728791555'),
(219, 20, 'Tứ Kỳ', 'Tu Ky', 'Huyện Tứ Kỳ', 'Tu Ky District', '20.80700405', '106.41944507962802', '1728791555'),
(220, 21, 'An Dương', 'An Duong', 'Huyện An Dương', 'An Duong District', '20.884083349999997', '106.57833546230978', '1728791574'),
(221, 21, 'An Lão', 'An Lao', 'Huyện An Lão', 'An Lao District', '20.79734375', '106.56590975937101', '1728791574'),
(222, 21, 'Cát Hải', 'Cat Hai', 'Huyện Cát Hải', 'Cat Hai District', '20.7911427', '107.02977689767795', '1728791574'),
(223, 21, 'Dương Kinh', 'Duong Kinh', 'Quận Dương Kinh', 'Duong Kinh District', '20.78467475', '106.72045786901175', '1728791574'),
(224, 21, 'Hải An', 'Hai An', 'Quận Hải An', 'Hai An District', '20.8347956', '106.7286831', '1728791574'),
(225, 21, 'Hồng Bàng', 'Hong Bang', 'Quận Hồng Bàng', 'Hong Bang District', '20.8763328', '106.64442867897043', '1728791574'),
(226, 21, 'Kiến An', 'Kien An', 'Quận Kiến An', 'Kien An District', '20.806616599999998', '106.632475497576', '1728791574'),
(227, 21, 'Kiến Thuỵ', 'Kien Thuy', 'Huyện Kiến Thuỵ', 'Kien Thuy District', '20.73365105', '106.67151606796983', '1728791574'),
(228, 21, 'Lê Chân', 'Le Chan', 'Quận Lê Chân', 'Le Chan District', '20.839182', '106.6783232', '1728791574'),
(229, 21, 'Ngô Quyền', 'Ngo Quyen', 'Quận Ngô Quyền', 'Ngo Quyen District', '20.8541461', '106.7022652', '1728791574'),
(230, 21, 'Thuỷ Nguyên', 'Thuy Nguyen', 'Huyện Thuỷ Nguyên', 'Thuy Nguyen District', '20.941078349999998', '106.68503670470655', '1728791574'),
(231, 21, 'Tiên Lãng', 'Tien Lang', 'Huyện Tiên Lãng', 'Tien Lang District', '20.71443175', '106.56182590016898', '1728791574'),
(232, 21, 'Vĩnh Bảo', 'Vinh Bao', 'Huyện Vĩnh Bảo', 'Vinh Bao District', '20.68131395', '106.46338511637197', '1728791574'),
(233, 21, 'Đồ Sơn', 'Do Son', 'Quận Đồ Sơn', 'Do Son District', '20.7225781', '106.7676868', '1728791574'),
(234, 22, 'Châu Thành', 'Chau Thanh', 'Huyện Châu Thành', 'Chau Thanh District', '9.9204145', '105.81782517981263', '1728791619'),
(235, 22, 'Châu Thành A', 'Chau Thanh A', 'Huyện Châu Thành A', 'Chau Thanh A District', '9.93014655', '105.64014022638986', '1728791619'),
(236, 22, 'Long Mỹ', 'Long My', 'Huyện Long Mỹ', 'Long My District', '9.65630485', '105.4894388460863', '1728791619'),
(237, 22, 'Long Mỹ', 'Long My', 'Thị xã Long Mỹ', 'Long My Town', '9.6819201', '105.5695075', '1728791619'),
(238, 22, 'Ngã Bảy', 'Nga Bay', 'Thành phố Ngã Bảy', 'Nga Bay City', '9.82315455', '105.81798733931163', '1728791619'),
(239, 22, 'Phụng Hiệp', 'Phung Hiep', 'Huyện Phụng Hiệp', 'Phung Hiep District', '9.78553595', '105.7081975418058', '1728791619'),
(240, 22, 'Vị Thanh', 'Vi Thanh', 'Thành phố Vị Thanh', 'Vi Thanh City', '9.7832231', '105.4670349', '1728791619'),
(241, 22, 'Vị Thuỷ', 'Vi Thuy', 'Huyện Vị Thuỷ', 'Vi Thuy District', '9.80111335', '105.55257555502038', '1728791619'),
(242, 23, '1', '1', 'Quận 1', 'District 1', '10.7773145', '106.6999907', '1728791630'),
(243, 23, '10', '10', 'Quận 10', 'District 10', '10.772732', '106.6683666', '1728791630'),
(244, 23, '11', '11', 'Quận 11', 'District 11', '10.7658124', '106.6474946', '1728791630'),
(245, 23, '12', '12', 'Quận 12', 'District 12', '10.8616036', '106.6609731', '1728791630'),
(246, 23, '3', '3', 'Quận 3', 'District 3', '10.778639', '106.6870156', '1728791630'),
(247, 23, '4', '4', 'Quận 4', 'District 4', '10.7607328', '106.7075519', '1728791630'),
(248, 23, '5', '5', 'Quận 5', 'District 5', '10.7553616', '106.6685441', '1728791630'),
(249, 23, '6', '6', 'Quận 6', 'District 6', '10.745886', '106.6392921', '1728791630'),
(250, 23, '7', '7', 'Quận 7', 'District 7', '10.7375481', '106.7302238', '1728791630'),
(251, 23, '8', '8', 'Quận 8', 'District 8', '10.7217236', '106.6296151', '1728791630'),
(252, 23, 'Bình Chánh', 'Binh Chanh', 'Huyện Bình Chánh', 'Binh Chanh District', '10.7500035', '106.51488582967849', '1728791630'),
(253, 23, 'Bình Tân', 'Binh Tan', 'Quận Bình Tân', 'Binh Tan District', '10.7703708', '106.5996353', '1728791630'),
(254, 23, 'Bình Thạnh', 'Binh Thanh', 'Quận Bình Thạnh', 'Binh Thanh District', '10.8117887', '106.7039109', '1728791630'),
(255, 23, 'Cần Giờ', 'Can Gio', 'Huyện Cần Giờ', 'Can Gio District', '10.5265318', '106.88212441007174', '1728791630'),
(256, 23, 'Củ Chi', 'Cu Chi', 'Huyện Củ Chi', 'Cu Chi District', '11.0370567', '106.50241040288586', '1728791630'),
(257, 23, 'Gò Vấp', 'Go Vap', 'Quận Gò Vấp', 'Go Vap District', '10.8345635', '106.6739598', '1728791630'),
(258, 23, 'Hóc Môn', 'Hoc Mon', 'Huyện Hóc Môn', 'Hoc Mon District', '10.878345', '106.57635314823773', '1728791630'),
(259, 23, 'Nhà Bè', 'Nha Be', 'Huyện Nhà Bè', 'Nha Be District', '10.650967049999998', '106.72638246812322', '1728791630'),
(260, 23, 'Phú Nhuận', 'Phu Nhuan', 'Quận Phú Nhuận', 'Phu Nhuan District', '10.800981', '106.6794379', '1728791630'),
(261, 23, 'Tân Bình', 'Tan Binh', 'Quận Tân Bình', 'Tan Binh District', '10.802583', '106.6521157', '1728791630'),
(262, 23, 'Tân Phú', 'Tan Phu', 'Quận Tân Phú', 'Tan Phu District', '10.7914967', '106.6278431', '1728791630'),
(263, 23, 'Thủ Đức', 'Thu Duc', 'Thành phố Thủ Đức', 'Thu Duc City', '10.8298295', '106.7617899', '1728791630'),
(264, 24, 'Cao Phong', 'Cao Phong', 'Huyện Cao Phong', 'Cao Phong District', '20.6882915', '105.33832039321926', '1728791641'),
(265, 24, 'Hòa Bình', 'Hoa Binh', 'Thành phố Hòa Bình', 'Hoa Binh City', '20.8252056', '105.3431291', '1728791641'),
(266, 24, 'Kim Bôi', 'Kim Boi', 'Huyện Kim Bôi', 'Kim Boi District', '20.675926', '105.5140030747036', '1728791641'),
(267, 24, 'Lạc Sơn', 'Lac Son', 'Huyện Lạc Sơn', 'Lac Son District', '20.498455', '105.43501003153847', '1728791641'),
(268, 24, 'Lạc Thủy', 'Lac Thuy', 'Huyện Lạc Thủy', 'Lac Thuy District', '20.4955801', '105.74945849409471', '1728791641'),
(269, 24, 'Lương Sơn', 'Luong Son', 'Huyện Lương Sơn', 'Luong Son District', '20.78145465', '105.60248177074686', '1728791641'),
(270, 24, 'Mai Châu', 'Mai Chau', 'Huyện Mai Châu', 'Mai Chau District', '20.71587505', '104.97912930663392', '1728791641'),
(271, 24, 'Tân Lạc', 'Tan Lac', 'Huyện Tân Lạc', 'Tan Lac District', '20.609234', '105.22816457383709', '1728791641'),
(272, 24, 'Yên Thủy', 'Yen Thuy', 'Huyện Yên Thủy', 'Yen Thuy District', '20.427393000000002', '105.63056734764356', '1728791641'),
(273, 24, 'Đà Bắc', 'Da Bac', 'Huyện Đà Bắc', 'Da Bac District', '20.93152525', '105.06792968281272', '1728791641'),
(274, 25, 'Ân Thi', 'An Thi', 'Huyện Ân Thi', 'An Thi District', '20.812668799999997', '106.09573782253199', '1728791659'),
(275, 25, 'Hưng Yên', 'Hung Yen', 'Thành phố Hưng Yên', 'Hung Yen City', '20.6568406', '106.054036', '1728791659'),
(276, 25, 'Khoái Châu', 'Khoai Chau', 'Huyện Khoái Châu', 'Khoai Chau District', '20.830855', '105.97595651121978', '1728791659'),
(277, 25, 'Kim Động', 'Kim Dong', 'Huyện Kim Động', 'Kim Dong District', '20.755141950000002', '106.03019090846877', '1728791659'),
(278, 25, 'Mỹ Hào', 'My Hao', 'Thị xã Mỹ Hào', 'My Hao Town', '20.9361841', '106.0584514', '1728791659'),
(279, 25, 'Phù Cừ', 'Phu Cu', 'Huyện Phù Cừ', 'Phu Cu District', '20.713157250000002', '106.18141954602125', '1728791659'),
(280, 25, 'Tiên Lữ', 'Tien Lu', 'Huyện Tiên Lữ', 'Tien Lu District', '20.681682799999997', '106.14249761475986', '1728791659'),
(281, 25, 'Văn Giang', 'Van Giang', 'Huyện Văn Giang', 'Van Giang District', '20.9298976', '105.96327503831853', '1728791659'),
(282, 25, 'Văn Lâm', 'Van Lam', 'Huyện Văn Lâm', 'Van Lam District', '20.972623499999997', '106.01646597968514', '1728791659'),
(283, 25, 'Yên Mỹ', 'Yen My', 'Huyện Yên Mỹ', 'Yen My District', '20.894997500000002', '106.0213599668703', '1728791659'),
(284, 26, 'Cam Lâm', 'Cam Lam', 'Huyện Cam Lâm', 'Cam Lam District', '12.0756838', '109.07143490682444', '1728791672'),
(285, 26, 'Cam Ranh', 'Cam Ranh', 'Thành phố Cam Ranh', 'Cam Ranh City', '11.9166696', '109.14861', '1728791672'),
(286, 26, 'Diên Khánh', 'Dien Khanh', 'Huyện Diên Khánh', 'Dien Khanh District', '12.2779046', '109.04776635738149', '1728791672'),
(287, 26, 'Khánh Sơn', 'Khanh Son', 'Huyện Khánh Sơn', 'Khanh Son District', '12.037198700000001', '108.90938685706642', '1728791672'),
(288, 26, 'Khánh Vĩnh', 'Khanh Vinh', 'Huyện Khánh Vĩnh', 'Khanh Vinh District', '12.296146499999999', '108.82427627126926', '1728791672'),
(289, 26, 'Nha Trang', 'Nha Trang', 'Thành phố Nha Trang', 'Nha Trang City', '12.2431693', '109.1898675', '1728791672'),
(290, 26, 'Ninh Hòa', 'Ninh Hoa', 'Thị xã Ninh Hòa', 'Ninh Hoa Town', '12.548103600000001', '109.06206698803544', '1728791672'),
(291, 26, 'Trường Sa', 'Truong Sa', 'Huyện Trường Sa', 'Truong Sa District', '8.8250687', '112.60557204083483', '1728791672'),
(292, 26, 'Vạn Ninh', 'Van Ninh', 'Huyện Vạn Ninh', 'Van Ninh District', '12.715747499999999', '109.18659381775906', '1728791672'),
(293, 27, 'An Biên', 'An Bien', 'Huyện An Biên', 'An Bien District', '9.8216331', '105.03239031797594', '1728791683'),
(294, 27, 'An Minh', 'An Minh', 'Huyện An Minh', 'An Minh District', '9.5339432', '105.24715617934012', '1728791683'),
(295, 27, 'Châu Thành', 'Chau Thanh', 'Huyện Châu Thành', 'Chau Thanh District', '9.959075200000001', '105.1887344919708', '1728791683'),
(296, 27, 'Giang Thành', 'Giang Thanh', 'Huyện Giang Thành', 'Giang Thanh District', '10.4437035', '104.6695327189974', '1728791683'),
(297, 27, 'Giồng Riềng', 'Giong Rieng', 'Huyện Giồng Riềng', 'Giong Rieng District', '9.933406', '105.36243070071589', '1728791683'),
(298, 27, 'Gò Quao', 'Go Quao', 'Huyện Gò Quao', 'Go Quao District', '9.72040415', '105.29997748309214', '1728791683'),
(299, 27, 'Hà Tiên', 'Ha Tien', 'Thành phố Hà Tiên', 'Ha Tien City', '10.3828019', '104.4859503', '1728791683'),
(300, 27, 'Hòn Đất', 'Hon Dat', 'Huyện Hòn Đất', 'Hon Dat District', '10.230679049999999', '104.93160602631988', '1728791683'),
(301, 27, 'Kiên Hải', 'Kien Hai', 'Huyện Kiên Hải', 'Kien Hai District', '9.8080368', '104.63651205039501', '1728791683'),
(302, 27, 'Kiên Lương', 'Kien Luong', 'Huyện Kiên Lương', 'Kien Luong District', '10.278154449999999', '104.65065185620645', '1728791683'),
(303, 27, 'Phú Quốc', 'Phu Quoc', 'Thành phố Phú Quốc', 'Phu Quoc City', '10.2162807', '103.9875395', '1728791683'),
(304, 27, 'Rạch Giá', 'Rach Gia', 'Thành phố Rạch Giá', 'Rach Gia City', '10.0107104', '105.0832623', '1728791683'),
(305, 27, 'Tân Hiệp', 'Tan Hiep', 'Huyện Tân Hiệp', 'Tan Hiep District', '10.0850823', '105.2576939198693', '1728791683'),
(306, 27, 'U Minh Thượng', 'U Minh Thuong', 'Huyện U Minh Thượng', 'U Minh Thuong District', '9.623775649999999', '105.10220099379092', '1728791683'),
(307, 27, 'Vĩnh Thuận', 'Vinh Thuan', 'Huyện Vĩnh Thuận', 'Vinh Thuan District', '9.5339432', '105.24715617934012', '1728791683'),
(308, 28, 'Ia H\' Drai', 'Ia H\' Drai', 'Huyện Ia H\' Drai', 'Ia H\' Drai District', '14.144798399999999', '107.50626823625527', '1728791700'),
(309, 28, 'Kon Plông', 'Kon Plong', 'Huyện Kon Plông', 'Kon Plong District', '14.802872050000001', '108.28906602563775', '1728791700'),
(310, 28, 'Kon Rẫy', 'Kon Ray', 'Huyện Kon Rẫy', 'Kon Ray District', '14.549714', '108.22796538044854', '1728791700'),
(311, 28, 'Kon Tum', 'Kon Tum', 'Thành phố Kon Tum', 'Kon Tum City', '14.3615256', '108.0039102', '1728791700'),
(312, 28, 'Ngọc Hồi', 'Ngoc Hoi', 'Huyện Ngọc Hồi', 'Ngoc Hoi District', '14.7393803', '107.6202686694541', '1728791700'),
(313, 28, 'Sa Thầy', 'Sa Thay', 'Huyện Sa Thầy', 'Sa Thay District', '14.4076248', '107.6761253555797', '1728791700'),
(314, 28, 'Tu Mơ Rông', 'Tu Mo Rong', 'Huyện Tu Mơ Rông', 'Tu Mo Rong District', '14.888138', '107.95530064051312', '1728791700'),
(315, 28, 'Đắk Glei', 'Dak Glei', 'Huyện Đắk Glei', 'Dak Glei District', '15.1373304', '107.81307660083922', '1728791700'),
(316, 28, 'Đắk Hà', 'Dak Ha', 'Huyện Đắk Hà', 'Dak Ha District', '14.6135965', '107.98777909485469', '1728791700'),
(317, 28, 'Đắk Tô', 'Dak To', 'Huyện Đắk Tô', 'Dak To District', '14.683446', '107.81012394848779', '1728791700'),
(318, 29, 'Lai Châu', 'Lai Chau', 'Thành phố Lai Châu', 'Lai Chau City', '22.3996612', '103.4516882', '1728791717'),
(319, 29, 'Mường Tè', 'Muong Te', 'Huyện Mường Tè', 'Muong Te District', '22.4731029', '102.65064164344365', '1728791717'),
(320, 29, 'Nậm Nhùn', 'Nam Nhun', 'Huyện Nậm Nhùn', 'Nam Nhun District', '22.255682550000003', '103.03090269938167', '1728791717'),
(321, 29, 'Phong Thổ', 'Phong Tho', 'Huyện Phong Thổ', 'Phong Tho District', '22.614415700000002', '103.33258751505245', '1728791717'),
(322, 29, 'Sìn Hồ', 'Sin Ho', 'Huyện Sìn Hồ', 'Sin Ho District', '22.25057715', '103.35271392142076', '1728791717'),
(323, 29, 'Tam Đường', 'Tam Duong', 'Huyện Tam Đường', 'Tam Duong District', '22.3300426', '103.61065135712238', '1728791717'),
(324, 29, 'Tân Uyên', 'Tan Uyen', 'Huyện Tân Uyên', 'Tan Uyen District', '22.12601495', '103.74486211042768', '1728791717'),
(325, 29, 'Than Uyên', 'Than Uyen', 'Huyện Than Uyên', 'Than Uyen District', '21.8838348', '103.80168115326606', '1728791717'),
(326, 30, 'Bảo Lâm', 'Bao Lam', 'Huyện Bảo Lâm', 'Bao Lam District', '11.64139135', '107.85002577276722', '1728791730'),
(327, 30, 'Bảo Lộc', 'Bao Loc', 'Thành phố Bảo Lộc', 'Bao Loc City', '11.5506941', '107.8092511', '1728791730'),
(328, 30, 'Cát Tiên', 'Cat Tien', 'Huyện Cát Tiên', 'Cat Tien District', '11.659204299999999', '107.36073456776663', '1728791730'),
(329, 30, 'Di Linh', 'Di Linh', 'Huyện Di Linh', 'Di Linh District', '11.51807355', '108.10975116647339', '1728791730'),
(330, 30, 'Lạc Dương', 'Lac Duong', 'Huyện Lạc Dương', 'Lac Duong District', '12.1213433', '108.52037461324952', '1728791730'),
(331, 30, 'Lâm Hà', 'Lam Ha', 'Huyện Lâm Hà', 'Lam Ha District', '11.8606211', '108.2842467234841', '1728791730'),
(332, 30, 'Đạ Huoai', 'Da Huoai', 'Huyện Đạ Huoai', 'Da Huoai District', '11.451768099999999', '107.6020437121067', '1728791730'),
(333, 30, 'Đà Lạt', 'Da Lat', 'Thành phố Đà Lạt', 'Da Lat City', '11.9402416', '108.4375758', '1728791730'),
(334, 30, 'Đạ Tẻh', 'Da Teh', 'Huyện Đạ Tẻh', 'Da Teh District', '11.56253805', '107.52703417234704', '1728791730'),
(335, 30, 'Đam Rông', 'Dam Rong', 'Huyện Đam Rông', 'Dam Rong District', '12.0322028', '108.13152114220921', '1728791730'),
(336, 30, 'Đơn Dương', 'Don Duong', 'Huyện Đơn Dương', 'Don Duong District', '11.8055661', '108.53871536260641', '1728791730'),
(337, 30, 'Đức Trọng', 'Duc Trong', 'Huyện Đức Trọng', 'Duc Trong District', '11.69510695', '108.31799232325629', '1728791730'),
(338, 31, 'Bắc Sơn', 'Bac Son', 'Huyện Bắc Sơn', 'Bac Son District', '21.8145798', '106.25099864741418', '1728791743'),
(339, 31, 'Bình Gia', 'Binh Gia', 'Huyện Bình Gia', 'Binh Gia District', '22.0584826', '106.2786565', '1728791743'),
(340, 31, 'Cao Lộc', 'Cao Loc', 'Huyện Cao Lộc', 'Cao Loc District', '21.884699599999998', '106.9078777030075', '1728791743'),
(341, 31, 'Chi Lăng', 'Chi Lang', 'Huyện Chi Lăng', 'Chi Lang District', '21.66646795', '106.59323985006756', '1728791743'),
(342, 31, 'Hữu Lũng', 'Huu Lung', 'Huyện Hữu Lũng', 'Huu Lung District', '21.574526499999997', '106.30657575285497', '1728791743'),
(343, 31, 'Lạng Sơn', 'Lang Son', 'Thành phố Lạng Sơn', 'Lang Son City', '21.8528759', '106.7597458', '1728791743'),
(344, 31, 'Lộc Bình', 'Loc Binh', 'Huyện Lộc Bình', 'Loc Binh District', '21.66952595', '106.91183779286854', '1728791743'),
(345, 31, 'Tràng Định', 'Trang Dinh', 'Huyện Tràng Định', 'Trang Dinh District', '22.3140466', '106.431038', '1728791743'),
(346, 31, 'Văn Lãng', 'Van Lang', 'Huyện Văn Lãng', 'Van Lang District', '22.0483039', '106.5998261', '1728791743'),
(347, 31, 'Văn Quan', 'Van Quan', 'Huyện Văn Quan', 'Van Quan District', '21.850786499999998', '106.55998350234555', '1728791743'),
(348, 31, 'Đình Lập', 'Dinh Lap', 'Huyện Đình Lập', 'Dinh Lap District', '21.533773949999997', '107.09079826601865', '1728791743'),
(349, 32, 'Bắc Hà', 'Bac Ha', 'Huyện Bắc Hà', 'Bac Ha District', '22.5023175', '104.30679141685135', '1728791756'),
(350, 32, 'Bảo Thắng', 'Bao Thang', 'Huyện Bảo Thắng', 'Bao Thang District', '22.378853', '104.17217418962038', '1728791756'),
(351, 32, 'Bảo Yên', 'Bao Yen', 'Huyện Bảo Yên', 'Bao Yen District', '22.294473', '104.41798633583858', '1728791756'),
(352, 32, 'Bát Xát', 'Bat Xat', 'Huyện Bát Xát', 'Bat Xat District', '22.59698695', '103.68841519489202', '1728791756'),
(353, 32, 'Lào Cai', 'Lao Cai', 'Thành phố Lào Cai', 'Lao Cai City', '22.4997452', '103.9656924', '1728791756'),
(354, 32, 'Mường Khương', 'Muong Khuong', 'Huyện Mường Khương', 'Muong Khuong District', '22.685684000000002', '104.10301604641003', '1728791756'),
(355, 32, 'Sa Pa', 'Sa Pa', 'Thị xã Sa Pa', 'Sa Pa Town', '22.315388300000002', '103.83997875550008', '1728791756'),
(356, 32, 'Si Ma Cai', 'Si Ma Cai', 'Huyện Si Ma Cai', 'Si Ma Cai District', '22.662294199999998', '104.27281354969163', '1728791756'),
(357, 32, 'Văn Bàn', 'Van Ban', 'Huyện Văn Bàn', 'Van Ban District', '22.0643428', '104.16914052211969', '1728791756'),
(358, 33, 'Bến Lức', 'Ben Luc', 'Huyện Bến Lức', 'Ben Luc District', '10.69335045', '106.45385666047355', '1728791780'),
(359, 33, 'Cần Giuộc', 'Can Giuoc', 'Huyện Cần Giuộc', 'Can Giuoc District', '10.5775983', '106.6657201868218', '1728791780'),
(360, 33, 'Cần Đước', 'Can Duoc', 'Huyện Cần Đước', 'Can Duoc District', '10.53832925', '106.60918353695934', '1728791780'),
(361, 33, 'Châu Thành', 'Chau Thanh', 'Huyện Châu Thành', 'Chau Thanh District', '10.463204350000002', '106.47687801970389', '1728791780'),
(362, 33, 'Kiến Tường', 'Kien Tuong', 'Thị xã Kiến Tường', 'Kien Tuong Town', '10.7780503', '105.9354002', '1728791780'),
(363, 33, 'Mộc Hóa', 'Moc Hoa', 'Huyện Mộc Hóa', 'Moc Hoa District', '10.757619250000001', '106.04067805682209', '1728791780'),
(364, 33, 'Tân An', 'Tan An', 'Thành phố Tân An', 'Tan An City', '10.5364717', '106.4099039', '1728791780'),
(365, 33, 'Tân Hưng', 'Tan Hung', 'Huyện Tân Hưng', 'Tan Hung District', '10.816386', '105.69488807962748', '1728791780'),
(366, 33, 'Tân Thạnh', 'Tan Thanh', 'Huyện Tân Thạnh', 'Tan Thanh District', '10.6277416', '105.9649122306184', '1728791780'),
(367, 33, 'Tân Trụ', 'Tan Tru', 'Huyện Tân Trụ', 'Tan Tru District', '10.5281207', '106.51565213384268', '1728791780'),
(368, 33, 'Thạnh Hóa', 'Thanh Hoa', 'Huyện Thạnh Hóa', 'Thanh Hoa District', '10.69351325', '106.13937304444073', '1728791780'),
(369, 33, 'Thủ Thừa', 'Thu Thua', 'Huyện Thủ Thừa', 'Thu Thua District', '10.660178', '106.3296895687021', '1728791780'),
(370, 33, 'Vĩnh Hưng', 'Vinh Hung', 'Huyện Vĩnh Hưng', 'Vinh Hung District', '10.89150225', '105.80061255356186', '1728791780'),
(371, 33, 'Đức Hòa', 'Duc Hoa', 'Huyện Đức Hòa', 'Duc Hoa District', '10.882814799999998', '106.43380220306233', '1728791780'),
(372, 33, 'Đức Huệ', 'Duc Hue', 'Huyện Đức Huệ', 'Duc Hue District', '10.865054', '106.25677281350906', '1728791780'),
(373, 34, 'Giao Thủy', 'Giao Thuy', 'Huyện Giao Thủy', 'Giao Thuy District', '20.24811305', '106.47429842251758', '1728791792'),
(374, 34, 'Hải Hậu', 'Hai Hau', 'Huyện Hải Hậu', 'Hai Hau District', '20.1228538', '106.24849271859472', '1728791792'),
(375, 34, 'Mỹ Lộc', 'My Loc', 'Huyện Mỹ Lộc', 'My Loc District', '20.454958599999998', '106.11072485406683', '1728791792'),
(376, 34, 'Nam Trực', 'Nam Truc', 'Huyện Nam Trực', 'Nam Truc District', '20.334464150000002', '106.21280624561578', '1728791792'),
(377, 34, 'Nam Định', 'Nam Dinh', 'Thành phố Nam Định', 'Nam Dinh City', '20.4232641', '106.1688515', '1728791792'),
(378, 34, 'Nghĩa Hưng', 'Nghia Hung', 'Huyện Nghĩa Hưng', 'Nghia Hung District', '20.1005413', '106.17526822430429', '1728791792'),
(379, 34, 'Trực Ninh', 'Truc Ninh', 'Huyện Trực Ninh', 'Truc Ninh District', '20.243564749999997', '106.21492058780298', '1728791792'),
(380, 34, 'Vụ Bản', 'Vu Ban', 'Huyện Vụ Bản', 'Vu Ban District', '20.38293865', '106.09987183473487', '1728791792'),
(381, 34, 'Xuân Trường', 'Xuan Truong', 'Huyện Xuân Trường', 'Xuan Truong District', '20.2972793', '106.37971276018536', '1728791792'),
(382, 34, 'Ý Yên', 'Y Yen', 'Huyện Ý Yên', 'Y Yen District', '20.32892715', '105.99704174849221', '1728791792'),
(383, 35, 'Anh Sơn', 'Anh Son', 'Huyện Anh Sơn', 'Anh Son District', '18.9669845', '105.10268915997932', '1728791807'),
(384, 35, 'Con Cuông', 'Con Cuong', 'Huyện Con Cuông', 'Con Cuong District', '19.0628106', '104.8232319584995', '1728791807'),
(385, 35, 'Cửa Lò', 'Cua Lo', 'Thị xã Cửa Lò', 'Cua Lo Town', '18.78974635', '105.72038883764972', '1728791807'),
(386, 35, 'Diễn Châu', 'Dien Chau', 'Huyện Diễn Châu', 'Dien Chau District', '19.021568000000002', '105.57809018508287', '1728791807'),
(387, 35, 'Hoàng Mai', 'Hoang Mai', 'Thị xã Hoàng Mai', 'Hoang Mai Town', '19.2684676', '105.7163991', '1728791807'),
(388, 35, 'Hưng Nguyên', 'Hung Nguyen', 'Huyện Hưng Nguyên', 'Hung Nguyen District', '18.685556849999998', '105.62395394235884', '1728791807'),
(389, 35, 'Kỳ Sơn', 'Ky Son', 'Huyện Kỳ Sơn', 'Ky Son District', '19.410235649999997', '104.18698456526376', '1728791807'),
(390, 35, 'Nam Đàn', 'Nam Dan', 'Huyện Nam Đàn', 'Nam Dan District', '18.67394455', '105.52351162918467', '1728791807'),
(391, 35, 'Nghi Lộc', 'Nghi Loc', 'Huyện Nghi Lộc', 'Nghi Loc District', '18.7932116', '105.5277696693013', '1728791807'),
(392, 35, 'Nghĩa Đàn', 'Nghia Dan', 'Huyện Nghĩa Đàn', 'Nghia Dan District', '19.354525449999997', '105.50936555658564', '1728791807'),
(393, 35, 'Quế Phong', 'Que Phong', 'Huyện Quế Phong', 'Que Phong District', '19.706955899999997', '104.8496428758482', '1728791807'),
(394, 35, 'Quỳ Châu', 'Quy Chau', 'Huyện Quỳ Châu', 'Quy Chau District', '19.53561835', '105.13297446709093', '1728791807'),
(395, 35, 'Quỳ Hợp', 'Quy Hop', 'Huyện Quỳ Hợp', 'Quy Hop District', '19.3227034', '105.1615275889626', '1728791807'),
(396, 35, 'Quỳnh Lưu', 'Quynh Luu', 'Huyện Quỳnh Lưu', 'Quynh Luu District', '19.23285405', '105.60004256673577', '1728791807'),
(397, 35, 'Tân Kỳ', 'Tan Ky', 'Huyện Tân Kỳ', 'Tan Ky District', '19.102774', '105.22124030146261', '1728791807'),
(398, 35, 'Thái Hoà', 'Thai Hoa', 'Thị xã Thái Hoà', 'Thai Hoa Town', '19.2949005', '105.4471800839254', '1728791807'),
(399, 35, 'Thanh Chương', 'Thanh Chuong', 'Huyện Thanh Chương', 'Thanh Chuong District', '18.735394', '105.22430726291302', '1728791807'),
(400, 35, 'Tương Dương', 'Tuong Duong', 'Huyện Tương Dương', 'Tuong Duong District', '19.320072250000003', '104.62894059889884', '1728791807'),
(401, 35, 'Vinh', 'Vinh', 'Thành phố Vinh', 'Vinh City', '18.6698528', '105.6840371', '1728791807'),
(402, 35, 'Yên Thành', 'Yen Thanh', 'Huyện Yên Thành', 'Yen Thanh District', '19.0232605', '105.41540765835353', '1728791807'),
(403, 35, 'Đô Lương', 'Do Luong', 'Huyện Đô Lương', 'Do Luong District', '18.9159875', '105.31406798494636', '1728791807'),
(404, 36, 'Gia Viễn', 'Gia Vien', 'Huyện Gia Viễn', 'Gia Vien District', '20.3298145', '105.87296756599235', '1728791823'),
(405, 36, 'Hoa Lư', 'Hoa Lu', 'Huyện Hoa Lư', 'Hoa Lu District', '20.2498818', '105.91648669262295', '1728791823'),
(406, 36, 'Kim Sơn', 'Kim Son', 'Huyện Kim Sơn', 'Kim Son District', '20.0240516', '106.08794668663856', '1728791823'),
(407, 36, 'Nho Quan', 'Nho Quan', 'Huyện Nho Quan', 'Nho Quan District', '20.31154495', '105.74858793941853', '1728791823'),
(408, 36, 'Ninh Bình', 'Ninh Binh', 'Thành phố Ninh Bình', 'Ninh Binh City', '20.2545421', '105.9764854', '1728791823'),
(409, 36, 'Tam Điệp', 'Tam Diep', 'Thành phố Tam Điệp', 'Tam Diep City', '20.160501699999998', '105.87570425998786', '1728791823'),
(410, 36, 'Yên Khánh', 'Yen Khanh', 'Huyện Yên Khánh', 'Yen Khanh District', '20.1897243', '106.09468715434625', '1728791823'),
(411, 36, 'Yên Mô', 'Yen Mo', 'Huyện Yên Mô', 'Yen Mo District', '20.1281337', '106.01227646164281', '1728791823'),
(412, 37, 'Bác Ái', 'Bac Ai', 'Huyện Bác Ái', 'Bac Ai District', '11.91202215', '108.86549491151803', '1728791835'),
(413, 37, 'Ninh Hải', 'Ninh Hai', 'Huyện Ninh Hải', 'Ninh Hai District', '11.67456415', '109.15270581576598', '1728791835'),
(414, 37, 'Ninh Phước', 'Ninh Phuoc', 'Huyện Ninh Phước', 'Ninh Phuoc District', '11.561746800000002', '108.88078907490012', '1728791835');
INSERT INTO `district` (`id`, `cityId`, `name`, `name_en`, `full_name`, `full_name_en`, `latitude`, `longitude`, `created_at`) VALUES
(415, 37, 'Ninh Sơn', 'Ninh Son', 'Huyện Ninh Sơn', 'Ninh Son District', '11.71070315', '108.80061719581064', '1728791835'),
(416, 37, 'Phan Rang-Tháp Chàm', 'Phan Rang-Thap Cham', 'Thành phố Phan Rang-Tháp Chàm', 'Phan Rang-Thap Cham City', '11.5769829', '108.9865391', '1728791835'),
(417, 37, 'Thuận Bắc', 'Thuan Bac', 'Huyện Thuận Bắc', 'Thuan Bac District', '11.74394535', '109.05885190846185', '1728791835'),
(418, 37, 'Thuận Nam', 'Thuan Nam', 'Huyện Thuận Nam', 'Thuan Nam District', '11.450913700000001', '108.88599379240121', '1728791835'),
(419, 38, 'Cẩm Khê', 'Cam Khe', 'Huyện Cẩm Khê', 'Cam Khe District', '21.384698399999998', '105.105453181571', '1728791851'),
(420, 38, 'Hạ Hoà', 'Ha Hoa', 'Huyện Hạ Hoà', 'Ha Hoa District', '21.587605500000002', '104.99851429279514', '1728791851'),
(421, 38, 'Lâm Thao', 'Lam Thao', 'Huyện Lâm Thao', 'Lam Thao District', '21.326521800000002', '105.28945037700699', '1728791851'),
(422, 38, 'Phù Ninh', 'Phu Ninh', 'Huyện Phù Ninh', 'Phu Ninh District', '21.456894499999997', '105.29949459528628', '1728791851'),
(423, 38, 'Phú Thọ', 'Phu Tho', 'Thị xã Phú Thọ', 'Phu Tho Town', '21.4000047', '105.2238899', '1728791851'),
(424, 38, 'Tam Nông', 'Tam Nong', 'Huyện Tam Nông', 'Tam Nong District', '21.307453000000002', '105.23023958738162', '1728791851'),
(425, 38, 'Tân Sơn', 'Tan Son', 'Huyện Tân Sơn', 'Tan Son District', '21.18988925', '104.98314082900026', '1728791851'),
(426, 38, 'Thanh Ba', 'Thanh Ba', 'Huyện Thanh Ba', 'Thanh Ba District', '21.45070665', '105.16626116492901', '1728791851'),
(427, 38, 'Thanh Sơn', 'Thanh Son', 'Huyện Thanh Sơn', 'Thanh Son District', '21.087268299999998', '105.19657036859971', '1728791851'),
(428, 38, 'Thanh Thuỷ', 'Thanh Thuy', 'Huyện Thanh Thuỷ', 'Thanh Thuy District', '21.123781', '105.28785795717657', '1728791851'),
(429, 38, 'Việt Trì', 'Viet Tri', 'Thành phố Việt Trì', 'Viet Tri City', '21.324231', '105.3881392', '1728791851'),
(430, 38, 'Yên Lập', 'Yen Lap', 'Huyện Yên Lập', 'Yen Lap District', '21.3722635', '104.9760095191688', '1728791851'),
(431, 38, 'Đoan Hùng', 'Doan Hung', 'Huyện Đoan Hùng', 'Doan Hung District', '21.6147084', '105.1561210741571', '1728791851'),
(432, 39, 'Phú Hoà', 'Phu Hoa', 'Huyện Phú Hoà', 'Phu Hoa District', '13.0680555', '109.19180131041166', '1728791872'),
(433, 39, 'Sơn Hòa', 'Son Hoa', 'Huyện Sơn Hòa', 'Son Hoa District', '13.2054008', '108.98742535620418', '1728791872'),
(434, 39, 'Sông Cầu', 'Song Cau', 'Thị xã Sông Cầu', 'Song Cau Town', '13.527341', '109.20002793644299', '1728791872'),
(435, 39, 'Sông Hinh', 'Song Hinh', 'Huyện Sông Hinh', 'Song Hinh District', '12.903483300000001', '108.89515231289286', '1728791872'),
(436, 39, 'Tây Hoà', 'Tay Hoa', 'Huyện Tây Hoà', 'Tay Hoa District', '12.91629825', '109.16367720663897', '1728791872'),
(437, 39, 'Tuy An', 'Tuy An', 'Huyện Tuy An', 'Tuy An District', '13.254778550000001', '109.21057086828677', '1728791872'),
(438, 39, 'Tuy Hoà', 'Tuy Hoa', 'Thành phố Tuy Hoà', 'Tuy Hoa City', '13.0877226', '109.2993584', '1728791872'),
(439, 39, 'Đông Hòa', 'Dong Hoa', 'Thị xã Đông Hòa', 'Dong Hoa Town', '12.9897858', '109.3335839', '1728791872'),
(440, 39, 'Đồng Xuân', 'Dong Xuan', 'Huyện Đồng Xuân', 'Dong Xuan District', '13.413046399999999', '108.97283038083101', '1728791872'),
(441, 40, 'Ba Đồn', 'Ba Don', 'Thị xã Ba Đồn', 'Ba Don Town', '17.7558925', '106.420438', '1728791884'),
(442, 40, 'Bố Trạch', 'Bo Trach', 'Huyện Bố Trạch', 'Bo Trach District', '17.4870298', '106.26205435398407', '1728791884'),
(443, 40, 'Lệ Thủy', 'Le Thuy', 'Huyện Lệ Thủy', 'Le Thuy District', '17.12671625', '106.74298138569763', '1728791884'),
(444, 40, 'Minh Hóa', 'Minh Hoa', 'Huyện Minh Hóa', 'Minh Hoa District', '17.734754549999998', '105.92044281772877', '1728791884'),
(445, 40, 'Quảng Ninh', 'Quang Ninh', 'Huyện Quảng Ninh', 'Quang Ninh District', '17.2541355', '106.49382210833164', '1728791884'),
(446, 40, 'Quảng Trạch', 'Quang Trach', 'Huyện Quảng Trạch', 'Quang Trach District', '17.87216885', '106.36244821515544', '1728791884'),
(447, 40, 'Tuyên Hóa', 'Tuyen Hoa', 'Huyện Tuyên Hóa', 'Tuyen Hoa District', '17.899741', '106.10430650862298', '1728791884'),
(448, 40, 'Đồng Hới', 'Dong Hoi', 'Thành phố Đồng Hới', 'Dong Hoi City', '17.4659566', '106.5984715', '1728791884'),
(449, 41, 'Bắc Trà My', 'Bac Tra My', 'Huyện Bắc Trà My', 'Bac Tra My District', '15.27711365', '108.1979448936211', '1728791898'),
(450, 41, 'Duy Xuyên', 'Duy Xuyen', 'Huyện Duy Xuyên', 'Duy Xuyen District', '15.794173', '108.16110539379136', '1728791898'),
(451, 41, 'Hiệp Đức', 'Hiep Duc', 'Huyện Hiệp Đức', 'Hiep Duc District', '15.5183414', '108.10260688584464', '1728791898'),
(452, 41, 'Hội An', 'Hoi An', 'Thành phố Hội An', 'Hoi An City', '15.8795863', '108.3319406', '1728791898'),
(453, 41, 'Nam Giang', 'Nam Giang', 'Huyện Nam Giang', 'Nam Giang District', '15.606755199999998', '107.60690407793076', '1728791898'),
(454, 41, 'Nam Trà My', 'Nam Tra My', 'Huyện Nam Trà My', 'Nam Tra My District', '15.13256875', '108.11440847853552', '1728791898'),
(455, 41, 'Nông Sơn', 'Nong Son', 'Huyện Nông Sơn', 'Nong Son District', '15.651498400000001', '107.99459611627468', '1728791898'),
(456, 41, 'Núi Thành', 'Nui Thanh', 'Huyện Núi Thành', 'Nui Thanh District', '15.4458044', '108.5596656564463', '1728791898'),
(457, 41, 'Phú Ninh', 'Phu Ninh', 'Huyện Phú Ninh', 'Phu Ninh District', '15.511074', '108.42703295569109', '1728791898'),
(458, 41, 'Phước Sơn', 'Phuoc Son', 'Huyện Phước Sơn', 'Phuoc Son District', '15.387219949999999', '107.83668584707358', '1728791898'),
(459, 41, 'Quế Sơn', 'Que Son', 'Huyện Quế Sơn', 'Que Son District', '15.7247795', '108.24741908024018', '1728791898'),
(460, 41, 'Tam Kỳ', 'Tam Ky', 'Thành phố Tam Kỳ', 'Tam Ky City', '15.5673735', '108.4842128', '1728791898'),
(461, 41, 'Tây Giang', 'Tay Giang', 'Huyện Tây Giang', 'Tay Giang District', '15.8951', '107.49799377743092', '1728791898'),
(462, 41, 'Thăng Bình', 'Thang Binh', 'Huyện Thăng Bình', 'Thang Binh District', '15.7077252', '108.39703627614333', '1728791898'),
(463, 41, 'Tiên Phước', 'Tien Phuoc', 'Huyện Tiên Phước', 'Tien Phuoc District', '15.4910852', '108.25550823586187', '1728791898'),
(464, 41, 'Đại Lộc', 'Dai Loc', 'Huyện Đại Lộc', 'Dai Loc District', '15.834066', '107.95424248403194', '1728791898'),
(465, 41, 'Điện Bàn', 'Dien Ban', 'Thị xã Điện Bàn', 'Dien Ban Town', '15.9039742', '108.2200836', '1728791898'),
(466, 41, 'Đông Giang', 'Dong Giang', 'Huyện Đông Giang', 'Dong Giang District', '15.9126695', '107.72595336169113', '1728791898'),
(467, 42, 'Ba Tơ', 'Ba To', 'Huyện Ba Tơ', 'Ba To District', '14.7153239', '108.74069865786889', '1728791911'),
(468, 42, 'Bình Sơn', 'Binh Son', 'Huyện Bình Sơn', 'Binh Son District', '15.311219300000001', '108.72835732335514', '1728791911'),
(469, 42, 'Minh Long', 'Minh Long', 'Huyện Minh Long', 'Minh Long District', '14.9464855', '108.67604038331649', '1728791911'),
(470, 42, 'Mộ Đức', 'Mo Duc', 'Huyện Mộ Đức', 'Mo Duc District', '14.9862642', '108.88860302779557', '1728791911'),
(471, 42, 'Nghĩa Hành', 'Nghia Hanh', 'Huyện Nghĩa Hành', 'Nghia Hanh District', '14.9669204', '108.79793659954498', '1728791911'),
(472, 42, 'Quảng Ngãi', 'Quang Ngai', 'Thành phố Quảng Ngãi', 'Quang Ngai City', '15.1190037', '108.8095598', '1728791911'),
(473, 42, 'Sơn Hà', 'Son Ha', 'Huyện Sơn Hà', 'Son Ha District', '14.974799149999999', '108.52441117506055', '1728791911'),
(474, 42, 'Sơn Tây', 'Son Tay', 'Huyện Sơn Tây', 'Son Tay District', '14.96943155', '108.35560467815029', '1728791911'),
(475, 42, 'Sơn Tịnh', 'Son Tinh', 'Huyện Sơn Tịnh', 'Son Tinh District', '15.19701665', '108.70910939035221', '1728791911'),
(476, 42, 'Trà Bồng', 'Tra Bong', 'Huyện Trà Bồng', 'Tra Bong District', '15.2087717', '108.45311719519509', '1728791911'),
(477, 42, 'Tư Nghĩa', 'Tu Nghia', 'Huyện Tư Nghĩa', 'Tu Nghia District', '15.0915895', '108.77171098920395', '1728791911'),
(478, 42, 'Đức Phổ', 'Duc Pho', 'Thị xã Đức Phổ', 'Duc Pho Town', '14.7495984', '108.9904739348329', '1728791911'),
(479, 43, 'Ba Chẽ', 'Ba Che', 'Huyện Ba Chẽ', 'Ba Che District', '21.2593235', '107.16438586465571', '1728791921'),
(480, 43, 'Bình Liêu', 'Binh Lieu', 'Huyện Bình Liêu', 'Binh Lieu District', '21.55009455', '107.44023870266739', '1728791921'),
(481, 43, 'Cẩm Phả', 'Cam Pha', 'Thành phố Cẩm Phả', 'Cam Pha City', '21.004432', '107.278029', '1728791921'),
(482, 43, 'Cô Tô', 'Co To', 'Huyện Cô Tô', 'Co To District', '21.11657565', '107.87102661748389', '1728791921'),
(483, 43, 'Hạ Long', 'Ha Long', 'Thành phố Hạ Long', 'Ha Long City', '20.9528365', '107.0800003', '1728791921'),
(484, 43, 'Hải Hà', 'Hai Ha', 'Huyện Hải Hà', 'Hai Ha District', '21.42685865', '107.71849145536592', '1728791921'),
(485, 43, 'Móng Cái', 'Mong Cai', 'Thành phố Móng Cái', 'Mong Cai City', '21.5290279', '107.9691594', '1728791921'),
(486, 43, 'Quảng Yên', 'Quang Yen', 'Thị xã Quảng Yên', 'Quang Yen Town', '20.9249192', '106.85651779735846', '1728791921'),
(487, 43, 'Tiên Yên', 'Tien Yen', 'Huyện Tiên Yên', 'Tien Yen District', '21.37342545', '107.38202727649063', '1728791921'),
(488, 43, 'Uông Bí', 'Uong Bi', 'Thành phố Uông Bí', 'Uong Bi City', '21.0414692', '106.7740261', '1728791921'),
(489, 43, 'Vân Đồn', 'Van Don', 'Huyện Vân Đồn', 'Van Don District', '20.981892449999997', '107.50001837522814', '1728791921'),
(490, 43, 'Đầm Hà', 'Dam Ha', 'Huyện Đầm Hà', 'Dam Ha District', '21.35619175', '107.59805574155416', '1728791921'),
(491, 43, 'Đông Triều', 'Dong Trieu', 'Thị xã Đông Triều', 'Dong Trieu Town', '21.1185246', '106.58053928233534', '1728791921'),
(492, 44, 'Cam Lộ', 'Cam Lo', 'Huyện Cam Lộ', 'Cam Lo District', '16.7847145', '106.94427505884894', '1728791934'),
(493, 44, 'Gio Linh', 'Gio Linh', 'Huyện Gio Linh', 'Gio Linh District', '16.91217625', '107.0450282007268', '1728791934'),
(494, 44, 'Hải Lăng', 'Hai Lang', 'Huyện Hải Lăng', 'Hai Lang District', '16.6840121', '107.26047761439295', '1728791934'),
(495, 44, 'Hướng Hóa', 'Huong Hoa', 'Huyện Hướng Hóa', 'Huong Hoa District', '16.703847500000002', '106.67767132317005', '1728791934'),
(496, 44, 'Quảng Trị', 'Quang Tri', 'Thị xã Quảng Trị', 'Quang Tri Town', '16.7546907', '107.1895518', '1728791934'),
(497, 44, 'Triệu Phong', 'Trieu Phong', 'Huyện Triệu Phong', 'Trieu Phong District', '16.776754750000002', '107.18762783891529', '1728791934'),
(498, 44, 'Vĩnh Linh', 'Vinh Linh', 'Huyện Vĩnh Linh', 'Vinh Linh District', '17.026848049999998', '106.96126319109172', '1728791934'),
(499, 44, 'Đa Krông', 'Da Krong', 'Huyện Đa Krông', 'Da Krong District', '16.56829855', '106.97956012608', '1728791934'),
(500, 44, 'Đông Hà', 'Dong Ha', 'Thành phố Đông Hà', 'Dong Ha City', '16.8172845', '107.1010378', '1728791934'),
(501, 45, 'Châu Thành', 'Chau Thanh', 'Huyện Châu Thành', 'Chau Thanh District', '9.6707768', '105.90512492011968', '1728791947'),
(502, 45, 'Cù Lao Dung', 'Cu Lao Dung', 'Huyện Cù Lao Dung', 'Cu Lao Dung District', '9.6321798', '106.18666681548703', '1728791947'),
(503, 45, 'Kế Sách', 'Ke Sach', 'Huyện Kế Sách', 'Ke Sach District', '9.82427045', '105.93976259931807', '1728791947'),
(504, 45, 'Long Phú', 'Long Phu', 'Huyện Long Phú', 'Long Phu District', '9.66256675', '106.05084422822979', '1728791947'),
(505, 45, 'Mỹ Tú', 'My Tu', 'Huyện Mỹ Tú', 'My Tu District', '9.622554300000001', '105.7684399368456', '1728791947'),
(506, 45, 'Mỹ Xuyên', 'My Xuyen', 'Huyện Mỹ Xuyên', 'My Xuyen District', '9.468457449999999', '105.87294332953378', '1728791947'),
(507, 45, 'Ngã Năm', 'Nga Nam', 'Thị xã Ngã Năm', 'Nga Nam Town', '9.52669535', '105.62104682051145', '1728791947'),
(508, 45, 'Sóc Trăng', 'Soc Trang', 'Thành phố Sóc Trăng', 'Soc Trang City', '9.6026724', '105.9733211', '1728791947'),
(509, 45, 'Thạnh Trị', 'Thanh Tri', 'Huyện Thạnh Trị', 'Thanh Tri District', '9.46700305', '105.69278944683467', '1728791947'),
(510, 45, 'Trần Đề', 'Tran De', 'Huyện Trần Đề', 'Tran De District', '9.49424815', '106.09403598386157', '1728791947'),
(511, 45, 'Vĩnh Châu', 'Vinh Chau', 'Thị xã Vĩnh Châu', 'Vinh Chau Town', '9.3238559', '105.980572', '1728791947'),
(512, 46, 'Bắc Yên', 'Bac Yen', 'Huyện Bắc Yên', 'Bac Yen District', '21.2224042', '104.38660816122893', '1728791957'),
(513, 46, 'Mai Sơn', 'Mai Son', 'Huyện Mai Sơn', 'Mai Son District', '21.168582999999998', '103.97103037410544', '1728791957'),
(514, 46, 'Mộc Châu', 'Moc Chau', 'Huyện Mộc Châu', 'Moc Chau District', '20.87105085', '104.62917893497627', '1728791957'),
(515, 46, 'Mường La', 'Muong La', 'Huyện Mường La', 'Muong La District', '21.52703995', '104.1116189369555', '1728791957'),
(516, 46, 'Phù Yên', 'Phu Yen', 'Huyện Phù Yên', 'Phu Yen District', '21.2249798', '104.67044491845093', '1728791957'),
(517, 46, 'Quỳnh Nhai', 'Quynh Nhai', 'Huyện Quỳnh Nhai', 'Quynh Nhai District', '21.776997899999998', '103.65989364112426', '1728791957'),
(518, 46, 'Sơn La', 'Son La', 'Thành phố Sơn La', 'Son La City', '21.3274048', '103.9151701', '1728791957'),
(519, 46, 'Sông Mã', 'Song Ma', 'Huyện Sông Mã', 'Song Ma District', '21.1017179', '103.59767000728036', '1728791957'),
(520, 46, 'Sốp Cộp', 'Sop Cop', 'Huyện Sốp Cộp', 'Sop Cop District', '20.8797426', '103.46612901728616', '1728791957'),
(521, 46, 'Thuận Châu', 'Thuan Chau', 'Huyện Thuận Châu', 'Thuan Chau District', '21.41564915', '103.58182067790997', '1728791957'),
(522, 46, 'Vân Hồ', 'Van Ho', 'Huyện Vân Hồ', 'Van Ho District', '20.80959885', '104.87323503174335', '1728791957'),
(523, 46, 'Yên Châu', 'Yen Chau', 'Huyện Yên Châu', 'Yen Chau District', '20.991933500000002', '104.33219199697885', '1728791957'),
(524, 47, 'Bến Cầu', 'Ben Cau', 'Huyện Bến Cầu', 'Ben Cau District', '11.1304229', '106.13997607249999', '1728791971'),
(525, 47, 'Châu Thành', 'Chau Thanh', 'Huyện Châu Thành', 'Chau Thanh District', '11.315718350000001', '105.97430124163768', '1728791971'),
(526, 47, 'Dương Minh Châu', 'Duong Minh Chau', 'Huyện Dương Minh Châu', 'Duong Minh Chau District', '11.32896105', '106.24960685904958', '1728791971'),
(527, 47, 'Gò Dầu', 'Go Dau', 'Huyện Gò Dầu', 'Go Dau District', '11.1598144', '106.25874852468166', '1728791971'),
(528, 47, 'Hòa Thành', 'Hoa Thanh', 'Thị xã Hòa Thành', 'Hoa Thanh Town', '11.2578497', '106.15014838452474', '1728791971'),
(529, 47, 'Tân Biên', 'Tan Bien', 'Huyện Tân Biên', 'Tan Bien District', '11.5852395', '105.96422909350332', '1728791971'),
(530, 47, 'Tân Châu', 'Tan Chau', 'Huyện Tân Châu', 'Tan Chau District', '11.5800269', '106.3026532655383', '1728791971'),
(531, 47, 'Tây Ninh', 'Tay Ninh', 'Thành phố Tây Ninh', 'Tay Ninh City', '11.3138286', '106.0964769', '1728791971'),
(532, 47, 'Trảng Bàng', 'Trang Bang', 'Thị xã Trảng Bàng', 'Trang Bang Town', '11.10466005', '106.38840563864738', '1728791971'),
(533, 48, 'Hưng Hà', 'Hung Ha', 'Huyện Hưng Hà', 'Hung Ha District', '20.5934597', '106.21843677154311', '1728791983'),
(534, 48, 'Kiến Xương', 'Kien Xuong', 'Huyện Kiến Xương', 'Kien Xuong District', '20.3967441', '106.42057075471456', '1728791983'),
(535, 48, 'Quỳnh Phụ', 'Quynh Phu', 'Huyện Quỳnh Phụ', 'Quynh Phu District', '20.647978600000002', '106.3630021418404', '1728791983'),
(536, 48, 'Thái Bình', 'Thai Binh', 'Thành phố Thái Bình', 'Thai Binh City', '20.449288', '106.3424893', '1728791983'),
(537, 48, 'Thái Thụy', 'Thai Thuy', 'Huyện Thái Thụy', 'Thai Thuy District', '20.54123525', '106.51081932008964', '1728791983'),
(538, 48, 'Tiền Hải', 'Tien Hai', 'Huyện Tiền Hải', 'Tien Hai District', '20.3768181', '106.52240546449468', '1728791983'),
(539, 48, 'Vũ Thư', 'Vu Thu', 'Huyện Vũ Thư', 'Vu Thu District', '20.4256828', '106.26253362431754', '1728791983'),
(540, 48, 'Đông Hưng', 'Dong Hung', 'Huyện Đông Hưng', 'Dong Hung District', '20.548813199999998', '106.33975983796992', '1728791983'),
(541, 49, 'Phổ Yên', 'Pho Yen', 'Thành phố Phổ Yên', 'Pho Yen City', '21.4517905', '105.75685279759244', '1728791994'),
(542, 49, 'Phú Bình', 'Phu Binh', 'Huyện Phú Bình', 'Phu Binh District', '21.492260700000003', '105.9615781522054', '1728791994'),
(543, 49, 'Phú Lương', 'Phu Luong', 'Huyện Phú Lương', 'Phu Luong District', '21.769590700000002', '105.71429477766767', '1728791994'),
(544, 49, 'Sông Công', 'Song Cong', 'Thành phố Sông Công', 'Song Cong City', '21.4912425', '105.82118483486346', '1728791994'),
(545, 49, 'Thái Nguyên', 'Thai Nguyen', 'Thành phố Thái Nguyên', 'Thai Nguyen City', '21.592477', '105.8435398', '1728791994'),
(546, 49, 'Võ Nhai', 'Vo Nhai', 'Huyện Võ Nhai', 'Vo Nhai District', '21.785756650000003', '105.98447120778604', '1728791994'),
(547, 49, 'Đại Từ', 'Dai Tu', 'Huyện Đại Từ', 'Dai Tu District', '21.60383565', '105.6118950564155', '1728791994'),
(548, 49, 'Định Hóa', 'Dinh Hoa', 'Huyện Định Hóa', 'Dinh Hoa District', '21.89639195', '105.62804920059747', '1728791994'),
(549, 49, 'Đồng Hỷ', 'Dong Hy', 'Huyện Đồng Hỷ', 'Dong Hy District', '21.6850346', '105.89615713883906', '1728791994'),
(550, 50, 'Bá Thước', 'Ba Thuoc', 'Huyện Bá Thước', 'Ba Thuoc District', '20.3794035', '105.27706290714849', '1728792005'),
(551, 50, 'Bỉm Sơn', 'Bim Son', 'Thị xã Bỉm Sơn', 'Bim Son Town', '20.0881155', '105.88137263124904', '1728792005'),
(552, 50, 'Cẩm Thủy', 'Cam Thuy', 'Huyện Cẩm Thủy', 'Cam Thuy District', '20.204455000000003', '105.44603597377555', '1728792005'),
(553, 50, 'Hà Trung', 'Ha Trung', 'Huyện Hà Trung', 'Ha Trung District', '20.0551795', '105.8113060040203', '1728792005'),
(554, 50, 'Hậu Lộc', 'Hau Loc', 'Huyện Hậu Lộc', 'Hau Loc District', '19.933526550000003', '105.87587489869841', '1728792005'),
(555, 50, 'Hoằng Hóa', 'Hoang Hoa', 'Huyện Hoằng Hóa', 'Hoang Hoa District', '19.8658262', '105.8659569600996', '1728792005'),
(556, 50, 'Lang Chánh', 'Lang Chanh', 'Huyện Lang Chánh', 'Lang Chanh District', '20.1488045', '105.13717532659646', '1728792005'),
(557, 50, 'Mường Lát', 'Muong Lat', 'Huyện Mường Lát', 'Muong Lat District', '20.5107846', '104.66287288198365', '1728792005'),
(558, 50, 'Nga Sơn', 'Nga Son', 'Huyện Nga Sơn', 'Nga Son District', '20.004185900000003', '105.9822497973085', '1728792005'),
(559, 50, 'Nghi Sơn', 'Nghi Son', 'Thị xã Nghi Sơn', 'Nghi Son Town', '19.4507834', '105.7801293', '1728792005'),
(560, 50, 'Ngọc Lặc', 'Ngoc Lac', 'Huyện Ngọc Lặc', 'Ngoc Lac District', '20.068114', '105.38811681922738', '1728792005'),
(561, 50, 'Như Thanh', 'Nhu Thanh', 'Huyện Như Thanh', 'Nhu Thanh District', '19.5878674', '105.565782525', '1728792005'),
(562, 50, 'Như Xuân', 'Nhu Xuan', 'Huyện Như Xuân', 'Nhu Xuan District', '19.597625899999997', '105.39804939202128', '1728792005'),
(563, 50, 'Nông Cống', 'Nong Cong', 'Huyện Nông Cống', 'Nong Cong District', '19.615583450000003', '105.68484311304357', '1728792005'),
(564, 50, 'Quan Hóa', 'Quan Hoa', 'Huyện Quan Hóa', 'Quan Hoa District', '20.4863721', '104.96679771128026', '1728792005'),
(565, 50, 'Quan Sơn', 'Quan Son', 'Huyện Quan Sơn', 'Quan Son District', '20.2540695', '104.82603973786325', '1728792005'),
(566, 50, 'Quảng Xương', 'Quang Xuong', 'Huyện Quảng Xương', 'Quang Xuong District', '19.6641797', '105.78532208552348', '1728792005'),
(567, 50, 'Sầm Sơn', 'Sam Son', 'Thành phố Sầm Sơn', 'Sam Son City', '19.7364901', '105.8989974', '1728792005'),
(568, 50, 'Thạch Thành', 'Thach Thanh', 'Huyện Thạch Thành', 'Thach Thanh District', '20.2110359', '105.63496621477333', '1728792005'),
(569, 50, 'Thanh Hóa', 'Thanh Hoa', 'Thành phố Thanh Hóa', 'Thanh Hoa City', '19.8076814', '105.7767437', '1728792005'),
(570, 50, 'Thiệu Hóa', 'Thieu Hoa', 'Huyện Thiệu Hóa', 'Thieu Hoa District', '19.8987215', '105.67481187026868', '1728792005'),
(571, 50, 'Thọ Xuân', 'Tho Xuan', 'Huyện Thọ Xuân', 'Tho Xuan District', '19.92639575', '105.48397602293954', '1728792005'),
(572, 50, 'Thường Xuân', 'Thuong Xuan', 'Huyện Thường Xuân', 'Thuong Xuan District', '19.914701549999997', '105.27232734835124', '1728792005'),
(573, 50, 'Triệu Sơn', 'Trieu Son', 'Huyện Triệu Sơn', 'Trieu Son District', '19.8021715', '105.59506089270678', '1728792005'),
(574, 50, 'Vĩnh Lộc', 'Vinh Loc', 'Huyện Vĩnh Lộc', 'Vinh Loc District', '20.0408855', '105.64896768729713', '1728792005'),
(575, 50, 'Yên Định', 'Yen Dinh', 'Huyện Yên Định', 'Yen Dinh District', '20.00772245', '105.59748730339766', '1728792005'),
(576, 50, 'Đông Sơn', 'Dong Son', 'Huyện Đông Sơn', 'Dong Son District', '19.7944329', '105.70183735109094', '1728792005'),
(577, 51, 'A Lưới', 'A Luoi', 'Huyện A Lưới', 'A Luoi District', '16.213504450000002', '107.33665914566114', '1728792018'),
(578, 51, 'Huế', 'Hue', 'Thành phố Huế', 'Hue City', '16.4639321', '107.5863388', '1728792018'),
(579, 51, 'Hương Thủy', 'Huong Thuy', 'Thị xã Hương Thủy', 'Huong Thuy Town', '16.4115408', '107.671579', '1728792018'),
(580, 51, 'Hương Trà', 'Huong Tra', 'Thị xã Hương Trà', 'Huong Tra Town', '16.40011605', '107.43979566731063', '1728792018'),
(581, 51, 'Nam Đông', 'Nam Dong', 'Huyện Nam Đông', 'Nam Dong District', '16.118737099999997', '107.68436081648454', '1728792018'),
(582, 51, 'Phong Điền', 'Phong Dien', 'Huyện Phong Điền', 'Phong Dien District', '16.5441388', '107.2657397029619', '1728792018'),
(583, 51, 'Phú Lộc', 'Phu Loc', 'Huyện Phú Lộc', 'Phu Loc District', '16.2891469', '107.86467718145337', '1728792018'),
(584, 51, 'Phú Vang', 'Phu Vang', 'Huyện Phú Vang', 'Phu Vang District', '16.4423967', '107.74402210205596', '1728792018'),
(585, 51, 'Quảng Điền', 'Quang Dien', 'Huyện Quảng Điền', 'Quang Dien District', '16.5891445', '107.512176991567', '1728792018'),
(586, 52, 'Cái Bè', 'Cai Be', 'Huyện Cái Bè', 'Cai Be District', '10.403675849999999', '105.94846527603222', '1728792029'),
(587, 52, 'Cai Lậy', 'Cai Lay', 'Thị xã Cai Lậy', 'Cai Lay Town', '10.4065174', '106.1195395', '1728792029'),
(588, 52, 'Cai Lậy', 'Cai Lay', 'Huyện Cai Lậy', 'Cai Lay District', '10.40340895', '106.06707385025794', '1728792029'),
(589, 52, 'Châu Thành', 'Chau Thanh', 'Huyện Châu Thành', 'Chau Thanh District', '10.4215052', '106.27227425078098', '1728792029'),
(590, 52, 'Chợ Gạo', 'Cho Gao', 'Huyện Chợ Gạo', 'Cho Gao District', '10.39521855', '106.50093353310416', '1728792029'),
(591, 52, 'Gò Công', 'Go Cong', 'Thị xã Gò Công', 'Go Cong Town', '10.3629555', '106.6767031', '1728792029'),
(592, 52, 'Gò Công Tây', 'Go Cong Tay', 'Huyện Gò Công Tây', 'Go Cong Tay District', '10.3546895', '106.58663997282127', '1728792029'),
(593, 52, 'Gò Công Đông', 'Go Cong Dong', 'Huyện Gò Công Đông', 'Go Cong Dong District', '10.381731049999999', '106.7483420264516', '1728792029'),
(594, 52, 'Mỹ Tho', 'My Tho', 'Thành phố Mỹ Tho', 'My Tho City', '10.3606197', '106.3658439', '1728792029'),
(595, 52, 'Tân Phú Đông', 'Tan Phu Dong', 'Huyện Tân Phú Đông', 'Tan Phu Dong District', '10.2516925', '106.6729886891093', '1728792029'),
(596, 52, 'Tân Phước', 'Tan Phuoc', 'Huyện Tân Phước', 'Tan Phuoc District', '10.509738200000001', '106.21126813442129', '1728792029'),
(597, 53, 'Càng Long', 'Cang Long', 'Huyện Càng Long', 'Cang Long District', '9.971343749999999', '106.21977059603705', '1728792051'),
(598, 53, 'Cầu Kè', 'Cau Ke', 'Huyện Cầu Kè', 'Cau Ke District', '9.85554115', '106.08141601476945', '1728792051'),
(599, 53, 'Cầu Ngang', 'Cau Ngang', 'Huyện Cầu Ngang', 'Cau Ngang District', '9.7866803', '106.45003817707516', '1728792051'),
(600, 53, 'Châu Thành', 'Chau Thanh', 'Huyện Châu Thành', 'Chau Thanh District', '9.8708826', '106.3385380312778', '1728792051'),
(601, 53, 'Duyên Hải', 'Duyen Hai', 'Huyện Duyên Hải', 'Duyen Hai District', '9.614739499999999', '106.39004860140875', '1728792051'),
(602, 53, 'Duyên Hải', 'Duyen Hai', 'Thị xã Duyên Hải', 'Duyen Hai Town', '9.6373988', '106.4963381', '1728792051'),
(603, 53, 'Tiểu Cần', 'Tieu Can', 'Huyện Tiểu Cần', 'Tieu Can District', '9.80886645', '106.20578427130695', '1728792051'),
(604, 53, 'Trà Cú', 'Tra Cu', 'Huyện Trà Cú', 'Tra Cu District', '9.70053865', '106.27688286882653', '1728792051'),
(605, 53, 'Trà Vinh', 'Tra Vinh', 'Thành phố Trà Vinh', 'Tra Vinh City', '9.9355829', '106.3397849', '1728792051'),
(606, 54, 'Chiêm Hóa', 'Chiem Hoa', 'Huyện Chiêm Hóa', 'Chiem Hoa District', '22.14925105', '105.30636016699103', '1728792071'),
(607, 54, 'Hàm Yên', 'Ham Yen', 'Huyện Hàm Yên', 'Ham Yen District', '22.09549305', '105.0112213842072', '1728792071'),
(608, 54, 'Lâm Bình', 'Lam Binh', 'Huyện Lâm Bình', 'Lam Binh District', '22.47717015', '105.2500563279977', '1728792071'),
(609, 54, 'Na Hang', 'Na Hang', 'Huyện Na Hang', 'Na Hang District', '22.44809945', '105.47132197668026', '1728792071'),
(610, 54, 'Sơn Dương', 'Son Duong', 'Huyện Sơn Dương', 'Son Duong District', '21.672045599999997', '105.36093643218709', '1728792071'),
(611, 54, 'Tuyên Quang', 'Tuyen Quang', 'Thành phố Tuyên Quang', 'Tuyen Quang City', '21.7879695', '105.217387', '1728792071'),
(612, 54, 'Yên Sơn', 'Yen Son', 'Huyện Yên Sơn', 'Yen Son District', '21.86403755', '105.37115790677196', '1728792071'),
(613, 55, 'Bình Minh', 'Binh Minh', 'Thị xã Bình Minh', 'Binh Minh Town', '10.0691302', '105.8228999', '1728792090'),
(614, 55, 'Bình Tân', 'Binh Tan', 'Huyện Bình Tân', 'Binh Tan District', '10.12939735', '105.77824680286953', '1728792090'),
(615, 55, 'Long Hồ', 'Long Ho', 'Huyện Long Hồ', 'Long Ho District', '10.23265135', '106.00828664811854', '1728792090'),
(616, 55, 'Mang Thít', 'Mang Thit', 'Huyện Mang Thít', 'Mang Thit District', '10.1830409', '106.09631241870511', '1728792090'),
(617, 55, 'Tam Bình', 'Tam Binh', 'Huyện Tam Bình', 'Tam Binh District', '10.06801615', '105.93857739225179', '1728792090'),
(618, 55, 'Trà Ôn', 'Tra On', 'Huyện Trà Ôn', 'Tra On District', '9.9878794', '106.00675183593961', '1728792090'),
(619, 55, 'Vĩnh Long', 'Vinh Long', 'Thành phố Vĩnh Long', 'Vinh Long City', '10.2544281', '105.9669665', '1728792090'),
(620, 55, 'Vũng Liêm', 'Vung Liem', 'Huyện Vũng Liêm', 'Vung Liem District', '10.0577136', '106.15917673383323', '1728792090'),
(621, 56, 'Bình Xuyên', 'Binh Xuyen', 'Huyện Bình Xuyên', 'Binh Xuyen District', '21.328893700000002', '105.66287085362845', '1728792105'),
(622, 56, 'Lập Thạch', 'Lap Thach', 'Huyện Lập Thạch', 'Lap Thach District', '21.4117345', '105.48613192880322', '1728792105'),
(623, 56, 'Phúc Yên', 'Phuc Yen', 'Thành phố Phúc Yên', 'Phuc Yen City', '21.2332705', '105.7035505', '1728792105'),
(624, 56, 'Sông Lô', 'Song Lo', 'Huyện Sông Lô', 'Song Lo District', '21.42559145', '105.41978519057625', '1728792105'),
(625, 56, 'Tam Dương', 'Tam Duong', 'Huyện Tam Dương', 'Tam Duong District', '21.360439200000002', '105.56362559272', '1728792105'),
(626, 56, 'Tam Đảo', 'Tam Dao', 'Huyện Tam Đảo', 'Tam Dao District', '21.45864045', '105.5903829249532', '1728792105'),
(627, 56, 'Vĩnh Tường', 'Vinh Tuong', 'Huyện Vĩnh Tường', 'Vinh Tuong District', '21.2487718', '105.49210963379441', '1728792105'),
(628, 56, 'Vĩnh Yên', 'Vinh Yen', 'Thành phố Vĩnh Yên', 'Vinh Yen City', '21.3088479', '105.5916322', '1728792105'),
(629, 56, 'Yên Lạc', 'Yen Lac', 'Huyện Yên Lạc', 'Yen Lac District', '21.2190517', '105.5794739', '1728792105'),
(630, 57, 'Lục Yên', 'Luc Yen', 'Huyện Lục Yên', 'Luc Yen District', '22.1112389', '104.72064323659544', '1728792121'),
(631, 57, 'Mù Căng Chải', 'Mu Cang Chai', 'Huyện Mù Căng Chải', 'Mu Cang Chai District', '21.8046757', '104.10644914098934', '1728792121'),
(632, 57, 'Nghĩa Lộ', 'Nghia Lo', 'Thị xã Nghĩa Lộ', 'Nghia Lo Town', '21.6064201', '104.5036951', '1728792121'),
(633, 57, 'Trạm Tấu', 'Tram Tau', 'Huyện Trạm Tấu', 'Tram Tau District', '21.51033155', '104.4713873917611', '1728792121'),
(634, 57, 'Trấn Yên', 'Tran Yen', 'Huyện Trấn Yên', 'Tran Yen District', '21.704917000000002', '104.75562249114842', '1728792121'),
(635, 57, 'Văn Chấn', 'Van Chan', 'Huyện Văn Chấn', 'Van Chan District', '21.5695739', '104.61828269296876', '1728792121'),
(636, 57, 'Văn Yên', 'Van Yen', 'Huyện Văn Yên', 'Van Yen District', '21.931317999999997', '104.57883597979314', '1728792121'),
(637, 57, 'Yên Bái', 'Yen Bai', 'Thành phố Yên Bái', 'Yen Bai City', '21.69611', '104.8752392', '1728792121'),
(638, 57, 'Yên Bình', 'Yen Binh', 'Huyện Yên Bình', 'Yen Binh District', '21.85933665', '104.93652707657826', '1728792121'),
(639, 58, 'Cẩm Lệ', 'Cam Le', 'Quận Cẩm Lệ', 'Cam Le District', '16.0153046', '108.2013088', '1728792133'),
(640, 58, 'Hải Châu', 'Hai Chau', 'Quận Hải Châu', 'Hai Chau District', '16.0589539', '108.2194844', '1728792133'),
(641, 58, 'Hòa Vang', 'Hoa Vang', 'Huyện Hòa Vang', 'Hoa Vang District', '16.06665445', '107.97380571659018', '1728792133'),
(642, 58, 'Liên Chiểu', 'Lien Chieu', 'Quận Liên Chiểu', 'Lien Chieu District', '16.0891126', '108.1420613', '1728792133'),
(643, 58, 'Ngũ Hành Sơn', 'Ngu Hanh Son', 'Quận Ngũ Hành Sơn', 'Ngu Hanh Son District', '16.010798', '108.253178', '1728792133'),
(644, 58, 'Sơn Trà', 'Son Tra', 'Quận Sơn Trà', 'Son Tra District', '16.0833029', '108.2389578', '1728792133'),
(645, 58, 'Thanh Khê', 'Thanh Khe', 'Quận Thanh Khê', 'Thanh Khe District', '16.0532116', '108.18581298146817', '1728792133'),
(646, 59, 'Buôn Hồ', 'Buon Ho', 'Thị xã Buôn Hồ', 'Buon Ho Town', '12.9187424', '108.2668299', '1728792150'),
(647, 59, 'Buôn Ma Thuột', 'Buon Ma Thuot', 'Thành phố Buôn Ma Thuột', 'Buon Ma Thuot City', '12.6796827', '108.0447368', '1728792150'),
(648, 59, 'Buôn Đôn', 'Buon Don', 'Huyện Buôn Đôn', 'Buon Don District', '12.878871100000001', '107.71243574736462', '1728792150'),
(649, 59, 'Cư Kuin', 'Cu Kuin', 'Huyện Cư Kuin', 'Cu Kuin District', '12.576936', '108.1799136614101', '1728792150'),
(650, 59, 'Cư M\'gar', 'Cu M\'gar', 'Huyện Cư M\'gar', 'Cu M\'gar District', '12.895628599999998', '108.07049553794454', '1728792150'),
(651, 59, 'Ea H\'leo', 'Ea H\'leo', 'Huyện Ea H\'leo', 'Ea H\'leo District', '13.23196935', '108.19922259424307', '1728792150'),
(652, 59, 'Ea Kar', 'Ea Kar', 'Huyện Ea Kar', 'Ea Kar District', '12.8041381', '108.50425736792246', '1728792150'),
(653, 59, 'Ea Súp', 'Ea Sup', 'Huyện Ea Súp', 'Ea Sup District', '13.1801411', '107.770971694899', '1728792150'),
(654, 59, 'Krông A Na', 'Krong A Na', 'Huyện Krông A Na', 'Krong A Na District', '12.49502175', '108.07896043710066', '1728792150'),
(655, 59, 'Krông Bông', 'Krong Bong', 'Huyện Krông Bông', 'Krong Bong District', '12.452118500000001', '108.48792056361884', '1728792150'),
(656, 59, 'Krông Búk', 'Krong Buk', 'Huyện Krông Búk', 'Krong Buk District', '13.0141651', '108.19396662321115', '1728792150'),
(657, 59, 'Krông Năng', 'Krong Nang', 'Huyện Krông Năng', 'Krong Nang District', '12.99383225', '108.37954867313312', '1728792150'),
(658, 59, 'Krông Pắc', 'Krong Pac', 'Huyện Krông Pắc', 'Krong Pac District', '12.6874914', '108.30641312776564', '1728792150'),
(659, 59, 'Lắk', 'Lak', 'Huyện Lắk', 'Lak District', '12.321455', '108.2240033485643', '1728792150'),
(660, 59, 'M\'Đrắk', 'M\'Drak', 'Huyện M\'Đrắk', 'M\'Drak District', '12.70303005', '108.83246599841269', '1728792150'),
(661, 60, 'Cư Jút', 'Cu Jut', 'Huyện Cư Jút', 'Cu Jut District', '12.68082335', '107.77078888113002', '1728792162'),
(662, 60, 'Gia Nghĩa', 'Gia Nghia', 'Thành phố Gia Nghĩa', 'Gia Nghia City', '12.0005986', '107.6960259', '1728792162'),
(663, 60, 'Krông Nô', 'Krong No', 'Huyện Krông Nô', 'Krong No District', '12.3702771', '107.8207701734367', '1728792162'),
(664, 60, 'Tuy Đức', 'Tuy Duc', 'Huyện Tuy Đức', 'Tuy Duc District', '12.133748449999999', '107.39251253679646', '1728792162'),
(665, 60, 'Đăk Glong', 'Dak Glong', 'Huyện Đăk Glong', 'Dak Glong District', '12.029534', '107.86620636500074', '1728792162'),
(666, 60, 'Đắk Mil', 'Dak Mil', 'Huyện Đắk Mil', 'Dak Mil District', '12.520194799999999', '107.70551993894316', '1728792162'),
(667, 60, 'Đắk R\'Lấp', 'Dak R\'Lap', 'Huyện Đắk R\'Lấp', 'Dak R\'Lap District', '11.900347', '107.52323965928558', '1728792162'),
(668, 60, 'Đắk Song', 'Dak Song', 'Huyện Đắk Song', 'Dak Song District', '12.23319525', '107.61778448167104', '1728792162'),
(669, 61, 'Mường Ảng', 'Muong Ang', 'Huyện Mường Ảng', 'Muong Ang District', '21.526797799999997', '103.25949991631711', '1728792174'),
(670, 61, 'Mường Chà', 'Muong Cha', 'Huyện Mường Chà', 'Muong Cha District', '21.8272713', '103.1428346145048', '1728792174'),
(671, 61, 'Mường Lay', 'Muong Lay', 'Thị xã Mường Lay', 'Muong Lay Town', '22.0484698', '103.1590651', '1728792174'),
(672, 61, 'Mường Nhé', 'Muong Nhe', 'Huyện Mường Nhé', 'Muong Nhe District', '22.26420765', '102.3731569116553', '1728792174'),
(673, 61, 'Nậm Pồ', 'Nam Po', 'Huyện Nậm Pồ', 'Nam Po District', '21.88501385', '102.80759165422444', '1728792174'),
(674, 61, 'Tủa Chùa', 'Tua Chua', 'Huyện Tủa Chùa', 'Tua Chua District', '21.9709478', '103.37740596517153', '1728792174'),
(675, 61, 'Tuần Giáo', 'Tuan Giao', 'Huyện Tuần Giáo', 'Tuan Giao District', '21.6456592', '103.37118850377689', '1728792174'),
(676, 61, 'Điện Biên', 'Dien Bien', 'Huyện Điện Biên', 'Dien Bien District', '21.255160850000003', '102.99158304282933', '1728792174'),
(677, 61, 'Điện Biên Phủ', 'Dien Bien Phu', 'Thành phố Điện Biên Phủ', 'Dien Bien Phu City', '21.3874893', '103.0185', '1728792174'),
(678, 61, 'Điện Biên Đông', 'Dien Bien Dong', 'Huyện Điện Biên Đông', 'Dien Bien Dong District', '21.23398865', '103.2629886910342', '1728792174'),
(679, 62, 'Biên Hòa', 'Bien Hoa', 'Thành phố Biên Hòa', 'Bien Hoa City', '10.9509538', '106.8226134', '1728792186'),
(680, 62, 'Cẩm Mỹ', 'Cam My', 'Huyện Cẩm Mỹ', 'Cam My District', '10.78402425', '107.26518247841848', '1728792186'),
(681, 62, 'Long Khánh', 'Long Khanh', 'Thành phố Long Khánh', 'Long Khanh City', '10.9335279', '107.2416829', '1728792186'),
(682, 62, 'Long Thành', 'Long Thanh', 'Huyện Long Thành', 'Long Thanh District', '10.761313600000001', '107.0206350972808', '1728792186'),
(683, 62, 'Nhơn Trạch', 'Nhon Trach', 'Huyện Nhơn Trạch', 'Nhon Trach District', '10.682195799999999', '106.8771041160569', '1728792186'),
(684, 62, 'Tân Phú', 'Tan Phu', 'Huyện Tân Phú', 'Tan Phu District', '11.379390749999999', '107.42947844616329', '1728792186'),
(685, 62, 'Thống Nhất', 'Thong Nhat', 'Huyện Thống Nhất', 'Thong Nhat District', '10.97456575', '107.15719307832879', '1728792186'),
(686, 62, 'Trảng Bom', 'Trang Bom', 'Huyện Trảng Bom', 'Trang Bom District', '10.98092085', '107.01899713781296', '1728792186'),
(687, 62, 'Vĩnh Cửu', 'Vinh Cuu', 'Huyện Vĩnh Cửu', 'Vinh Cuu District', '11.24275055', '107.05314430683094', '1728792186'),
(688, 62, 'Xuân Lộc', 'Xuan Loc', 'Huyện Xuân Lộc', 'Xuan Loc District', '10.927458', '107.43347297755236', '1728792186'),
(689, 62, 'Định Quán', 'Dinh Quan', 'Huyện Định Quán', 'Dinh Quan District', '11.2099682', '107.31387654969225', '1728792186'),
(690, 63, 'Cao Lãnh', 'Cao Lanh', 'Thành phố Cao Lãnh', 'Cao Lanh City', '10.4620322', '105.6357948', '1728792194'),
(691, 63, 'Cao Lãnh', 'Cao Lanh', 'Huyện Cao Lãnh', 'Cao Lanh District', '10.48045165', '105.7127577565384', '1728792194'),
(692, 63, 'Châu Thành', 'Chau Thanh', 'Huyện Châu Thành', 'Chau Thanh District', '10.22389145', '105.81108767180848', '1728792194'),
(693, 63, 'Hồng Ngự', 'Hong Ngu', 'Thành phố Hồng Ngự', 'Hong Ngu City', '10.8083867', '105.3417921', '1728792194'),
(694, 63, 'Hồng Ngự', 'Hong Ngu', 'Huyện Hồng Ngự', 'Hong Ngu District', '10.80288565', '105.29792515674406', '1728792194'),
(695, 63, 'Lai Vung', 'Lai Vung', 'Huyện Lai Vung', 'Lai Vung District', '10.244393599999999', '105.65851401759116', '1728792194'),
(696, 63, 'Lấp Vò', 'Lap Vo', 'Huyện Lấp Vò', 'Lap Vo District', '10.357108400000001', '105.60791080162488', '1728792194'),
(697, 63, 'Sa Đéc', 'Sa Dec', 'Thành phố Sa Đéc', 'Sa Dec City', '10.2943716', '105.7588147', '1728792194'),
(698, 63, 'Tam Nông', 'Tam Nong', 'Huyện Tam Nông', 'Tam Nong District', '10.73805725', '105.51420276256565', '1728792194'),
(699, 63, 'Tân Hồng', 'Tan Hong', 'Huyện Tân Hồng', 'Tan Hong District', '10.87866915', '105.48801795021626', '1728792194'),
(700, 63, 'Thanh Bình', 'Thanh Binh', 'Huyện Thanh Bình', 'Thanh Binh District', '10.6095651', '105.47864333850754', '1728792194'),
(701, 63, 'Tháp Mười', 'Thap Muoi', 'Huyện Tháp Mười', 'Thap Muoi District', '10.5605098', '105.81180989490429', '1728792194');

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `hospitalId` int(11) NOT NULL,
  `created_at` int(11) NOT NULL,
  `doctor_office` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`id`, `name`, `userId`, `hospitalId`, `created_at`, `doctor_office`) VALUES
(1, 'BAC SI LY', 4, 2, 1728534198, 'P3'),
(2, 'bác sĩ tiến ', 4, 2, 1728542292, 'p6'),
(4, 'bác sĩ tiến thanh', 4, 2, 1728545090, 'k9'),
(5, 'bác sĩ Lâm', 4, 3, 1728612033, 'p3');

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `patientId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `hospitalId` int(11) NOT NULL,
  `created_at` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `name`, `patientId`, `userId`, `hospitalId`, `created_at`) VALUES
(5, 'file-1735100194003-858788418.docx', 89, 8, 2, 1735100194),
(7, 'file-1735100410852-908879970.pdf', 89, 8, 2, 1735100410),
(9, 'file-1735102751299-64006877.docx', 91, 4, 2, 1735102751),
(10, 'file-1735360292874-456981910.mp4', 91, 8, 2, 1735360293),
(11, 'file-1735360360506-566948968.xlsx', 91, 8, 2, 1735360360);

-- --------------------------------------------------------

--
-- Table structure for table `history-login`
--

CREATE TABLE `history-login` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `action` varchar(255) NOT NULL,
  `ip` varchar(255) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `error` varchar(255) NOT NULL,
  `created_at` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `history-login`
--

INSERT INTO `history-login` (`id`, `email`, `password`, `action`, `ip`, `fullName`, `error`, `created_at`) VALUES
(2, 'admin@gmail.com', '@1q2w3e4r', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1730971676),
(3, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1730972138),
(4, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1730972339),
(5, 'admin@gmail.com', '@1q2w3e4', 'ERROR', '::1', '', 'Password không đúng', 1730972350),
(6, 'admin@gmail.cm', '@1q2w3e4r', 'ERROR', '::1', '', 'Email không tồn tại!', 1730972363),
(7, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1730973545),
(8, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1731027834),
(9, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1731027974),
(10, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1731056708),
(11, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1731056719),
(12, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1731057086),
(13, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1731143139),
(15, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1731287907),
(16, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1731317301),
(17, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1731317343),
(18, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1731373056),
(19, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1731373074),
(20, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1731401960),
(21, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1731401962),
(22, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1731459630),
(23, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1731459714),
(24, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1731634019),
(25, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1731634225),
(26, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1731663037),
(27, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1731663667),
(28, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1731738551),
(29, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1731741331),
(30, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1731804972),
(31, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1731806357),
(32, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1731891832),
(33, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1731892015),
(34, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1731899832),
(35, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1731899912),
(36, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1731922425),
(37, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1731979847),
(38, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1731987282),
(39, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1731999833),
(40, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1732064125),
(41, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1732088809),
(42, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1732088830),
(43, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1732150918),
(44, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1732151211),
(45, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1732156247),
(46, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1732157082),
(47, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1732180214),
(48, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1732237433),
(49, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1732243519),
(50, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1732266353),
(51, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1732496819),
(52, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1732509029),
(53, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1732525673),
(54, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1732583013),
(55, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1732584131),
(56, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1732613017),
(57, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1732613666),
(58, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1732669296),
(59, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1733106297),
(60, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1733106311),
(61, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1733373665),
(62, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1733446802),
(63, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1733446815),
(64, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1733475763),
(65, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1733534716),
(66, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1733563862),
(67, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1733705966),
(68, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1733797710),
(69, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1733817720),
(70, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1733965508),
(71, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1733991236),
(72, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1733992840),
(73, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1734051599),
(74, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1734310841),
(75, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1734311089),
(76, '', '', 'SUCCESS', '::1', 'Lễ Tân', '', 1734318271),
(77, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1734320883),
(78, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1734321358),
(79, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1734321485),
(80, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1734321530),
(81, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1734321561),
(82, '', '', 'SUCCESS', '::1', 'Lễ Tân', '', 1734322167),
(83, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1734323390),
(84, '', '', 'SUCCESS', '::1', 'Lễ Tân', '', 1734324395),
(85, '', '', 'SUCCESS', '::1', 'Lễ Tân', '', 1734324512),
(86, 'lanhuong@gmail.com', '123123@', 'ERROR', '::1', '', 'Email không tồn tại!', 1734324522),
(87, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1734324527),
(88, '', '', 'SUCCESS', '::1', 'Lễ Tân', '', 1734324718),
(89, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1734324829),
(90, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1734331872),
(91, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1734332503),
(92, '', '', 'SUCCESS', '::1', 'Mạnh', '', 1734332598),
(93, '', '', 'SUCCESS', '::1', 'Lễ Tân', '', 1734332762),
(94, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1734333878),
(95, '', '', 'SUCCESS', '::1', 'Mạnh', '', 1734334143),
(96, '', '', 'SUCCESS', '::1', 'Mạnh', '', 1734429268),
(97, '', '', 'SUCCESS', '::1', 'nguyên văn a', '', 1734430729),
(98, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1734430745),
(99, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1734430850),
(100, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1734483937),
(101, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1734483962),
(102, '', '', 'SUCCESS', '::1', 'Lễ Tân', '', 1734489053),
(103, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1734492291),
(104, '', '', 'SUCCESS', '42.114.130.72', 'Quản Trị Viên', '', 1734507304),
(105, '', '', 'SUCCESS', '113.161.81.19', 'Hương Lan', '', 1734507346),
(106, '', '', 'SUCCESS', '42.114.130.72', 'Lễ Tân', '', 1734507449),
(107, '', '', 'SUCCESS', '103.199.57.69', 'Quản Trị Viên', '', 1734507672),
(108, 'admin@gmail.com', '123123@', 'ERROR', '42.114.130.72', '', 'Password không đúng', 1734507704),
(109, '', '', 'SUCCESS', '42.114.130.72', 'Quản Trị Viên', '', 1734507712),
(110, '', '', 'SUCCESS', '103.199.57.69', 'Lễ Tân', '', 1734510045),
(111, '', '', 'SUCCESS', '103.199.57.69', 'Quản Trị Viên', '', 1734510951),
(112, '', '', 'SUCCESS', '42.114.130.72', 'nguyên văn a', '', 1734657303),
(113, '', '', 'SUCCESS', '113.161.81.19', 'Quản Trị Viên', '', 1735016372),
(114, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1735031294),
(115, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1735031865),
(116, '', '', 'SUCCESS', '::1', 'Lễ Tân', '', 1735033411),
(117, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1735035319),
(118, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1735089186),
(119, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1735089221),
(120, '', '', 'SUCCESS', '::1', 'Lễ Tân', '', 1735101920),
(121, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1735109103),
(122, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1735283260),
(123, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1735285936),
(124, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1735286046),
(125, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1735286213),
(126, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1735286273),
(127, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1735286684),
(128, 'huonglan@gmail.com', '12312', 'ERROR', '::1', '', 'Password không đúng', 1735286696),
(129, 'huonglan@gmail.com', '123124', 'ERROR', '::1', '', 'Password không đúng', 1735286700),
(130, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1735286951),
(131, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1735286951),
(132, 'huonglan@gmail.com', '1231', 'ERROR', '::1', '', 'Password không đúng', 1735286986),
(133, 'huonglan@gmail.com', '1231', 'ERROR', '::1', '', 'Password không đúng', 1735286986),
(134, 'huonglan@gmail.com', '123', 'ERROR', '::1', '', 'Password không đúng', 1735287025),
(135, 'huonglan@gmail.com', '123', 'ERROR', '::1', '', 'Password không đúng', 1735287025),
(136, 'huonglan@gmail.com', '123', 'ERROR', '::1', '', 'Password không đúng', 1735287037),
(137, 'huonglan@gmail.com', '123', 'ERROR', '::1', '', 'Password không đúng', 1735287037),
(138, 'huonglan@gmail.com', '12312', 'ERROR', '::1', '', 'Password không đúng', 1735287139),
(139, 'huonglan@gmail.com', '1231', 'ERROR', '::1', '', 'Password không đúng', 1735287171),
(140, 'huonglan@gmail.com', '1231', 'ERROR', '::1', '', 'Password không đúng', 1735287176),
(141, 'huonglan@gmail.com', '1231', 'ERROR', '::1', '', 'Password không đúng', 1735287177),
(142, 'huonglan@gmail.com', '1231', 'ERROR', '::1', '', 'Password không đúng', 1735287179),
(143, 'huonglan@gmail.com', '1231', 'ERROR', '::1', '', 'Password không đúng', 1735287181),
(144, 'huonglan@gmail.com', '1231sdfsdf', 'ERROR', '::1', '', 'Password không đúng', 1735287186),
(145, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1735287238),
(146, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1735287949),
(147, '', '', 'SUCCESS', '::1', 'Hương Lan', '', 1735356219),
(148, '', '', 'SUCCESS', '::1', 'Quản Trị Viên', '', 1735356314);

-- --------------------------------------------------------

--
-- Table structure for table `history-patient`
--

CREATE TABLE `history-patient` (
  `id` int(11) NOT NULL,
  `patientId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `yearOld` int(11) NOT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `content` text,
  `diseasesId` int(11) DEFAULT NULL,
  `departmentId` int(11) DEFAULT NULL,
  `mediaId` int(11) DEFAULT NULL,
  `cityId` int(11) DEFAULT NULL,
  `districtId` int(11) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `appointmentTime` int(11) DEFAULT NULL,
  `reminderTime` int(11) DEFAULT NULL,
  `note` text,
  `editregistrationTime` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `doctorId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `hospitalId` int(11) DEFAULT NULL,
  `chat` text,
  `created_at` int(11) DEFAULT NULL,
  `treatment` text,
  `record` text,
  `file` text,
  `action` varchar(255) DEFAULT NULL,
  `money` varchar(125) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `history-patient`
--

INSERT INTO `history-patient` (`id`, `patientId`, `name`, `gender`, `yearOld`, `phone`, `content`, `diseasesId`, `departmentId`, `mediaId`, `cityId`, `districtId`, `code`, `appointmentTime`, `reminderTime`, `note`, `editregistrationTime`, `status`, `doctorId`, `userId`, `hospitalId`, `chat`, `created_at`, `treatment`, `record`, `file`, `action`, `money`) VALUES
(41, 34, 'LÊ VĂN ĂN', 'NAM', 35, '0809809', 'nôi dung tư vấn', 9, 1, 2, 22, 241, 'f22', 1730998800, 1730480400, NULL, 1730453270, NULL, NULL, 3, 2, NULL, 1730453270, NULL, NULL, '', 'THÊM', ''),
(42, 34, 'LÊ VĂN ĂN', 'NAM', 35, '080980900', 'nôi dung tư vấn', 9, 1, 2, 22, 241, 'f22', 1730998800, 1730480400, NULL, 1730453270, 'CHỜ ĐỢI', NULL, 3, 2, NULL, 1730453350, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(43, 34, 'LÊ VĂN ĂN', 'NAM', 35, '080980900', 'nôi dung tư vấn', 9, 1, 2, 22, 241, 'f22', 1730998800, 1730480400, NULL, 1730453270, 'CHỜ ĐỢI', NULL, 4, 2, NULL, 1730453379, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(44, 28, 'nguyễn văn Cảnh', 'NAM', 23, '09080706', NULL, 6, 1, 3, 8, 69, 'ád', 1730394000, 1730307600, NULL, 1730370725, NULL, NULL, 3, 2, NULL, 1730453547, 'null', NULL, '', 'XÓA', ''),
(45, 29, 'test', 'NỮ', 34, '08098098098', NULL, 20, 2, 3, 8, 69, 'adsa', 1730998800, 1730826000, NULL, 1730424089, NULL, NULL, 3, 2, NULL, 1730453554, 'null', NULL, '', 'XÓA', ''),
(46, 34, 'LÊ VĂN ĂN', 'NAM', 35, '080980900', 'nôi dung tư vấn', 9, 1, 2, 22, 241, 'f22', 1730998800, 1730480400, 'cxzczxcxz', 1730453270, 'CHỜ ĐỢI', 4, 3, 2, NULL, 1730455443, '\"[\\\"mục 2\\\"]\"', NULL, '', 'CẬP NHẬT', ''),
(47, 34, 'LÊ VĂN ĂN', 'NAM', 35, '080980900', 'nôi dung tư vấn', 9, 1, 2, 22, 241, 'f22', 1730998800, 1730480400, 'cxzczxcxz', 1730712470, 'CHỜ ĐỢI', 4, 3, 2, NULL, 1730457175, '\"[\\\"mục 2\\\"]\"', NULL, '', 'CẬP NHẬT', ''),
(48, 34, 'LÊ VĂN ĂN', 'NAM', 35, '080980900', 'nôi dung tư vấn 1', 9, 1, 2, 22, 241, 'f22', 1730998800, 1730480400, 'cxzczxcxz', 1730712470, 'CHỜ ĐỢI', 4, 3, 2, NULL, 1730511949, '\"[\\\"mục 2\\\"]\"', NULL, '', 'CẬP NHẬT', ''),
(49, 32, 'new re', 'NAM', 45, '09080706', 'áda', 14, 2, 2, 62, 686, 'â', 1732122000, 1732035600, 'ádasd', 1730424853, 'CHƯA ĐẾN', NULL, 3, 2, NULL, 1730515785, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(50, 25, 'bệnh mới 12', 'NỮ', 23, '09080706', 'ád', 4, 1, 3, 7, 60, 'a', 1730394000, 1730221200, NULL, 1730370295, NULL, NULL, 3, 2, NULL, 1730518946, 'null', NULL, '', 'XÓA', ''),
(51, 21, 'new', 'NỮ', 345, '08098098098', NULL, 13, 5, 2, 33, 365, 'eqwe', 1730394000, 1730307600, NULL, 1730369715, NULL, NULL, 3, 2, NULL, 1730519397, 'null', NULL, '', 'XÓA', ''),
(52, 34, 'LÊ VĂN ĂN', 'NAM', 35, '080980900', 'nôi dung tư vấn 1', 9, 1, 2, 22, 241, 'f22', 1730998800, 1730480400, 'cxzczxcxz', 1730712470, 'KHÔNG XÁC ĐỊNH', 4, 4, 2, NULL, 1730520021, '\"[\\\"mục 2\\\"]\"', NULL, '', 'CẬP NHẬT', ''),
(53, 15, 'sadsad test', 'NỮ', 23, '09080706', NULL, 14, 2, 1, 7, 60, 'ádsa', 1730480400, 1730394000, NULL, 1730367608, 'KHÔNG XÁC ĐỊNH', NULL, 3, 2, NULL, 1730520650, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(54, 35, 'Nguyễn Thị Mỹ', 'NỮ', 34, '09080706', NULL, 19, 2, 2, 55, 618, 'f5', 1730566800, 1730491200, NULL, 1730532408, NULL, NULL, 3, 2, NULL, 1730532408, NULL, NULL, '', 'THÊM', ''),
(55, 35, 'Nguyễn Thị Mỹ', 'NỮ', 34, '09080706', NULL, 19, 2, 2, 55, 618, 'f5', 1730566800, 1730491200, NULL, 1730532408, 'CHỜ ĐỢI', NULL, 3, 2, NULL, 1730532451, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(56, 10, 'test 1', 'KHÔNG XÁC ĐỊNH', 45, '09080706', 'ádsa', 14, 2, 2, 8, 69, 'fv', 1730394000, 1730307600, NULL, 1729530000, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1730538584, '\"[\\\"hậu môn\\\",\\\"ád\\\"]\"', NULL, '', 'CẬP NHẬT', ''),
(57, 35, 'Nguyễn Thị Mỹ', 'NỮ', 34, '09080706', NULL, 19, 2, 2, 55, 618, 'f5', 1730566800, 1730491200, NULL, 1730532408, 'ĐÃ ĐẾN', 1, 3, 2, NULL, 1730540999, '\"[null]\"', NULL, '', 'CẬP NHẬT', ''),
(58, 36, 'test', 'NỮ', 34, '01234666', NULL, 15, 2, 2, 7, 60, 'f5', 1730739600, 1730739600, NULL, 1730716025, NULL, NULL, 3, 2, NULL, 1730716025, NULL, NULL, '', 'THÊM', ''),
(59, 36, 'test', 'NỮ', 34, '01234666', NULL, 15, 2, 2, 7, 60, 'f5', 1730739600, 1730739600, NULL, 1730716025, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1730716076, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(60, 37, 'Nguyễn Thị A', 'NỮ', 23, '012345678', NULL, 14, 2, 4, 23, 249, 'f66', 1730851200, 1730653200, NULL, 1730791645, NULL, NULL, 3, 2, NULL, 1730791645, NULL, NULL, '', 'THÊM', ''),
(61, 37, 'Nguyễn Thị A', 'NỮ', 23, '012345678', NULL, 14, 2, 4, 23, 249, 'f66', 1730851200, 1730653200, NULL, 1730791645, NULL, NULL, 3, 2, NULL, 1730792616, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(62, 37, 'Nguyễn Thị A', 'NỮ', 23, '012345678', NULL, 14, 2, 4, 23, 257, 'f66', 1730851200, 1730653200, NULL, 1730791645, NULL, NULL, 3, 2, NULL, 1730792653, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(63, 37, 'Nguyễn Thị A', 'NỮ', 23, '012345678', NULL, 14, 2, 4, 23, 245, 'f66', 1730851200, 1730653200, NULL, 1730791645, NULL, NULL, 3, 2, NULL, 1730792682, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(64, 38, 'lun', 'NAM', 35, '3232133213', NULL, 7, 1, 2, 7, 60, 'fcv', 1731394800, 1731387600, NULL, 1731384789, NULL, NULL, 4, 2, NULL, 1731384789, NULL, NULL, '', 'THÊM', ''),
(65, 38, 'lun', 'NAM', 35, '3232133213', NULL, 7, 1, 2, 7, 60, 'fcv', 1731394800, 1731387600, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 4, 2, NULL, 1731400909, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(66, 38, 'lun', 'NAM', 35, '3232133213', NULL, 7, 1, 2, 7, 60, 'fcv', 1731394800, 0, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1731746942, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(67, 38, 'lun', 'NAM', 35, '3232133213', NULL, 7, 1, 2, 7, 60, 'fcv', 1731394800, 1731747223, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1731747223, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(68, 38, 'lun', 'NAM', 35, '3232133213', NULL, 7, 1, 2, 7, 60, 'fcv', 1731394800, 1731747223, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1731747349, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(69, 37, 'Nguyễn Thị A', 'NỮ', 23, '012345678', NULL, 14, 2, 4, 23, 245, 'f66', 1730851200, 1730653200, NULL, 1730791645, NULL, NULL, 3, 2, NULL, 1731747446, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(70, 38, 'lun', 'NAM', 35, '3232133213', NULL, 7, 1, 2, 7, 60, 'fcv', 1731394800, 1731747223, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1731747562, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(71, 38, 'lun', 'NAM', 35, '3232133213', NULL, 7, 1, 2, 7, 60, 'fcv', 1731394800, 1731747223, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1731747606, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(72, 38, 'lun', 'NAM', 35, '3232133213', NULL, 7, 1, 2, 7, 60, 'fcv', 1731394800, 0, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1731747873, '\"null\"', NULL, '', 'CẬP NHẬT', '100'),
(73, 38, 'lun', 'NAM', 35, '3232133213', NULL, 7, 1, 2, 7, 60, 'fcv', 1731394800, 1731747923, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1731747923, '\"null\"', NULL, '', 'CẬP NHẬT', '200'),
(74, 36, 'test', 'NỮ', 34, '01234666', NULL, 15, 2, 2, 7, 60, 'f5', 1730739600, 1730739600, NULL, 1730716025, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1731747988, '\"null\"', NULL, '', 'CẬP NHẬT', '200'),
(75, 38, 'lun', 'NAM', 35, '3232133213', NULL, 7, 1, 2, 7, 60, 'fcv', 1731394800, 0, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1731748137, '\"null\"', NULL, '', 'CẬP NHẬT', '0'),
(76, 38, 'lun', 'NAM', 35, '3232133213', NULL, 7, 1, 2, 7, 60, 'fcv', 1731394800, 1731748264, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1731748264, '\"null\"', NULL, '', 'CẬP NHẬT', '300'),
(77, 38, 'lun', 'NAM', 35, '3232133213', NULL, 7, 1, 2, 7, 60, 'fcv', 1731394800, 0, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1731748375, '\"null\"', NULL, '', 'CẬP NHẬT', '300'),
(78, 38, 'lun', 'NAM', 35, '3232133213', NULL, 7, 1, 2, 7, 60, 'fcv', 1731394800, 1731748385, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1731748385, '\"null\"', NULL, '', 'CẬP NHẬT', '300'),
(79, 38, 'lun', 'NAM', 35, '3232133213', NULL, 7, 1, 2, 7, 60, 'fcv', 1731394800, 0, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1731748429, '\"null\"', NULL, '', 'CẬP NHẬT', '300'),
(80, 38, 'lun', 'NAM', 35, '3232133213', NULL, 7, 1, 2, 7, 60, 'fcv', 1731394800, 0, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1731748434, '\"null\"', NULL, '', 'CẬP NHẬT', '300'),
(81, 38, 'lun', 'NAM', 35, '3232133213', NULL, 7, 1, 2, 7, 60, 'fcv', 1731394800, 1731614584, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1731748452, '\"null\"', NULL, '', 'CẬP NHẬT', '300'),
(82, 38, 'lun', 'NAM', 35, '3232133213', NULL, 7, 1, 2, 7, 60, 'fcv', 1731394800, 0, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1731748459, '\"null\"', NULL, '', 'CẬP NHẬT', '300'),
(83, 27, 'bệnh mới 12', 'NỮ', 23, '09080706', 'ád', 4, 1, 3, 7, 60, 'a', 1730394000, 1730221200, NULL, 1730370408, NULL, NULL, 3, 2, NULL, 1731749269, '\"null\"', NULL, '', 'CẬP NHẬT', '0'),
(84, 37, 'Nguyễn Thị A', 'NỮ', 23, '012345678', NULL, 14, 2, 4, 23, 245, 'f66', 1730851200, 1730653200, NULL, 1730791645, NULL, NULL, 3, 2, NULL, 1731749278, '\"null\"', NULL, '', 'CẬP NHẬT', '0'),
(85, 37, 'Nguyễn Thị A', 'NỮ', 23, '012345678', NULL, 14, 2, 4, 23, 245, 'f66', 1730851200, 1730653200, NULL, 1730791645, NULL, NULL, 3, 2, NULL, 1731749350, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(86, 37, 'Nguyễn Thị A', 'NỮ', 23, '012345678', NULL, 14, 2, 4, 23, 245, 'f66', 1730851200, 1730653200, NULL, 1730791645, NULL, NULL, 3, 2, NULL, 1731749357, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(87, 38, 'lun', 'NAM', 35, '3232133213', 'ádasd', 7, 1, 2, 7, 60, 'fcv', 1731394800, 0, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1731812017, '\"null\"', NULL, '', 'CẬP NHẬT', '300'),
(88, 38, 'lun', 'NAM', 35, '3232133213', 'ádasd', 7, 1, 2, 7, 60, 'fcv', 1731394800, 0, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1731817627, '\"null\"', 'ádas', '', 'CẬP NHẬT', '300'),
(89, 6, 'new 1', 'NỮ', 45, '08098098098', NULL, 37, 7, 1, 6, 51, 'f4', 1730307600, 1730138400, NULL, 1730173706, NULL, NULL, 3, 3, NULL, 1731892582, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(90, 6, 'new 1', 'NỮ', 45, '08098098098', NULL, 37, 7, 1, 6, 51, 'f4', 1730307600, 1730138400, NULL, 1730173706, 'CHỜ ĐỢI', NULL, 3, 3, NULL, 1731892599, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(91, 6, 'new 1', 'NỮ', 45, '08098098098', NULL, 37, 7, 1, 6, 51, 'f4', 1730307600, 1730138400, NULL, 1730173706, 'ĐÃ ĐẾN', NULL, 3, 3, NULL, 1731892618, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(92, 6, 'new 1', 'NỮ', 45, '08098098098', NULL, 37, 7, 1, 6, 51, 'f4', 1730307600, 1730138400, NULL, 1730173706, 'ĐÃ ĐẾN', NULL, 3, 3, NULL, 1731892794, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(93, 6, 'new 1', 'NỮ', 45, '08098098098', NULL, 37, 7, 1, 6, 51, 'f4', 1730307600, 1730138400, NULL, 1730173706, 'CHƯA ĐẾN', NULL, 3, 3, NULL, 1731892800, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(94, 6, 'new 1', 'NỮ', 45, '08098098098', NULL, 37, 7, 1, 6, 51, 'f4', 1730307600, 1730138400, NULL, 1730173706, 'ĐÃ ĐẾN', NULL, 3, 3, NULL, 1731892807, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(95, 6, 'new 1', 'NỮ', 45, '08098098098', NULL, 37, 7, 1, 6, 51, 'f4', 1730307600, 1730138400, NULL, 1730173706, 'ĐÃ ĐẾN', NULL, 3, 3, NULL, 1731892848, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(96, 37, 'Nguyễn Thị A', 'NỮ', 23, '012345678', NULL, 14, 2, 4, 23, 245, 'f66', 1730851200, 1730653200, NULL, 1730791645, 'ĐÃ ĐẾN', NULL, 4, 2, NULL, 1731892912, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(97, 37, 'Nguyễn Thị A', 'NỮ', 23, '012345678', NULL, 14, 2, 4, 23, 245, 'f66', 1730851200, 1730653200, NULL, 1730791645, 'ĐÃ ĐẾN', NULL, 4, 2, NULL, 1731892981, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(98, 37, 'Nguyễn Thị A', 'NỮ', 23, '012345678', NULL, 14, 2, 4, 23, 245, 'f66', 1730851200, 1730653200, NULL, 1730791645, 'ĐÃ ĐẾN', NULL, 4, 2, NULL, 1731893137, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(99, 37, 'Nguyễn Thị A', 'NỮ', 23, '012345678', NULL, 14, 2, 4, 23, 245, 'f66', 1730851200, 1730653200, NULL, 1730791645, 'ĐÃ ĐẾN', NULL, 4, 2, NULL, 1731893148, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(100, 37, 'Nguyễn Thị A', 'NỮ', 23, '012345678', NULL, 14, 2, 4, 23, 245, 'f66', 1730851200, 1730653200, NULL, 1730791645, 'ĐÃ ĐẾN', NULL, 4, 2, NULL, 1731893199, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(101, 37, 'Nguyễn Thị A', 'NỮ', 23, '012345678', NULL, 14, 2, 4, 23, 245, 'f66', 1730851200, 1730653200, NULL, 1730791645, 'ĐÃ ĐẾN', NULL, 4, 2, NULL, 1731893580, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(102, 37, 'Nguyễn Thị A', 'NỮ', 23, '012345678', NULL, 14, 2, 4, 23, 245, 'f66', 1730851200, 0, NULL, 1730791645, 'ĐÃ ĐẾN', 1, 4, 2, NULL, 1731893640, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(103, 39, 'test', 'NỮ', 34, '08098098098', 'dá', 37, 7, 8, 8, 69, 'dc', 1731920400, 1731862800, NULL, 1731896400, NULL, NULL, 3, 3, NULL, 1731896400, NULL, NULL, '', 'THÊM', ''),
(104, 39, 'test', 'NỮ', 34, '08098098098', 'dá', 37, 7, 8, 8, 69, 'dc', 1731920400, 1731862800, NULL, 1731896400, 'ĐÃ ĐẾN', 5, 3, 3, NULL, 1731896431, '\"null\"', NULL, '', 'CẬP NHẬT', ''),
(105, 5, 'new', 'NAM', 12, '08098098098', NULL, 37, 7, 1, 33, 361, 'f12', 1730307600, 1730307600, NULL, 1730172258, 'ĐÃ ĐẾN', 5, 3, 3, NULL, 1731897953, '\"null\"', NULL, '', 'CẬP NHẬT', '100'),
(106, 34, 'LÊ VĂN ĂN', 'NAM', 35, '080980900', 'nôi dung tư vấn 1', 9, 1, 2, 22, 241, 'f22', 1730998800, 1730480400, 'cxzczxcxz', 1730712470, 'ĐÃ ĐẾN', 4, 4, 2, NULL, 1731923061, '\"[\\\"mục 2\\\"]\"', NULL, '', 'CẬP NHẬT', '1000'),
(107, 40, 'alo', 'NỮ', 34, '0809809', NULL, 37, 7, 8, 8, 69, 'f45', 1731978480, 1731967500, 'ádasdas', 1731923787, NULL, NULL, 4, 3, NULL, 1731923787, NULL, NULL, '', 'THÊM', ''),
(108, 40, 'alo', 'NỮ', 34, '0809809', NULL, 37, 7, 8, 8, 69, 'f45', 1731978480, 1731967500, 'ádasdas', 1731923787, 'ĐÃ ĐẾN', 5, 4, 3, NULL, 1731923831, '\"null\"', NULL, '', 'CẬP NHẬT', '400'),
(109, 41, 'thu', 'NỮ', 23, '01234666', '', 3, 1, 1, 7, NULL, 'f23', 1731949200, 1731862800, '', 0, '', NULL, 4, 2, NULL, 1732011008, '\"[]\"', NULL, NULL, 'CẬP NHẬT', ''),
(110, 41, 'thu', 'NỮ', 23, '01234666', '', 3, 1, 1, 7, NULL, 'f23', 1731949200, 0, '', 0, '', NULL, 4, 2, NULL, 1732011113, '\"[]\"', NULL, NULL, 'CẬP NHẬT', ''),
(111, 41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, NULL, 'f23', 1731949200, 0, '', 0, 'CHỜ ĐỢI', 2, 4, 2, NULL, 1732011128, '\"[]\"', NULL, NULL, 'CẬP NHẬT', '2354'),
(112, 41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, 54, 'f23', 1731949200, 0, 'ádsad', 1732035600, 'CHỜ ĐỢI', 2, 4, 2, NULL, 1732011154, '\"[\\\"xa\\\"]\"', NULL, NULL, 'CẬP NHẬT', '2354'),
(113, 41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, 54, 'f23', 1731949200, 1731862800, 'ádsad', 1732035600, 'CHỜ ĐỢI', 2, 4, 2, NULL, 1732011194, '\"[\\\"xa\\\"]\"', NULL, NULL, 'CẬP NHẬT', '2354'),
(114, 40, 'alo', 'NỮ', 34, '0809809', '', 37, 7, 8, 8, 69, 'f45', 1731978480, 1731967500, 'ádasdas', 1731923787, 'ĐÃ ĐẾN', 5, 4, 3, '', 1732084982, '\"null\"', 'ád', '', 'CẬP NHẬT', '400'),
(115, 41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, 54, 'f23', 1731949200, 1731862800, 'ádsad', 1732035600, 'CHỜ ĐỢI', 2, 4, 2, '', 1732087607, '\"[\\\"xa\\\"]\"', '', '', 'XÓA', '2354'),
(116, 41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, 54, 'f23', 1731949200, 1731862800, 'ádsad', 1732035600, 'CHỜ ĐỢI', 2, 4, 2, '', 1732087621, '\"[\\\"xa\\\"]\"', '', '', 'XÓA', '2354'),
(117, 41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, 54, 'f23', 1731949200, 1731862800, 'ádsad', 1732035600, 'CHỜ ĐỢI', 2, 4, 2, '', 1732087650, '\"[\\\"xa\\\"]\"', '', '', 'XÓA', '2354'),
(118, 37, 'Nguyễn Thị A', 'NỮ', 23, '012345678', '', 14, 2, 4, 23, 245, 'f66', 1730851200, 0, '', 1730791645, 'ĐÃ ĐẾN', 1, 3, 2, '', 1732087657, '\"null\"', '', '', 'XÓA', ''),
(119, 41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, 54, 'f23', 1731949200, 1731862800, 'ádsad', 1732035600, 'CHỜ ĐỢI', 2, 4, 2, '', 1732087810, '\"[\\\"xa\\\"]\"', '', '', 'XÓA', '2354'),
(120, 41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, 54, 'f23', 1731949200, 1731862800, 'ádsad', 1732035600, 'CHỜ ĐỢI', 2, 4, 2, '', 1732087876, '\"[\\\"xa\\\"]\"', '', '', 'XÓA', '2354'),
(121, 41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, 54, 'f23', 1731949200, 1731862800, 'ádsad', 1732035600, 'CHỜ ĐỢI', 2, 4, 2, '', 1732087914, '\"[\\\"xa\\\"]\"', '', '', 'XÓA', '2354'),
(122, 41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, 54, 'f23', 1731949200, 1731862800, 'ádsad', 1732035600, 'CHỜ ĐỢI', 2, 4, 2, '', 1732088087, '\"[\\\"xa\\\"]\"', '', '', 'XÓA', '2354'),
(123, 17, 'bệnh mới 12', 'NỮ', 12, '09080706', '', 4, 1, 1, 8, 69, 'dsfs', 1730480400, 1730394000, '', 1730367729, '', NULL, 4, 2, '', 1732088748, '', '', '', 'XÓA', ''),
(124, 41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, 54, 'f23', 1731949200, 1731862800, 'ádsad', 1732035600, 'CHỜ ĐỢI', 2, 4, 2, '', 1732088755, '\"[\\\"xa\\\"]\"', '', '', 'XÓA', '2354'),
(125, 41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, 54, 'f23', 1731949200, 1731862800, 'ádsad', 1732035600, 'CHỜ ĐỢI', 2, 3, 2, '', 1732089095, '\"[\\\"xa\\\"]\"', '', '', 'XÓA', '2354'),
(126, 10, 'test 1', 'KHÔNG XÁC ĐỊNH', 45, '09080706', 'ádsa', 14, 2, 2, 8, 69, 'fv', 1730394000, 1730307600, '', 1729530000, 'ĐÃ ĐẾN', 2, 3, 2, '', 1732089102, '\"[\\\"hậu môn\\\",\\\"ád\\\"]\"', '', 'file-e1f83630-9488-4473-97a4-29b6cfe7def0.gif', 'XÓA', ''),
(127, 41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, 54, 'f23', 1731949200, 1731862800, 'ádsad', 1732035600, 'CHỜ ĐỢI', 2, 3, 2, '', 1732089214, '\"[\\\"xa\\\"]\"', '', '', 'XÓA', '2354'),
(128, 41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, 54, 'f23', 1731949200, 1731862800, 'ádsad', 1732035600, 'CHỜ ĐỢI', 2, 3, 2, '', 1732089605, '\"[\\\"xa\\\"]\"', '', '', 'XÓA', '2354'),
(129, 42, 'Nguyễn Minh Ninh', 'NỮ', 35, '08098098098', '', 15, 2, 2, 8, 69, 'fc', 1732208400, 1732122000, '', 0, '', NULL, 3, 2, '', 1732094646, '', '', '', 'THÊM', ''),
(130, 42, 'Nguyễn Minh Ninh', 'NỮ', 35, '08098098098', '', 15, 2, 2, 8, 69, 'fc', 1732035600, 1731949200, '', 0, '', NULL, 3, 2, '', 1732094720, '\"[]\"', '', '', 'CẬP NHẬT', ''),
(131, 42, 'Nguyễn Minh Ninh', 'NỮ', 35, '08098098098', '', 15, 2, 2, 8, 69, 'fc', 1732035600, 1731949200, '', 0, 'ĐÃ ĐẾN', NULL, 3, 2, '', 1732098654, '\"[]\"', '', '', 'CẬP NHẬT', ''),
(132, 41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, 54, 'f23', 1731949200, 1731862800, 'https://www.figma.com/design/GiDzHJ6sJNEeFTOmUR7zDp/%C4%90a-khoa?node-id=2481-2&node-type=canvas&t=omlSQDJlXstypy3p-0', 1732035600, 'CHỜ ĐỢI', 2, 4, 2, '', 1732501112, '\"[\\\"xa\\\"]\"', '', '', 'CẬP NHẬT', '2354'),
(133, 42, 'Nguyễn Minh Ninh', 'NỮ', 35, '08098098098', '', 15, 2, 2, 8, 69, 'fc', 1732035600, 1731949200, '', 0, 'ĐÃ ĐẾN', NULL, 3, 2, '', 1733470531, '\"[]\"', '', 'file-09d18659-0b63-4057-ac06-f7765fdf62f3.avif', 'CẬP NHẬT', ''),
(134, 42, 'Nguyễn Minh Ninh', 'NỮ', 35, '08098098098', '', 15, 2, 2, 8, 69, 'fc', 1732035600, 1731949200, '', 0, 'ĐÃ ĐẾN', NULL, 3, 2, '', 1733470808, '\"[]\"', '', 'file-1086355c-47b1-4cda-94f6-e3c4cecc49a9.webp', 'CẬP NHẬT', ''),
(135, 42, 'Nguyễn Minh Ninh', 'NỮ', 35, '08098098098', '', 15, 2, 2, 8, 69, 'fc', 1732035600, 1731949200, '', 0, 'ĐÃ ĐẾN', NULL, 3, 2, '', 1733479924, '\"[\\\"alo\\\"]\"', '', 'file-1086355c-47b1-4cda-94f6-e3c4cecc49a9.webp', 'CẬP NHẬT', '4000'),
(136, 42, 'Nguyễn Minh Ninh', 'NỮ', 35, '08098098098', '', 15, 2, 2, 8, 69, 'fc', 1732035600, 1731949200, '', 0, 'ĐÃ ĐẾN', 2, 3, 2, '', 1733479955, '\"[\\\"alo\\\",null]\"', '', 'file-1086355c-47b1-4cda-94f6-e3c4cecc49a9.webp', 'CẬP NHẬT', '4000'),
(137, 42, 'Nguyễn Minh Ninh', 'NỮ', 35, '08098098098', '', 15, 2, 2, 8, 69, 'fc', 1732035600, 1731949200, '', 0, 'ĐÃ ĐẾN', 2, 3, 2, '', 1733801304, '\"[\\\"alo\\\",null]\"', '', 'file-66fad7ca-eb6f-47b6-a022-b2ffd918ffa6.pdf', 'CẬP NHẬT', '4000'),
(138, 42, 'Nguyễn Minh Ninh', 'NỮ', 35, '08098098098', '', 15, 2, 2, 8, 69, 'fc', 1732035600, 1731949200, '', 0, 'ĐÃ ĐẾN', 2, 3, 2, '', 1733802158, '\"[\\\"alo\\\",null]\"', '', 'file-4279ba39-5062-40da-b0e4-ecb6edab5214.pdf', 'CẬP NHẬT', '4000'),
(139, 42, 'Nguyễn Minh Ninh', 'NỮ', 35, '08098098098', '', 15, 2, 2, 8, 69, 'fc', 1732035600, 1731949200, '', 0, 'ĐÃ ĐẾN', 2, 3, 2, '', 1733802253, '\"[\\\"alo\\\",null]\"', '', 'file-1eda0b1a-c7e9-41e8-af7f-7a304bf38ac8.pdf', 'CẬP NHẬT', '4000'),
(140, 42, 'Nguyễn Minh Ninh', 'NỮ', 35, '08098098098', '', 15, 2, 2, 8, 69, 'fc', 1732035600, 1731949200, '', 0, 'ĐÃ ĐẾN', 2, 3, 2, '', 1733803053, '\"[\\\"alo\\\",null]\"', '', 'file-10676fcf-4913-421c-95ec-c64d33656d7b.pdf', 'CẬP NHẬT', '4000'),
(141, 42, 'Nguyễn Minh Ninh', 'NỮ', 35, '08098098098', '', 15, 2, 2, 8, 69, 'fc', 1732035600, 1731949200, '', 0, 'ĐÃ ĐẾN', 2, 3, 2, '', 1733803161, '\"[\\\"alo\\\",null]\"', '', 'file-1733803161310-428864868.pdf', 'CẬP NHẬT', '4000'),
(142, 41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, 54, 'f23', 1731949200, 1731862800, 'https://www.figma.com/design/GiDzHJ6sJNEeFTOmUR7zDp/%C4%90a-khoa?node-id=2481-2&node-type=canvas&t=omlSQDJlXstypy3p-0', 1732035600, 'CHỜ ĐỢI', 2, 4, 2, '', 1733806790, '\"[\\\"xa\\\"]\"', '', 'file-1733806790682-597650204.avif', 'CẬP NHẬT', '2354'),
(143, 41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, 54, 'f23', 1731949200, 1731862800, 'https://www.figma.com/design/GiDzHJ6sJNEeFTOmUR7zDp/%C4%90a-khoa?node-id=2481-2&node-type=canvas&t=omlSQDJlXstypy3p-0', 1732035600, 'CHỜ ĐỢI', 2, 4, 2, '', 1733806897, '\"[\\\"xa\\\"]\"', '', 'file-1733806897918-5354676.gif', 'CẬP NHẬT', '2354'),
(144, 41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, 54, 'f23', 1731949200, 1731862800, 'https://www.figma.com/design/GiDzHJ6sJNEeFTOmUR7zDp/%C4%90a-khoa?node-id=2481-2&node-type=canvas&t=omlSQDJlXstypy3p-0', 1732035600, 'CHỜ ĐỢI', 2, 4, 2, '', 1733806919, '\"[\\\"xa\\\"]\"', '', 'file-1733806919375-112783017.webp', 'CẬP NHẬT', '2354'),
(145, 43, 'nguyễn Minh Anh', 'NAM', 34, '08098098098', '', 3, 1, 1, 7, 60, 'f12', 1733886000, 1733878800, '', 0, '', NULL, 4, 2, '', 1733817689, '', '', '', 'THÊM', ''),
(146, 43, 'nguyễn Minh Anh', 'NAM', 34, '08098098098', '', 3, 1, 1, 7, 60, 'f12', 1733886000, 1733878800, '', 0, 'CHỜ ĐỢI', NULL, 4, 2, '', 1733989317, '\"[\\\"ádasd\\\"]\"', '', '', 'CẬP NHẬT', ''),
(147, 42, 'Nguyễn Minh Ninh', 'NỮ', 35, '08098098098', 'nội dung tư vấn', 15, 2, 2, 8, 69, 'fc', 1732035600, 1731949200, 'ghi chú', 1735318800, 'ĐÃ ĐẾN', 2, 3, 2, '', 1733989417, '\"[\\\"alo\\\",null]\"', 'nội dung tiếp nhận', 'file-1733803161310-428864868.pdf', 'CẬP NHẬT', '4000'),
(148, 77, 'Nguyễn Thị Minh', 'NỮ', 44, '123456789', 'tư vấn rồi', 4, 1, 1, 1, NULL, 'f1', 1733961600, 1733702400, 'ghi chú rồi', 1733788800, 'ĐÃ ĐẾN', 1, 3, 2, 'ádsa', 1734051771, '\"[\\\"aa\\\"]\"', 'nội dung rồi', '', 'CẬP NHẬT', ''),
(149, 77, 'Nguyễn Thị Minh', 'NỮ', 44, '123456789', 'tư vấn rồi', 4, 1, 1, 1, NULL, 'f1', 1733961600, 0, 'ghi chú rồi', 1733788800, 'ĐÃ ĐẾN', 1, 3, 2, 'ádsa', 1734052009, '\"[\\\"aa\\\"]\"', 'nội dung rồi', '', 'CẬP NHẬT', ''),
(150, 80, 'bệnh mới 12', 'NAM', 45, '08098098098', '', 14, 2, 1, 8, 68, 'FD', 1734368400, 1734282000, '', 0, '', NULL, 3, 2, '', 1734314610, '', '', '', 'THÊM', ''),
(151, 81, 'bệnh mới 12', 'NỮ', 20, '0968222503', '', 14, 2, 1, 8, NULL, 'dsfs', 1734454800, 1734368400, '', 0, '', NULL, 3, 2, '', 1734315433, '', '', '', 'THÊM', ''),
(152, 82, 'nguyễn văn Cảnh', 'NAM', 34, '0809809809', 'ádsa', 3, 1, 1, 8, 64, 'sadsa', 1734454800, 1734368400, '', 0, '', NULL, 3, 2, '', 1734315576, '', '', '', 'THÊM', ''),
(153, 83, 'nguyễn văn Cảnh', 'NAM', 45, '0123456789', '', 14, 2, 1, 8, NULL, 'cxzcz', 1734627600, 1733677200, '', 0, '', NULL, 3, 2, '', 1734315809, '', '', '', 'THÊM', ''),
(154, 86, 'Lê Quang Sung', 'NAM', 40, '0968222506', '', 3, 1, 3, 8, 69, 'CV', 1734541200, 1734368400, '', 0, '', NULL, 8, 2, '', 1734320975, '', '', '', 'THÊM', ''),
(155, 86, 'Lê Quang Sung', 'NAM', 40, '', '', 3, 1, 3, 8, 69, 'CV', 1734541200, 0, '', 0, 'CHỜ ĐỢI', NULL, 8, 2, '', 1734321197, '', '', '', 'CẬP NHẬT', ''),
(156, 86, 'Lê Quang Sung', 'NAM', 40, '', '', 3, 1, 3, 8, 69, 'CV', 1734541200, 1733677200, '', 0, 'ĐÃ ĐẾN', 4, 8, 2, '', 1734322183, '', '', '', 'CẬP NHẬT', ''),
(157, 86, 'Lê Quang Sung', 'NAM', 40, '', '', 3, 1, 3, 8, 69, 'CV', 1734541200, 0, '', 0, 'ĐÃ ĐẾN', 4, 8, 2, '', 1734322196, '', '', '', 'CẬP NHẬT', ''),
(158, 86, 'Lê Quang Sung', 'NAM', 40, '', '', 3, 1, 3, 8, 69, 'CV', 1734541200, 0, '', 0, 'ĐÃ ĐẾN', 4, 8, 2, '', 1734324491, '', '', '', 'CẬP NHẬT', ''),
(159, 86, 'Lê Quang Sung', 'NAM', 40, '', '', 3, 1, 3, 8, 69, 'CV', 1734541200, 0, '', 0, 'ĐÃ ĐẾN', 4, 8, 2, '', 1734324498, '', 'ádasdsa', '', 'CẬP NHẬT', ''),
(160, 87, 'Tình hình', 'NỮ', 45, '09080706', 'áda', 3, 1, 1, 8, 68, 'DF', 1735146000, 1734541200, '', 0, '', NULL, 8, 2, '', 1734324572, '', '', '', 'THÊM', ''),
(161, 87, 'Tình hình', 'NỮ', 45, '09080706', 'áda', 3, 1, 1, 8, 68, 'DF', 1735146000, 1734541200, '', 0, '', NULL, 4, 2, '', 1734324597, '', '', '', 'XÓA', ''),
(162, 88, 'nguyên văn a', 'NỮ', 45, '0809809809', '', 3, 1, 1, 7, NULL, 'cv', 1734109200, 1733763600, '', 0, '', NULL, 8, 2, '', 1734324698, '', '', '', 'THÊM', ''),
(163, 88, 'nguyên văn a', 'NỮ', 45, '', '', 3, 1, 1, 7, NULL, 'cv', 1734109200, 1733763600, '', 0, '', NULL, 8, 2, '', 1734324808, '', '', '', 'CẬP NHẬT', ''),
(164, 89, 'test xcv', 'NỮ', 34, '0968333503', '', 4, 1, 1, 2, 19, 'f23', 1734627600, 1734454800, '', 0, '', NULL, 8, 2, '', 1734324884, '', '', '', 'THÊM', ''),
(165, 84, 'Lê văn Minh', 'NAM', 24, '968222502', 'tư vấn rồi', 4, 1, 1, 2, 13, 'f1', 1733961600, 1733702400, 'ghi chú rồi', 1733788800, 'ĐÃ ĐẾN', 2, 9, 2, 'ádsa', 1734429445, '\"[\\\"aa\\\"]\"', 'nội dung rồi', '', 'XÓA', ''),
(166, 88, 'nguyên văn a', 'NỮ', 45, '0809809809', '', 3, 1, 1, 7, NULL, 'cv', 1734109200, 1733763600, '', 0, '', NULL, 8, 2, '', 1734430820, '\"[]\"', '', '', 'CẬP NHẬT', ''),
(167, 89, 'test xcv', 'NỮ', 34, '0968333503', '', 4, 1, 1, 2, 19, 'f23', 1734627600, 1734454800, '', 0, 'ĐÃ ĐẾN', NULL, 8, 2, '', 1734508478, '\"[]\"', '', '', 'CẬP NHẬT', ''),
(168, 88, 'nguyên văn a', 'NỮ', 45, '0809809809', '', 3, 1, 1, 7, NULL, 'cv', 1734109200, 1733763600, '', 0, 'ĐÃ ĐẾN', NULL, 8, 2, '', 1734509338, '\"[]\"', '', '', 'CẬP NHẬT', ''),
(169, 91, 'Nguyễn Thị Minh', 'NỮ', 44, '', '', 3, 1, 1, 1, 2, 'f1', 1733961600, 1733702400, '', 0, 'CHỜ ĐỢI', 1, 8, 2, 'ádsa', 1735033430, '', 'nội dung rồi', '', 'CẬP NHẬT', ''),
(170, 91, 'Nguyễn Thị Minh', 'NỮ', 44, '1234567890', 'tư vấn rồi', 3, 1, 1, 1, 2, 'f1', 1734998400, 1733702400, 'ghi chú rồi', 0, 'CHỜ ĐỢI', 1, 8, 2, 'ádsa', 1735033451, '\"[\\\"aa\\\"]\"', '', '', 'CẬP NHẬT', ''),
(171, 90, 'Lê văn Minh', 'NAM', 24, '9682225020', 'tư vấn rồi', 3, 1, 1, 1, 2, 'f1', 1734998400, 1733702400, 'ghi chú rồi', 0, 'ĐÃ ĐẾN', 1, 8, 2, 'ádsa', 1735033465, '\"[\\\"aa\\\"]\"', 'nội dung rồi', '', 'CẬP NHẬT', ''),
(172, 88, 'nguyên văn a', 'NỮ', 45, '', '', 3, 1, 1, 7, NULL, 'cv', 1734109200, 1733763600, '', 0, 'ĐÃ ĐẾN', NULL, 8, 2, '', 1735035266, '', '', '', 'CẬP NHẬT', ''),
(173, 91, 'Nguyễn Thị Minh', 'NỮ', 44, '1234567890', 'tư vấn rồi', 3, 1, 1, 1, 2, 'f1', 1734998400, 1733702400, 'ghi chú rồi', 0, 'CHỜ ĐỢI', 1, 8, 2, 'ádsa', 1735035290, '\"[\\\"aa\\\"]\"', 'nội dung rồi', '', 'CẬP NHẬT', ''),
(174, 91, 'Nguyễn Thị Minh', 'NỮ', 44, '', '', 3, 1, 1, 1, 2, 'f1', 1734998400, 1733702400, '', 0, 'ĐÃ ĐẾN', 1, 8, 2, 'ádsa', 1735035299, '', '', '', 'CẬP NHẬT', '');

-- --------------------------------------------------------

--
-- Table structure for table `hospitals`
--

CREATE TABLE `hospitals` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `created_at` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hospitals`
--

INSERT INTO `hospitals` (`id`, `name`, `author`, `phone`, `created_at`) VALUES
(2, 'an đông', 'admin@gmail.com', '', 0),
(3, 'facebook an đông', 'admin@gmail.com', '0968222502', 0);

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `hospitalId` int(11) NOT NULL,
  `created_at` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `media`
--

INSERT INTO `media` (`id`, `name`, `userId`, `hospitalId`, `created_at`) VALUES
(1, 'facebook', 4, 2, 1728529830),
(2, 'zalo', 4, 2, 1728529864),
(3, 'điện thoại', 4, 2, 1728529874),
(4, 'trực tiếp', 4, 2, 1728529906),
(5, 'seo', 4, 2, 1728529911),
(6, 'coccoc', 4, 2, 1728529968),
(8, 'zalo', 4, 3, 1731300922),
(9, 'test', 4, 3, 1731308564);

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `patientId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `hospitalId` int(11) NOT NULL,
  `created_at` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `status`, `patientId`, `userId`, `hospitalId`, `created_at`) VALUES
(1, 0, 90, 3, 2, 1735033465),
(2, 0, 90, 4, 2, 1735033465),
(3, 0, 90, 6, 2, 1735033465),
(4, 0, 90, 7, 2, 1735033465),
(5, 1, 90, 8, 2, 1735033465),
(6, 0, 90, 9, 2, 1735033465),
(7, 0, 90, 3, 2, 1735034202),
(8, 0, 90, 4, 2, 1735034202),
(9, 0, 90, 6, 2, 1735034202),
(10, 0, 90, 7, 2, 1735034202),
(11, 0, 90, 8, 2, 1735034202),
(12, 0, 90, 9, 2, 1735034202),
(13, 0, 89, 3, 2, 1735034241),
(14, 0, 89, 4, 2, 1735034241),
(15, 0, 89, 6, 2, 1735034241),
(16, 0, 89, 7, 2, 1735034241),
(17, 0, 89, 8, 2, 1735034241),
(18, 0, 89, 9, 2, 1735034241),
(19, 0, 88, 3, 2, 1735035266),
(20, 0, 88, 4, 2, 1735035266),
(21, 0, 88, 6, 2, 1735035266),
(22, 0, 88, 7, 2, 1735035266),
(23, 0, 88, 8, 2, 1735035266),
(24, 0, 88, 9, 2, 1735035266),
(25, 0, 91, 3, 2, 1735035299),
(26, 0, 91, 4, 2, 1735035299),
(27, 0, 91, 6, 2, 1735035299),
(28, 0, 91, 7, 2, 1735035299),
(29, 0, 91, 8, 2, 1735035299),
(30, 0, 91, 9, 2, 1735035299);

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `yearOld` int(11) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `content` text,
  `diseasesId` int(11) DEFAULT NULL,
  `departmentId` int(11) DEFAULT NULL,
  `mediaId` int(11) DEFAULT NULL,
  `cityId` int(11) DEFAULT NULL,
  `districtId` int(11) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `appointmentTime` int(11) DEFAULT NULL,
  `reminderTime` int(11) DEFAULT NULL,
  `note` text,
  `editregistrationTime` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `doctorId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `hospitalId` int(11) DEFAULT NULL,
  `chat` text,
  `created_at` int(11) DEFAULT NULL,
  `treatment` text,
  `record` text,
  `file` text,
  `money` varchar(125) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`id`, `name`, `gender`, `yearOld`, `phone`, `content`, `diseasesId`, `departmentId`, `mediaId`, `cityId`, `districtId`, `code`, `appointmentTime`, `reminderTime`, `note`, `editregistrationTime`, `status`, `doctorId`, `userId`, `hospitalId`, `chat`, `created_at`, `treatment`, `record`, `file`, `money`) VALUES
(1, 'nguyên văn Ánh', 'NAM', 40, '430597043905', 'zxzx', 4, 1, 1, 3, 26, 'F100', 1729098000, 1728925200, 'sadsa', 1728902394, 'ĐÃ ĐẾN', 1, 4, 2, '', 1728902394, '[\"trĩ\"]', 'ok rôi 1', '', ''),
(2, 'trân văn b', 'NAM', 36, '430597043905', 'zxzx', 4, 1, 1, 7, NULL, 'F100', 1729098000, 1728925200, 'sadsa', 1728902652, 'CHƯA ĐẾN', NULL, 4, 2, 'null', 1728902652, 'null', NULL, '', ''),
(3, 'lê Minh Tiến', 'NAM', 45, '08098098098', 'tư vấn 1', 9, 1, 5, 8, 69, 'f4', 1729702800, 1729098000, 'dsad', 1728986549, 'ĐÃ ĐẾN', 2, 4, 2, '\"ol\"', 1728986549, 'null', NULL, '', ''),
(4, 'Thịnh', 'NAM', 40, '09080706', 'xcvcx', 10, 1, 6, 5, 43, 'f3', 1729540800, 1729443600, 'dsadas', 1729616400, 'ĐÃ ĐẾN', 4, 4, 2, NULL, 1728986688, '[\"sùi\",null]', 'ok\npl', '', ''),
(5, 'new', 'NAM', 12, '08098098098', NULL, 37, 7, 1, 33, 361, 'f12', 1730307600, 1730307600, NULL, 1730172258, 'ĐÃ ĐẾN', 5, 4, 3, NULL, 1730172258, 'null', NULL, '', '100'),
(6, 'new 1', 'NỮ', 45, '08098098098', NULL, 37, 7, 1, 6, 51, 'f4', 1730307600, 1730138400, NULL, 1730173706, 'ĐÃ ĐẾN', NULL, 4, 3, NULL, 1730173706, 'null', NULL, '', ''),
(8, 'nguyễn văn C', 'NỮ', 56, '08098098098', 'dsadas', 3, 1, 1, 7, 60, 'f3', 1730221200, 1730134800, 'aloo', 1730190869, 'ĐÃ ĐẾN', 2, 4, 2, 'null', 1730190869, '[\"sùi\",\"trĩ\"]', NULL, '', ''),
(9, 'Lê Văn Lương', 'NAM', 34, '08098098098', NULL, 3, 1, 1, 7, 60, 'f56', 1732838400, 1732762800, NULL, 1730258431, NULL, NULL, 4, 2, NULL, 1730258431, NULL, NULL, '', ''),
(10, 'test 1', 'KHÔNG XÁC ĐỊNH', 45, '09080706', 'ádsa', 14, 2, 2, 8, 69, 'fv', 1730394000, 1730307600, NULL, 1729530000, 'ĐÃ ĐẾN', 2, 4, 2, NULL, 1730258680, '[\"hậu môn\",\"ád\"]', NULL, 'file-e1f83630-9488-4473-97a4-29b6cfe7def0.gif', ''),
(11, 'hình thức 1', 'NAM', 45, '08098098098', 'dsadsa', 15, 2, 4, 33, 364, 'CV12', 1732813200, 1732208400, NULL, 1730259494, NULL, NULL, 4, 2, NULL, 1730259494, NULL, NULL, 'file-f74dddd3-0638-4f7b-9cd3-00ff33a3f237.pdf', ''),
(12, 'Trần Minh Tâm', 'NAM', 32, '0809809', NULL, 3, 1, 1, 8, 67, 'f23', 1730394000, 1730307600, NULL, 1730365232, NULL, NULL, 4, 2, NULL, 1730365232, NULL, NULL, '', ''),
(13, 'Lê Minh An', 'NAM', 23, '09080706', NULL, 6, 1, 3, 3, 27, 'f4', 1730480400, 1730394000, 'hợp lệ', 1730365826, 'CHỜ ĐỢI', 4, 4, 2, NULL, 1730365826, '[\"tĩ\"]', NULL, '', ''),
(14, 'bệnh mới 12', 'NỮ', 25, '09080706', NULL, 15, 2, 2, 8, 69, 'cxzcz', 1730394000, 1730307600, NULL, 1730307600, NULL, NULL, 3, 2, NULL, 1730367366, NULL, NULL, '', ''),
(15, 'sadsad test', 'NỮ', 23, '09080706', NULL, 14, 2, 1, 7, 60, 'ádsa', 1730480400, 1730394000, NULL, 1730367608, 'KHÔNG XÁC ĐỊNH', NULL, 3, 2, NULL, 1730367608, 'null', NULL, '', ''),
(16, 'bệnh mới 12', 'NỮ', 12, '09080706', NULL, 4, 1, 1, 8, 69, 'dsfs', 1730480400, 1730394000, NULL, 1730367701, NULL, NULL, 3, 2, NULL, 1730367701, NULL, NULL, '', ''),
(18, 'bệnh mới 12', 'NỮ', 12, '09080706', NULL, 4, 1, 1, 8, 69, 'dsfs', 1730480400, 1730394000, NULL, 1730367759, NULL, NULL, 3, 2, NULL, 1730367759, NULL, NULL, 'file-517202d3-ea73-4aed-96de-878874fe0f5e.gif', ''),
(19, 'bệnh mới 12', 'NỮ', 12, '09080706', NULL, 4, 1, 1, 8, 69, 'dsfs', 1730480400, 1730394000, NULL, 1730367776, NULL, NULL, 3, 2, NULL, 1730367776, 'null', NULL, 'file-57a920e6-18e7-42b0-aad3-dd942975741c.pdf', ''),
(20, 'nguyên văn a', 'NỮ', 234, '08098098098', NULL, 4, 1, 3, 8, 69, 'e', 1730394000, 1730307600, NULL, 1730369621, NULL, NULL, 3, 2, NULL, 1730369621, NULL, NULL, '', ''),
(22, 'nguyễn văn c', 'NAM', 6, '08098098', NULL, 14, 2, 1, 8, 69, 'cxz', 1730480400, 1730307600, NULL, 1730369964, NULL, NULL, 3, 2, NULL, 1730369964, NULL, NULL, '', ''),
(23, 'nguyễn văn c', 'NAM', 6, '08098098', NULL, 14, 2, 1, 8, 69, 'cxz', 1730480400, 1730307600, NULL, 1730370032, NULL, NULL, 3, 2, NULL, 1730370032, NULL, NULL, '', ''),
(24, 'nguyễn văn c', 'NAM', 6, '08098098', NULL, 14, 2, 1, 8, 69, 'cxz', 1730480400, 1730307600, NULL, 1730370070, NULL, NULL, 3, 2, NULL, 1730370070, NULL, NULL, '', ''),
(26, 'bệnh mới 12', 'NỮ', 23, '09080706', 'ád', 4, 1, 3, 7, 60, 'a', 1730394000, 1730221200, NULL, 1730370317, NULL, NULL, 3, 2, NULL, 1730370317, NULL, NULL, '', ''),
(27, 'bệnh mới 12', 'NỮ', 23, '09080706', 'ád', 4, 1, 3, 7, 60, 'a', 1730394000, 1730221200, NULL, 1730370408, NULL, NULL, 3, 2, NULL, 1730370409, 'null', NULL, '', '0'),
(30, 'test 1', 'NỮ', 33, '09080706', NULL, 5, 1, 3, 7, 57, 'f12', 1730394000, 1730307600, NULL, 1730424328, NULL, NULL, 3, 2, NULL, 1730424328, NULL, NULL, '', ''),
(32, 'new re', 'NAM', 45, '09080706', 'áda', 14, 2, 2, 62, 686, 'â', 1732122000, 1732035600, 'ádasd', 1730424853, 'CHƯA ĐẾN', NULL, 3, 2, NULL, 1730424853, 'null', NULL, '', ''),
(33, 'bệnh mới 12', 'NỮ', 54, '09080706', 'chưa dc gì', 14, 2, 3, 6, NULL, 'f3', 1731603600, 1731430800, 'ap xe ', 1730436607, 'CHƯA ĐẾN', NULL, 3, 2, NULL, 1730436607, 'null', NULL, '', ''),
(34, 'LÊ VĂN ĂN', 'NAM', 35, '080980900', 'nôi dung tư vấn 1', 9, 1, 2, 22, 241, 'f22', 1730998800, 1730480400, 'cxzczxcxz', 1730712470, 'ĐÃ ĐẾN', 4, 3, 2, NULL, 1730453270, '[\"mục 2\"]', NULL, '', '1000'),
(35, 'Nguyễn Thị Mỹ', 'NỮ', 34, '09080706', NULL, 19, 2, 2, 55, 618, 'f5', 1730566800, 1730491200, NULL, 1730532408, 'ĐÃ ĐẾN', 1, 3, 2, NULL, 1730532408, '[null]', NULL, '', ''),
(36, 'test', 'NỮ', 34, '01234666', NULL, 15, 2, 2, 7, 60, 'f5', 1730739600, 1730739600, NULL, 1730716025, 'ĐÃ ĐẾN', 2, 3, 2, NULL, 1730716025, 'null', NULL, '', '200'),
(37, 'Nguyễn Thị A', 'NỮ', 23, '012345678', NULL, 14, 2, 4, 23, 245, 'f66', 1730851200, 0, NULL, 1730791645, 'ĐÃ ĐẾN', 1, 3, 2, NULL, 1730791645, 'null', NULL, '', ''),
(38, 'lun', 'NAM', 35, '3232133213', 'ádasd', 7, 1, 2, 7, 60, 'fcv', 1731394800, 0, NULL, 1731384789, 'ĐÃ ĐẾN', 2, 4, 2, NULL, 1731384789, 'null', 'ádas', '', '300'),
(39, 'test', 'NỮ', 34, '08098098098', 'dá', 37, 7, 8, 8, 69, 'dc', 1731920400, 1731862800, NULL, 1731896400, 'ĐÃ ĐẾN', 5, 3, 3, NULL, 1731896400, 'null', NULL, '', ''),
(40, 'alo', 'NỮ', 34, '0809809', NULL, 37, 7, 8, 8, 69, 'f45', 1731978480, 1731967500, 'ádasdas', 1731923787, 'ĐÃ ĐẾN', 5, 4, 3, NULL, 1731923787, 'null', 'ád', '', '400'),
(41, 'thu', 'NỮ', 23, '01234666', 'đâs', 3, 1, 1, 7, 54, 'f23', 1731949200, 1731862800, 'https://www.figma.com/design/GiDzHJ6sJNEeFTOmUR7zDp/%C4%90a-khoa?node-id=2481-2&node-type=canvas&t=omlSQDJlXstypy3p-0', 1732035600, 'CHỜ ĐỢI', 2, 4, 2, '', 1732009785, '[\"xa\"]', '', 'file-1733806919375-112783017.webp', '2354'),
(42, 'Nguyễn Minh Ninh', 'NỮ', 35, '08098098098', 'nội dung tư vấn', 15, 2, 2, 8, 69, 'fc', 1732035600, 1731949200, 'ghi chú', 1735318800, 'ĐÃ ĐẾN', 2, 3, 2, '', 1732094646, '[\"alo\",null]', 'nội dung tiếp nhận', 'file-1733803161310-428864868.pdf', '4000'),
(43, 'nguyễn Minh Anh', 'NAM', 34, '08098098098', '', 3, 1, 1, 7, 60, 'f12', 1733886000, 1733878800, '', 0, 'CHỜ ĐỢI', NULL, 4, 2, '', 1733817689, '[\"ádasd\"]', '', '', ''),
(60, 'Lê văn Minh', 'NAM', 24, '968222502', 'tư vấn rồi', 3, 1, 1, 4, NULL, 'f1', 1732060800, 1731974400, 'ghi chú rồi', 1732233600, 'ĐÃ ĐẾN', 2, 4, 2, 'ádsa', 1733989541, '[\"0\",\"1\"]', 'nội dung rồi', '', ''),
(61, 'Nguyễn Thị Minh', 'NỮ', 44, '123456789', 'tư vấn rồi', 3, 1, 1, 4, NULL, 'f1', 1732060800, 1731974400, 'ghi chú rồi', 1732233600, 'ĐÃ ĐẾN', 2, 4, 2, 'ádsa', 1733989541, '[\"0\",\"1\"]', 'nội dung rồi', '', ''),
(62, 'Lê văn Minh', 'NAM', 24, '968222502', 'tư vấn rồi', 14, 2, 2, 2, 13, 'f1', 1732060800, 1731974400, 'ghi chú rồi', 1732233600, 'ĐÃ ĐẾN', 2, 4, 2, 'ádsa', 1733989742, '[\"aa\"]', 'nội dung rồi', '', ''),
(63, 'Nguyễn Thị Minh', 'NỮ', 44, '123456789', 'tư vấn rồi', 14, 2, 2, 2, 13, 'f1', 1732060800, 1731974400, 'ghi chú rồi', 1732233600, 'ĐÃ ĐẾN', 2, 4, 2, 'ádsa', 1733989742, '[\"aa\"]', 'nội dung rồi', '', ''),
(64, 'Lê văn Minh', 'NAM', 24, '968222502', 'tư vấn rồi', 14, 2, 1, 1, 3, 'f1', 1732060800, 1731974400, 'ghi chú rồi', 1732233600, 'ĐÃ ĐẾN', 2, 4, 2, 'ádsa', 1733990167, '[\"aa\"]', 'nội dung rồi', '', ''),
(65, 'Nguyễn Thị Minh', 'NỮ', 44, '123456789', 'tư vấn rồi', 14, 2, 1, 1, 3, 'f1', 1732060800, 1731974400, 'ghi chú rồi', 1732233600, 'ĐÃ ĐẾN', 2, 4, 2, 'ádsa', 1733990167, '[\"aa\"]', 'nội dung rồi', '', ''),
(66, 'Lê văn Minh', 'NAM', 24, '968222502', 'tư vấn rồi', 3, 1, 1, 2, 14, 'f1', 1732060800, 1731974400, 'ghi chú rồi', 1732233600, 'ĐÃ ĐẾN', 2, 4, 2, 'ádsa', 1733990346, '[\"aa\"]', 'nội dung rồi', '', ''),
(67, 'Nguyễn Thị Minh', 'NỮ', 44, '123456789', 'tư vấn rồi', 3, 1, 1, 2, 14, 'f1', 1732060800, 1731974400, 'ghi chú rồi', 1732233600, 'ĐÃ ĐẾN', 2, 4, 2, 'ádsa', 1733990346, '[\"aa\"]', 'nội dung rồi', '', ''),
(68, 'Lê văn Minh', 'NAM', 24, '968222502', 'tư vấn rồi', 14, 2, 2, 2, NULL, 'f1', 1732060800, 1731974400, 'ghi chú rồi', 1732233600, 'ĐÃ ĐẾN', 2, 4, 2, 'ádsa', 1733990501, '[\"aa\"]', 'nội dung rồi', '', ''),
(69, 'Nguyễn Thị Minh', 'NỮ', 44, '123456789', 'tư vấn rồi', 14, 2, 2, 2, NULL, 'f1', 1732060800, 1731974400, 'ghi chú rồi', 1732233600, 'ĐÃ ĐẾN', 2, 4, 2, 'ádsa', 1733990501, '[\"aa\"]', 'nội dung rồi', '', ''),
(70, 'Lê văn Minh', 'NAM', 24, '968222502', 'tư vấn rồi', 3, 1, 1, 2, NULL, 'f1', 1732060800, 1731974400, 'ghi chú rồi', 1732233600, 'ĐÃ ĐẾN', 4, 4, 2, 'ádsa', 1733990966, '[\"aa\"]', 'nội dung rồi', '', ''),
(71, 'Nguyễn Thị Minh', 'NỮ', 44, '123456789', 'tư vấn rồi', 3, 1, 1, 2, NULL, 'f1', 1732060800, 1731974400, 'ghi chú rồi', 1732233600, 'ĐÃ ĐẾN', 4, 4, 2, 'ádsa', 1733990966, '[\"aa\"]', 'nội dung rồi', '', ''),
(72, 'Lê văn Minh', 'NAM', 24, '968222502', 'tư vấn rồi', 14, 2, 2, 1, NULL, 'f1', 1733788800, 1733702400, 'ghi chú rồi', 1733788800, 'ĐÃ ĐẾN', 2, 3, 2, 'ádsa', 1733991259, '[\"aa\"]', 'nội dung rồi', '', ''),
(73, 'Nguyễn Thị Minh', 'NỮ', 44, '123456789', 'tư vấn rồi', 14, 2, 2, 1, NULL, 'f1', 1733788800, 1733702400, 'ghi chú rồi', 1733788800, 'ĐÃ ĐẾN', 2, 3, 2, 'ádsa', 1733991259, '[\"aa\"]', 'nội dung rồi', '', ''),
(74, 'Lê văn Minh', 'NAM', 24, '968222502', 'tư vấn rồi', 3, 1, 3, 5, NULL, 'f1', 1733788800, 1733702400, 'ghi chú rồi', 1733788800, 'ĐÃ ĐẾN', 2, 3, 2, 'ádsa', 1733991308, '[\"aa\"]', 'nội dung rồi', '', ''),
(75, 'Nguyễn Thị Minh', 'NỮ', 44, '123456789', 'tư vấn rồi', 3, 1, 3, 5, NULL, 'f1', 1733788800, 1733702400, 'ghi chú rồi', 1733788800, 'ĐÃ ĐẾN', 2, 3, 2, 'ádsa', 1733991308, '[\"aa\"]', 'nội dung rồi', '', ''),
(76, 'Lê văn Minh', 'NAM', 24, '968222502', 'tư vấn rồi', 4, 1, 1, 1, NULL, 'f1', 1733961600, 1733702400, 'ghi chú rồi', 1733788800, 'ĐÃ ĐẾN', 1, 3, 2, 'ádsa', 1733991375, '[\"aa\"]', 'nội dung rồi', '', ''),
(77, 'Nguyễn Thị Minh', 'NỮ', 44, '123456789', 'tư vấn rồi', 4, 1, 1, 1, NULL, 'f1', 1733961600, 0, 'ghi chú rồi', 1733788800, 'ĐÃ ĐẾN', 1, 3, 2, 'ádsa', 1733991375, '[\"aa\"]', 'nội dung rồi', '', ''),
(78, 'Lê văn Minh', 'NAM', 24, '968222502', 'tư vấn rồi', 3, 1, 1, 1, NULL, 'f1', 1733961600, 1733702400, 'ghi chú rồi', 1733788800, 'ĐÃ ĐẾN', 4, 3, 2, 'ádsa', 1733991441, '[\"aa\"]', 'nội dung rồi', '', ''),
(79, 'Nguyễn Thị Minh', 'NỮ', 44, '123456789', 'tư vấn rồi', 3, 1, 1, 1, NULL, 'f1', 1733961600, 1733702400, 'ghi chú rồi', 1733788800, 'ĐÃ ĐẾN', 4, 3, 2, 'ádsa', 1733991441, '[\"aa\"]', 'nội dung rồi', '', ''),
(80, 'bệnh mới 12', 'NAM', 45, '08098098098', '', 14, 2, 1, 8, 68, 'FD', 1734368400, 1734282000, '', 0, '', NULL, 3, 2, '', 1734314610, '', '', '', ''),
(81, 'bệnh mới 12', 'NỮ', 20, '0968222503', '', 14, 2, 1, 8, NULL, 'dsfs', 1734454800, 1734368400, '', 0, '', NULL, 3, 2, '', 1734315433, '', '', '', ''),
(82, 'nguyễn văn Cảnh', 'NAM', 34, '0809809809', 'ádsa', 3, 1, 1, 8, 64, 'sadsa', 1734454800, 1734368400, '', 0, 'ĐÃ ĐẾN', NULL, 3, 2, '', 1734315576, '', '', '', ''),
(83, 'nguyễn văn Cảnh', 'NAM', 45, '0123456789', '', 14, 2, 1, 8, NULL, 'cxzcz', 1734627600, 1733677200, '', 0, 'ĐÃ ĐẾN', 1, 3, 2, '', 1734315809, '', '', '', ''),
(85, 'Nguyễn Thị Minh', 'NỮ', 44, '123456789', 'tư vấn rồi', 4, 1, 1, 2, 13, 'f1', 1733961600, 1733702400, 'ghi chú rồi', 1733788800, 'ĐÃ ĐẾN', 2, 8, 2, 'ádsa', 1734320911, '[\"aa\"]', 'nội dung rồi', '', ''),
(86, 'Lê Quang Sung', 'NAM', 40, '0968222506', '', 3, 1, 3, 8, 69, 'CV', 1734541200, 0, '', 0, 'ĐÃ ĐẾN', 4, 8, 2, '', 1734320975, '', 'ádasdsa', '', ''),
(88, 'nguyên văn a', 'NỮ', 45, '0809809809', '', 3, 1, 1, 7, NULL, 'cv', 1734109200, 1733763600, '', 0, 'ĐÃ ĐẾN', NULL, 8, 2, '', 1734324698, '[]', '', '', ''),
(89, 'test xcv', 'NỮ', 34, '0968333503', '', 4, 1, 1, 2, 19, 'f23', 1734627600, 1734454800, '', 0, 'ĐÃ ĐẾN', NULL, 8, 2, '', 1734324884, '[]', '', '', ''),
(90, 'Lê văn Minh', 'NAM', 24, '9682225020', 'tư vấn rồi', 3, 1, 1, 1, 2, 'f1', 1734998400, 1733702400, 'ghi chú rồi', 0, 'ĐÃ ĐẾN', 1, 8, 2, 'ádsa', 1735033383, '[\"aa\"]', 'nội dung rồi', '', ''),
(91, 'Nguyễn Thị Minh', 'NỮ', 44, '1234567890', 'tư vấn rồi', 3, 1, 1, 1, 2, 'f1', 1734998400, 1733702400, 'ghi chú rồi', 0, 'ĐÃ ĐẾN', 1, 8, 2, 'ádsa', 1735033383, '[\"aa\"]', 'nội dung rồi', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `created_at` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `menu` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `created_at`, `name`, `menu`) VALUES
(1, 1727408698, 'quản trị viên hệ thống', '[{\"home\":true,\"ds\":{\"TKTong\":true,\"BXHang\":true,\"TKKenh\":true,\"TKKhoa\":true,\"TKBenh\":true,\"TKTuvan\":true}},{\"QLBN\":true,\"ds\":{\"DSDKH\":true,\"action_DSDKH\":{\"create\":true,\"update\":true,\"delete\":true,\"see\":true,\"viewAllData\":true,\"phone\":true,\"excel\":true,\"money\":true,\"doctor\":true,\"status\":true},\"CHTKBN\":true,\"LLTVBN\":true,\"BCCTDVKH\":true,\"BCXHHT\":true,\"BCDHTC\":true,\"XDLBN\":true,\"SSDLTCN\":true}},{\"TKKTC\":true,\"ds\":{\"CTDLM\":true,\"CDDABVM\":true,\"action_CDDABVM\":{\"create\":true,\"update\":true,\"delete\":true},\"CTDLDT\":true,\"CDDABVDT\":true,\"action_CDDABVDT\":{\"create\":true,\"update\":true,\"delete\":true}}},{\"BCDL\":true,\"ds\":{\"BCTH\":true,\"GT\":true,\"TUOI\":true,\"LBN\":true,\"NTT\":true,\"TTNV\":true,\"BSLT\":true,\"DVKH\":true}},{\"CD\":true,\"ds\":{\"CDBS\":true,\"action_CDBS\":{\"create\":true,\"update\":true,\"delete\":true},\"TLBT\":true,\"action_TLBT\":{\"create\":true,\"update\":true,\"delete\":true},\"CDLDTYT\":true,\"action_CDLDTYT\":{\"create\":true,\"update\":true,\"delete\":true},\"CDKBV\":true,\"action_CDKBV\":{\"create\":true,\"update\":true,\"delete\":true},\"CDCCTK\":true,\"action_CDCCTK\":{\"create\":true,\"update\":true,\"delete\":true}}},{\"TTCT\":true,\"ds\":{\"SDTTCT\":true,\"TDMK\":true,\"CDTC\":true}},{\"QLHT\":true,\"ds\":{\"QLCN\":true,\"action_QLCN\":{\"create\":true,\"update\":true,\"delete\":true,\"see\":true,\"close\":true},\"QLQ\":true,\"action_QLQ\":{\"create\":true,\"update\":true,\"delete\":true},\"DSBV\":true,\"action_DSBV\":{\"create\":true,\"update\":true,\"delete\":true},\"QLTB\":true,\"action_QLTB\":{\"create\":true,\"update\":true,\"delete\":true,\"close\":true}}},{\"LSTT\":true,\"ds\":{\"NKHD\":true,\"action_NKHD\":{\"delete\":true,\"see\":true},\"NKLDN\":true,\"action_NKLDN\":{\"delete\":true}}}]'),
(2, 1727420560, 'Tư vấn', '[{\"home\":true,\"ds\":{\"TKTong\":false,\"BXHang\":false,\"TKKenh\":false,\"TKKhoa\":false,\"TKBenh\":false,\"TKTuvan\":false}},{\"QLBN\":true,\"ds\":{\"DSDKH\":true,\"action_DSDKH\":{\"create\":true,\"update\":true,\"delete\":false,\"see\":false,\"viewAllData\":false,\"phone\":false,\"excel\":true,\"money\":false},\"CHTKBN\":true,\"LLTVBN\":true,\"BCCTDVKH\":false,\"BCXHHT\":false,\"BCDHTC\":false,\"XDLBN\":false,\"SSDLTCN\":true}},{\"TKKTC\":false,\"ds\":{\"CTDLM\":false,\"CDDABVM\":false,\"action_CDDABVM\":{\"create\":false,\"update\":false,\"delete\":false},\"CTDLDT\":false,\"CDDABVDT\":false,\"action_CDDABVDT\":{\"create\":false,\"update\":false,\"delete\":false}}},{\"BCDL\":false,\"ds\":{\"BCTH\":false,\"GT\":false,\"TUOI\":false,\"LBN\":false,\"NTT\":false,\"TTNV\":false,\"BSLT\":false,\"DVKH\":false}},{\"CD\":false,\"ds\":{\"CDBS\":false,\"action_CDBS\":{\"create\":false,\"update\":false,\"delete\":false},\"TLBT\":false,\"action_TLBT\":{\"create\":false,\"update\":false,\"delete\":false},\"CDLDTYT\":false,\"action_CDLDTYT\":{\"create\":false,\"update\":false,\"delete\":false},\"CDKBV\":false,\"action_CDKBV\":{\"create\":false,\"update\":false,\"delete\":false},\"CDCCTK\":false,\"action_CDCCTK\":{\"create\":false,\"update\":false,\"delete\":false}}},{\"TTCT\":false,\"ds\":{\"SDTTCT\":false,\"TDMK\":false,\"CDTC\":false}},{\"QLHT\":false,\"ds\":{\"QLCN\":false,\"action_QLCN\":{\"create\":false,\"update\":false,\"delete\":false,\"see\":false,\"close\":false},\"QLQ\":false,\"action_QLQ\":{\"create\":false,\"update\":false,\"delete\":false},\"DSBV\":false,\"action_DSBV\":{\"create\":false,\"update\":false,\"delete\":false},\"QLTB\":false,\"action_QLTB\":{\"create\":false,\"update\":false,\"delete\":false,\"close\":false}}},{\"LSTT\":false,\"ds\":{\"NKHD\":false,\"action_NKHD\":{\"delete\":false,\"see\":false},\"NKLDN\":false,\"action_NKLDN\":{\"delete\":false}}}]'),
(3, 1727925474, 'Lễ Tân', '[{\"home\":true,\"ds\":{\"TKTong\":true,\"BXHang\":true,\"TKKenh\":false,\"TKKhoa\":false,\"TKBenh\":false,\"TKTuvan\":false}},{\"QLBN\":true,\"ds\":{\"DSDKH\":true,\"action_DSDKH\":{\"create\":false,\"update\":true,\"delete\":false,\"see\":false,\"viewAllData\":true,\"phone\":false,\"excel\":false,\"status\":true,\"doctor\":true},\"CHTKBN\":false,\"LLTVBN\":false,\"BCCTDVKH\":false,\"BCXHHT\":false,\"BCDHTC\":false,\"XDLBN\":false,\"SSDLTCN\":false}},{\"TKKTC\":false,\"ds\":{\"CTDLM\":false,\"CDDABVM\":false,\"action_CDDABVM\":{\"create\":false,\"update\":false,\"delete\":false},\"CTDLDT\":false,\"CDDABVDT\":false,\"action_CDDABVDT\":{\"create\":false,\"update\":false,\"delete\":false}}},{\"BCDL\":false,\"ds\":{\"BCTH\":false,\"GT\":false,\"TUOI\":false,\"LBN\":false,\"NTT\":false,\"TTNV\":false,\"BSLT\":false,\"DVKH\":false}},{\"CD\":false,\"ds\":{\"CDBS\":false,\"action_CDBS\":{\"create\":false,\"update\":false,\"delete\":false},\"TLBT\":false,\"action_TLBT\":{\"create\":false,\"update\":false,\"delete\":false},\"CDLDTYT\":false,\"action_CDLDTYT\":{\"create\":false,\"update\":false,\"delete\":false},\"CDKBV\":false,\"action_CDKBV\":{\"create\":false,\"update\":false,\"delete\":false},\"CDCCTK\":false,\"action_CDCCTK\":{\"create\":false,\"update\":false,\"delete\":false}}},{\"TTCT\":false,\"ds\":{\"SDTTCT\":false,\"TDMK\":false,\"CDTC\":false}},{\"QLHT\":false,\"ds\":{\"QLCN\":false,\"action_QLCN\":{\"create\":false,\"update\":false,\"delete\":false,\"see\":false,\"close\":false},\"QLQ\":false,\"action_QLQ\":{\"create\":false,\"update\":false,\"delete\":false},\"DSBV\":false,\"action_DSBV\":{\"create\":false,\"update\":false,\"delete\":false},\"QLTB\":false,\"action_QLTB\":{\"create\":false,\"update\":false,\"delete\":false,\"close\":false}}},{\"LSTT\":false,\"ds\":{\"NKHD\":false,\"action_NKHD\":{\"delete\":false,\"see\":false},\"NKLDN\":false,\"action_NKLDN\":{\"delete\":false}}}]'),
(9, 1734318103, 'Quản lý', '[{\"home\":true,\"ds\":{\"TKTong\":true,\"BXHang\":true,\"TKKenh\":true,\"TKKhoa\":true,\"TKBenh\":true,\"TKTuvan\":true}},{\"QLBN\":true,\"ds\":{\"DSDKH\":true,\"action_DSDKH\":{\"create\":true,\"update\":true,\"delete\":true,\"see\":true,\"viewAllData\":true,\"phone\":true,\"excel\":true,\"money\":true},\"CHTKBN\":true,\"LLTVBN\":true,\"BCCTDVKH\":true,\"BCXHHT\":true,\"BCDHTC\":true,\"XDLBN\":true,\"SSDLTCN\":true}},{\"TKKTC\":true,\"ds\":{\"CTDLM\":true,\"CDDABVM\":true,\"action_CDDABVM\":{\"create\":true,\"update\":true,\"delete\":true},\"CTDLDT\":true,\"CDDABVDT\":true,\"action_CDDABVDT\":{\"create\":true,\"update\":true,\"delete\":true}}},{\"BCDL\":true,\"ds\":{\"BCTH\":true,\"GT\":true,\"TUOI\":true,\"LBN\":true,\"NTT\":true,\"TTNV\":true,\"BSLT\":true,\"DVKH\":true}},{\"CD\":true,\"ds\":{\"CDBS\":true,\"action_CDBS\":{\"create\":true,\"update\":true,\"delete\":true},\"TLBT\":true,\"action_TLBT\":{\"create\":true,\"update\":true,\"delete\":true},\"CDLDTYT\":true,\"action_CDLDTYT\":{\"create\":true,\"update\":true,\"delete\":true},\"CDKBV\":true,\"action_CDKBV\":{\"create\":true,\"update\":true,\"delete\":true},\"CDCCTK\":true,\"action_CDCCTK\":{\"create\":true,\"update\":true,\"delete\":true}}},{\"TTCT\":true,\"ds\":{\"SDTTCT\":true,\"TDMK\":true,\"CDTC\":true}},{\"QLHT\":false,\"ds\":{\"QLCN\":false,\"action_QLCN\":{\"create\":false,\"update\":false,\"delete\":false,\"see\":false,\"close\":false},\"QLQ\":false,\"action_QLQ\":{\"create\":false,\"update\":false,\"delete\":false},\"DSBV\":false,\"action_DSBV\":{\"create\":false,\"update\":false,\"delete\":false},\"QLTB\":false,\"action_QLTB\":{\"create\":false,\"update\":false,\"delete\":false,\"close\":false}}},{\"LSTT\":true,\"ds\":{\"NKHD\":true,\"action_NKHD\":{\"delete\":true,\"see\":true},\"NKLDN\":true,\"action_NKLDN\":{\"delete\":true}}}]');

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `roleId` int(11) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `isshow` tinyint(4) DEFAULT NULL,
  `online` tinyint(4) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `hospitalId` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `roleId`, `email`, `password`, `fullName`, `avatar`, `language`, `isshow`, `online`, `created_at`, `hospitalId`) VALUES
(3, 2, 'test@gmail.com', '$2b$10$xCgq5oPQAKwgllgBfJ43luruBpcQuRC5T3oWeStNxZg179fKBEvZu', 'nguyên văn a', '', 'vi', 1, 0, 1728024565, '[4,3,2]'),
(4, 1, 'admin@gmail.com', '$2b$10$xCgq5oPQAKwgllgBfJ43luruBpcQuRC5T3oWeStNxZg179fKBEvZu', 'Quản Trị Viên', '', 'vi', 1, 1, 1728024565, '[3,2,4]'),
(6, 2, 'sx@gmail.com', '$2b$10$MRRzOxPf24l.Mu6osaEWheTQHta2m3ojJTwFbSLbwUag7tUV1SmL2', 'Lê Văn A 1', '', 'en', 0, 0, 1728111579, '[3,2,4]'),
(7, 3, 'letan@gmail.com', '$2b$10$XWY7lcAaiIdFsjdB0gXwfeSUWwpwS76GnOiFnpHewvdurJ2oJSw7u', 'Lễ Tân', '', 'vi', 1, 0, 1734318157, '[2,3]'),
(8, 2, 'huonglan@gmail.com', '$2b$10$0qPDzbtJmCuVlEd2Tmcok.fABstMTcXWmb/gWTfzn4O4QJAg3jAkG', 'Hương Lan', '', 'vi', 1, 1, 1734318200, '[2]'),
(9, 9, 'manh@gmail.com', '$2b$10$VkPUF2.RYrjqQ4gmI2VwVezUpD1omwNtytbNsXocNj1XYht.imbPW', 'Mạnh', '', 'vi', 1, 0, 1734318239, '[2]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat-patient`
--
ALTER TABLE `chat-patient`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_dcf86d93e789faa648ff61f2ea9` (`userId`),
  ADD KEY `FK_0ed92c273e725decbceb7f7d4d0` (`patientId`);

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_53eb3aac32722b4981a5f306479` (`userId`),
  ADD KEY `FK_0ce987364b9a455af2a739558ab` (`hospitalId`);

--
-- Indexes for table `diseases`
--
ALTER TABLE `diseases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_3ab79e50ede07eb1279563b6d44` (`hospitalId`),
  ADD KEY `FK_a74ead9a051365bc2dbd24f73ab` (`userId`),
  ADD KEY `FK_c32fee302e8b9a6ac926010b739` (`departmentId`);

--
-- Indexes for table `district`
--
ALTER TABLE `district`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_148f1c944d0fec4114a54984da1` (`cityId`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_446a337d696d105186a71e5fd68` (`hospitalId`),
  ADD KEY `FK_e573a17ab8b6eea2b7fe9905fa8` (`userId`);

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_4b4791e938c787eb2c2e28525e7` (`patientId`),
  ADD KEY `FK_7e7425b17f9e707331e9a6c7335` (`userId`);

--
-- Indexes for table `history-login`
--
ALTER TABLE `history-login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `history-patient`
--
ALTER TABLE `history-patient`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_c4705978e954abf7d5667f30ec7` (`diseasesId`),
  ADD KEY `FK_433c228f9b1e24d7b05a35bbfd3` (`departmentId`),
  ADD KEY `FK_62a57bdd2685c8c37de3b896853` (`mediaId`),
  ADD KEY `FK_8f39ca532aa1a7def659ceada4d` (`cityId`),
  ADD KEY `FK_2c16c6cd13130314997b213ab0c` (`districtId`),
  ADD KEY `FK_ec353fab90efa535afaa6993628` (`doctorId`),
  ADD KEY `FK_1e785cbcb4c711feb89c0c5e0ad` (`userId`),
  ADD KEY `FK_5c2c5c2702270a5e2e4c603dbb6` (`hospitalId`);

--
-- Indexes for table `hospitals`
--
ALTER TABLE `hospitals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_58802f6c0c1f6a98f2b79d21a1a` (`patientId`),
  ADD KEY `FK_1ced25315eb974b73391fb1c81b` (`userId`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_15c9fb62d7d3cfd45372aaf37df` (`diseasesId`),
  ADD KEY `FK_b62c3945c3fa7333eadd8db2cd3` (`departmentId`),
  ADD KEY `FK_86149925e5ee1f2ce9ebd73bcaf` (`mediaId`),
  ADD KEY `FK_ea17fdcebea844503d9241dbd4b` (`cityId`),
  ADD KEY `FK_a8f557ede4964634072fc07c195` (`districtId`),
  ADD KEY `FK_3a86118a85d8fed2f3bf0181264` (`doctorId`),
  ADD KEY `FK_6636aefca0bdad8933c7cc3e394` (`userId`),
  ADD KEY `FK_da65d1381ddb43e17dbf9c3c43e` (`hospitalId`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_368e146b785b574f42ae9e53d5e` (`roleId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat-patient`
--
ALTER TABLE `chat-patient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `diseases`
--
ALTER TABLE `diseases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `district`
--
ALTER TABLE `district`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=702;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `history-login`
--
ALTER TABLE `history-login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;

--
-- AUTO_INCREMENT for table `history-patient`
--
ALTER TABLE `history-patient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=175;

--
-- AUTO_INCREMENT for table `hospitals`
--
ALTER TABLE `hospitals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `todos`
--
ALTER TABLE `todos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chat-patient`
--
ALTER TABLE `chat-patient`
  ADD CONSTRAINT `FK_0ed92c273e725decbceb7f7d4d0` FOREIGN KEY (`patientId`) REFERENCES `patient` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_dcf86d93e789faa648ff61f2ea9` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `departments`
--
ALTER TABLE `departments`
  ADD CONSTRAINT `FK_0ce987364b9a455af2a739558ab` FOREIGN KEY (`hospitalId`) REFERENCES `hospitals` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_53eb3aac32722b4981a5f306479` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `diseases`
--
ALTER TABLE `diseases`
  ADD CONSTRAINT `FK_3ab79e50ede07eb1279563b6d44` FOREIGN KEY (`hospitalId`) REFERENCES `hospitals` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_a74ead9a051365bc2dbd24f73ab` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_c32fee302e8b9a6ac926010b739` FOREIGN KEY (`departmentId`) REFERENCES `departments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `district`
--
ALTER TABLE `district`
  ADD CONSTRAINT `FK_148f1c944d0fec4114a54984da1` FOREIGN KEY (`cityId`) REFERENCES `city` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `doctor`
--
ALTER TABLE `doctor`
  ADD CONSTRAINT `FK_446a337d696d105186a71e5fd68` FOREIGN KEY (`hospitalId`) REFERENCES `hospitals` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_e573a17ab8b6eea2b7fe9905fa8` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `files`
--
ALTER TABLE `files`
  ADD CONSTRAINT `FK_4b4791e938c787eb2c2e28525e7` FOREIGN KEY (`patientId`) REFERENCES `patient` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_7e7425b17f9e707331e9a6c7335` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `history-patient`
--
ALTER TABLE `history-patient`
  ADD CONSTRAINT `FK_1e785cbcb4c711feb89c0c5e0ad` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_2c16c6cd13130314997b213ab0c` FOREIGN KEY (`districtId`) REFERENCES `district` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_433c228f9b1e24d7b05a35bbfd3` FOREIGN KEY (`departmentId`) REFERENCES `departments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_5c2c5c2702270a5e2e4c603dbb6` FOREIGN KEY (`hospitalId`) REFERENCES `hospitals` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_62a57bdd2685c8c37de3b896853` FOREIGN KEY (`mediaId`) REFERENCES `media` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_8f39ca532aa1a7def659ceada4d` FOREIGN KEY (`cityId`) REFERENCES `city` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_c4705978e954abf7d5667f30ec7` FOREIGN KEY (`diseasesId`) REFERENCES `diseases` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_ec353fab90efa535afaa6993628` FOREIGN KEY (`doctorId`) REFERENCES `doctor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `FK_1ced25315eb974b73391fb1c81b` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_58802f6c0c1f6a98f2b79d21a1a` FOREIGN KEY (`patientId`) REFERENCES `patient` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `patient`
--
ALTER TABLE `patient`
  ADD CONSTRAINT `FK_15c9fb62d7d3cfd45372aaf37df` FOREIGN KEY (`diseasesId`) REFERENCES `diseases` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_3a86118a85d8fed2f3bf0181264` FOREIGN KEY (`doctorId`) REFERENCES `doctor` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_6636aefca0bdad8933c7cc3e394` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_86149925e5ee1f2ce9ebd73bcaf` FOREIGN KEY (`mediaId`) REFERENCES `media` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_a8f557ede4964634072fc07c195` FOREIGN KEY (`districtId`) REFERENCES `district` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_b62c3945c3fa7333eadd8db2cd3` FOREIGN KEY (`departmentId`) REFERENCES `departments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_da65d1381ddb43e17dbf9c3c43e` FOREIGN KEY (`hospitalId`) REFERENCES `hospitals` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_ea17fdcebea844503d9241dbd4b` FOREIGN KEY (`cityId`) REFERENCES `city` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_368e146b785b574f42ae9e53d5e` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
