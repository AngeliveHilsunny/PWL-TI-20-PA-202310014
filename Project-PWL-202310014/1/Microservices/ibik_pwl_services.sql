-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 31, 2023 at 06:45 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ibik_pwl_services`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `code` varchar(10) DEFAULT NULL,
  `credit` int(11) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `code`, `credit`, `is_active`, `name`) VALUES
(1, 'TIFA3S3', 3, 1, 'Teknologi Microservices / Webservices');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `stock` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `description`, `is_active`, `name`, `price`, `stock`) VALUES
(1, 'bahan dari karet', 1, 'Sendal Jepit SWallow', '30000', 5),
(2, 'dari kedelai sapi', 1, 'Kecap ABC', '25000', 10),
(3, 'langsung dari pohon jati', 1, 'Tissue Keseleo', '8000', 5),
(4, 'Dari beling, hati2 pecah ', 1, 'Toples Acar', '93000', 10),
(6, 'Dari tanah kuburan', 1, 'Gelas Kupi', '35000', 20);

-- --------------------------------------------------------

--
-- Table structure for table `programs`
--

CREATE TABLE `programs` (
  `id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `programs`
--

INSERT INTO `programs` (`id`, `description`, `is_active`, `name`) VALUES
(1, 'S1', 1, 'Bachelor Degree'),
(2, 'S2', 1, 'Master Degree'),
(3, 'D3', 1, 'Diploma Degree');

-- --------------------------------------------------------

--
-- Table structure for table `program_study`
--

CREATE TABLE `program_study` (
  `id` int(11) NOT NULL,
  `code` varchar(10) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `program_id` int(11) DEFAULT NULL,
  `faculty_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `program_study`
--

INSERT INTO `program_study` (`id`, `code`, `description`, `is_active`, `name`, `program_id`, `faculty_id`) VALUES
(1, 'FB', NULL, 1, 'Fakultas Bisnis', 1, NULL),
(2, 'FPI', NULL, 1, 'Fakultas Pariwisata dan Informatika', 1, NULL),
(3, 'AK', NULL, 1, 'Akuntansi', 1, 1),
(4, 'MJ', NULL, 1, 'Manajemen', 1, 1),
(5, 'BK', NULL, 1, 'Biokewirausahaan', 1, 1),
(6, 'TI', NULL, 1, 'Teknologi Informatika', 1, 2),
(7, 'SI', NULL, 1, 'Sistem Informasi', 1, 2),
(8, 'PW', NULL, 1, 'Pariwisata', 1, 2),
(10, 'PK', NULL, 1, 'Pajak Keuangan', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `birthdate` date DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `firstname` varchar(20) DEFAULT NULL,
  `lastname` varchar(20) DEFAULT NULL,
  `middlename` varchar(20) DEFAULT NULL,
  `npm` varchar(15) DEFAULT NULL,
  `program_study_id` int(11) DEFAULT NULL,
  `program_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `birthdate`, `email`, `firstname`, `lastname`, `middlename`, `npm`, `program_study_id`, `program_id`) VALUES
(1, '2000-11-12', '192310011@student.ibik.ac.id', 'Reza', 'Arab', 'Zaini', '192310011', 6, 1),
(2, '2000-11-12', '192310016@student.ibik.ac.id', 'Candra', 'Wiguna', 'Agnitya', '192310016', 6, 1),
(3, '2000-11-12', '202310007@student.ibik.ac.id', 'Shania', 'Gunawan', 'Oktaviani', '202310007', 6, 1),
(4, '2000-11-12', '202310014@student.ibik.ac.id', 'Angelive', 'Hilsunny', NULL, '202310014', 6, 1),
(6, '2000-11-12', '202310016@student.ibik.ac.id', 'Michael', 'Ruswan', 'Mervin', '202310016', 6, 1),
(7, '2000-11-12', '202310015@student.ibik.ac.id', 'Irvan', 'Rizky', 'Ariansyah', '202310015', 6, 1),
(8, '2000-11-12', '202310017@student.ibik.ac.id', 'Novi', 'Widia', 'Damayanti', '202310017', 6, 1),
(9, '2000-11-12', '202310018@student.ibik.ac.id', 'Raiyana', 'Jan', 'Winata', '202310018', 6, 1),
(10, '2000-11-12', '202310020@student.ibik.ac.id', 'Thesya', 'Marcella', NULL, '202310020', 6, 1),
(11, '2000-11-12', '202310021@student.ibik.ac.id', 'Muhammad', 'Ilham', NULL, '202310021', 6, 1),
(12, '2000-11-12', '202310028@student.ibik.ac.id', 'Diva', 'Lutfiando', NULL, '202310028', 6, 1),
(13, '2000-11-12', '202310034@student.ibik.ac.id', 'Raihan', 'Pratama', 'Dwi', '202310034', 6, 1),
(14, '2000-11-12', '202310038@student.ibik.ac.id', 'Raihan', 'Win Cahya', 'Dwi', '202310038', 6, 1),
(15, '2000-11-12', '202310041@student.ibik.ac.id', 'Muhammad', 'Audya', 'Fadhlurrahman', '202310041', 6, 1),
(16, '2000-11-12', '202310055@student.ibik.ac.id', 'Ryan', 'Rohandy', 'Sachio', '202310055', 6, 1),
(17, '2000-11-12', '202310061@student.ibik.ac.id', 'Eki', 'Virgiana', NULL, '202310061', 6, 1),
(18, '2000-11-12', '202310063@student.ibik.ac.id', 'Muhamad', 'Al', 'Kahfi', '202310063', 6, 1),
(19, '2000-11-12', '202310064@student.ibik.ac.id', 'Achmad', 'Buhori', NULL, '202310064', 6, 1),
(20, '2000-11-12', '202310065@student.ibik.ac.id', 'Fachry', 'Syah', 'Alam', '202310065', 6, 1),
(21, '2000-11-12', '202310067@student.ibik.ac.id', 'Yudhistira', 'Kusuma', NULL, '202310067', 6, 1),
(22, '2000-11-12', '202310068@student.ibik.ac.id', 'Afanda', 'Faizulyan', 'Rafi', '202310068', 6, 1),
(23, '2000-11-12', '202310072@student.ibik.ac.id', 'Fajar', 'Alfianto', NULL, '202310072', 6, 1),
(24, '2000-11-12', '202310077@student.ibik.ac.id', 'Nicholas', 'Fico', NULL, '202310077', 6, 1),
(25, '2000-11-12', '222310082@student.ibik.ac.id', 'Soni', 'Nugraha', NULL, '222310082', 6, 1);

-- --------------------------------------------------------

--
-- Table structure for table `student_rel_courses`
--

CREATE TABLE `student_rel_courses` (
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_rel_courses`
--

INSERT INTO `student_rel_courses` (`student_id`, `course_id`) VALUES
(3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `student_rel_product`
--

CREATE TABLE `student_rel_product` (
  `invoice_code` varchar(255) NOT NULL,
  `total` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_rel_product`
--

INSERT INTO `student_rel_product` (`invoice_code`, `total`, `product_id`, `student_id`) VALUES
('abc123', 3, 4, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `programs`
--
ALTER TABLE `programs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `program_study`
--
ALTER TABLE `program_study`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_clsuoncsm6le76elr6r117u99` (`code`),
  ADD KEY `FKgf1o7td7vrje5cauq3so07rq2` (`program_id`),
  ADD KEY `FKcd2ktf2pvri17mher1eoicgs5` (`faculty_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_m5ncd3y9nfvpccmxt1p1n39bs` (`npm`),
  ADD KEY `FKikk2bx8ym3e7nst2rea4oi2d6` (`program_study_id`),
  ADD KEY `FKosyri4p0rpereimcss9cm3cwv` (`program_id`);

--
-- Indexes for table `student_rel_courses`
--
ALTER TABLE `student_rel_courses`
  ADD PRIMARY KEY (`student_id`,`course_id`),
  ADD KEY `FKbgpnxmkbq4lg48e4jm27rdi1q` (`course_id`);

--
-- Indexes for table `student_rel_product`
--
ALTER TABLE `student_rel_product`
  ADD PRIMARY KEY (`student_id`,`product_id`),
  ADD KEY `FKhm4b3pf4cyk0joxxv7vcw5wuj` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `programs`
--
ALTER TABLE `programs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `program_study`
--
ALTER TABLE `program_study`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `program_study`
--
ALTER TABLE `program_study`
  ADD CONSTRAINT `FKcd2ktf2pvri17mher1eoicgs5` FOREIGN KEY (`faculty_id`) REFERENCES `program_study` (`id`),
  ADD CONSTRAINT `FKgf1o7td7vrje5cauq3so07rq2` FOREIGN KEY (`program_id`) REFERENCES `programs` (`id`);

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `FKikk2bx8ym3e7nst2rea4oi2d6` FOREIGN KEY (`program_study_id`) REFERENCES `program_study` (`id`),
  ADD CONSTRAINT `FKosyri4p0rpereimcss9cm3cwv` FOREIGN KEY (`program_id`) REFERENCES `programs` (`id`);

--
-- Constraints for table `student_rel_courses`
--
ALTER TABLE `student_rel_courses`
  ADD CONSTRAINT `FKbgpnxmkbq4lg48e4jm27rdi1q` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`),
  ADD CONSTRAINT `FKhmy4g8coq39gdyiihe6fhjf6g` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`);

--
-- Constraints for table `student_rel_product`
--
ALTER TABLE `student_rel_product`
  ADD CONSTRAINT `FK4kxn72k0vdj4c0n3dye8i4eax` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  ADD CONSTRAINT `FKhm4b3pf4cyk0joxxv7vcw5wuj` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
