-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 18, 2021 at 12:42 PM
-- Server version: 5.6.49-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gianna_wnm608`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `category` varchar(32) NOT NULL,
  `date_create` datetime NOT NULL,
  `date_modify` datetime NOT NULL,
  `description` text NOT NULL,
  `thumbnail` varchar(128) NOT NULL,
  `images` varchar(256) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `category`, `date_create`, `date_modify`, `description`, `thumbnail`, `images`) VALUES
(1, 'seoul437', 45.00, 'fragrance1', '2021-04-18 11:54:55', '2021-04-18 11:54:55', 'from 437 street in Seoul, Korea', '437.jpg', 'main437.jpg,second437.jpg'),
(2, 'tokyo4564', 38.00, 'fragrance1', '2021-04-18 11:59:37', '2021-04-18 11:59:37', 'from 4564 street in Tokyo, Japan', '4564.jpg', 'main4564.jpg,second4564.jpg'),
(3, 'Paris75006', 50.00, 'fragrance2', '2021-04-18 12:29:36', '2021-04-18 12:29:36', 'from 75006 Paris, France', '75006.jpg', 'main75006.jpg,second75006.jpg'),
(4, 'Hannam112', 45.00, 'fragrance1', '2021-04-18 12:29:36', '2021-04-18 12:29:36', 'from 112 Hannam, Seoul, Korea', '112.jpg', 'main112.jpg,second112.jpg'),
(5, 'Kyoto1120', 45.00, 'fragrance1', '2021-04-18 12:36:45', '2021-04-18 12:36:45', 'from 1120 street Kyoto, Japan', '1120.jpg', 'main0501.jpg,second1120.jpg'),
(6, 'Seorae0501', 49.00, 'fragrance1', '2021-04-18 12:36:45', '2021-04-18 12:36:45', 'from 0501 street, Seoul, Korea', '0501.jpg', 'main0501.jpg,second0501.jpg'),
(7, 'Ewha Flower', 49.00, 'fragrance1', '2021-04-18 12:36:45', '2021-04-18 12:36:45', 'from Ewha Womans University\'s mood, Seoul, Korea', 'ewha.jpg', 'mainewha.jpg,secondewha.jpg'),
(8, 'Pleasanton 6310', 65.00, 'fragrance1', '2021-04-18 12:36:45', '2021-04-18 12:36:45', 'from 6310 street, Pleasanton, California', '6310.jpg', 'main6310.jpg,second6310.jpg'),
(9, 'Irvine Vibe', 73.00, 'fragrance3', '2021-04-18 12:36:45', '2021-04-18 12:36:45', 'from Irvine city, California', 'irvine.jpg', 'mainirvine.jpg,secondirvine.jpg'),
(10, 'Nnamsan 1940', 100.00, 'fragrance3', '2021-04-18 12:40:45', '2021-04-18 12:40:45', 'from Namsan mountain in Seoul, Korea', 'namsan.jpg', 'mainnamsan.jpg,secondnamsan.jpg'),
(11, 'Palisades', 71.00, 'fragrance3', '2021-04-18 12:40:45', '2021-04-18 12:40:45', 'from Palisades hill in California', 'palisades.jpg', 'main_palisades.jpg,second_palisades.jpg'),
(12, 'Bel Air 539', 74.00, 'fragrance3', '2021-04-18 12:41:59', '2021-04-18 12:41:59', 'from 539 street, Bel Air in California', '539.jpg', 'main539.jpg,second539.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
