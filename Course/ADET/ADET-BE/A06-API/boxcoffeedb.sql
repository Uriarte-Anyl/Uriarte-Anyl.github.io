-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2025 at 02:38 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `boxcoffeedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `quantity` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `name`, `quantity`) VALUES
(1, 'Hot Coffee', '5'),
(2, 'Cold Coffee', '5'),
(3, 'Milktea', '5'),
(4, 'Tea', '2'),
(5, 'Shake', '2'),
(6, 'Pastry', '2'),
(7, 'Snacks', '2'),
(8, 'Add-Ons', '1'),
(9, 'Merchandise', '1');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(11) NOT NULL,
  `categoryID` int(4) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` int(4) NOT NULL,
  `size` varchar(20) NOT NULL,
  `code` varchar(20) NOT NULL,
  `isAvailable` varchar(6) NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `categoryID`, `name`, `price`, `size`, `code`, `isAvailable`, `image`) VALUES
(1, 1, 'Small Espresso', 75, '6oz', 'BC-SME', 'true', 'espresso.png'),
(2, 1, 'Medium Espresso', 149, '8oz', 'BC-MDE', 'true', 'espresso.png'),
(3, 1, 'Large Espresso', 189, '12oz', 'BC-LE', 'true', 'espresso.png'),
(4, 1, 'Small Americano', 75, '6oz', 'BC-SMA', 'true', 'americano.png'),
(5, 1, 'Medium Americano', 149, '8oz', 'BC-MDA', 'true', 'americano.png'),
(6, 1, 'Large Americano', 189, '8oz', 'BC-LA', 'true', 'americano.png'),
(7, 1, 'Small Cappucino', 89, '6oz', 'BC-SMC', 'true', 'cappucino.png'),
(8, 1, 'Medium Cappucino', 179, '6oz', 'BC-MDA', 'true', 'cappucino.png'),
(9, 1, 'Large Cappucino', 209, '6oz', 'BC-LC', 'true', 'cappucino.png'),
(10, 1, 'Small Latte', 209, '6oz', 'BC-SML', 'true', 'latte.png'),
(11, 1, 'Medium Latte', 89, '6oz', 'BC-MDL', 'true', 'latte.png'),
(12, 1, 'Large Latte', 179, '6oz', 'BC-LL', 'true', 'latte.png'),
(13, 1, 'Small Drip', 209, '6oz', 'BC-SMD', 'true', 'drip.png'),
(14, 1, 'Medium Drip', 69, '6oz', 'BC-MDD', 'true', 'drip.png'),
(15, 1, 'Large Drip', 89, '6oz', 'BC-LD', 'true', 'drip.png'),
(16, 2, 'Small Iced Coffee', 159, '6oz', 'BC-SMIC', 'true', 'ice_coffee.png'),
(17, 2, 'Medium Iced Coffee', 159, '12oz', 'BC-MDIC', 'true', 'ice_coffee.png'),
(18, 2, 'Large Iced Coffee', 209, '22oz', 'BC-LIC', 'true', 'ice_coffee.png'),
(19, 2, 'Small Cold Brew', 69, '8oz', 'BC-SMCB', 'true', 'cold_brew.png'),
(20, 2, 'Medium Cold Brew', 139, '12oz', 'BC-MDCB', 'true', 'cold_brew.png'),
(21, 2, 'Large Cold Brew', 179, '22oz', 'BC-LCB', 'true', 'cold_brew.png'),
(22, 2, 'Small Iced Espresso', 89, '8oz', 'BC-SMIE', 'true', 'ice_espresso.png'),
(23, 2, 'Medium Iced Espresso', 179, '12oz', 'BC-MDIE', 'true', 'ice_espresso.png'),
(24, 2, 'Large Iced Espresso', 209, '22oz', 'BC-LIE', 'true', 'ice_espresso.png'),
(25, 2, 'Small Iced Caffè Americano', 89, '8oz', 'BC-SMICA', 'true', 'ice_caffe_americano.png'),
(26, 2, 'Medium Iced Caffè Americano', 159, '12oz', 'BC-MDICA', 'true', 'ice_caffe_americano.png'),
(27, 2, 'Large Iced Caffè Americano', 209, '22oz', 'BC-LICA', 'true', 'ice_caffe_americano.png'),
(28, 2, 'Small Iced Latte', 89, '8oz', 'BC-SMIL', 'true', 'ice_latte.png'),
(29, 2, 'Medium Iced Latte', 159, '12oz', 'BC-MDIL', 'true', 'ice_latte.png'),
(30, 2, 'Large Iced Latte', 209, '22oz', 'BC-LIL', 'true', 'ice_latte.png'),
(31, 3, 'Small Wintermelon', 29, '12oz', 'BC-SMWM', 'true', 'milktea.png'),
(32, 3, 'Medium Wintermelon', 39, '16oz', 'BC-MDWM', 'true', 'milktea.png'),
(33, 3, 'Large Wintermelon', 59, '22oz', 'BC-LWM', 'true', 'milktea.png'),
(34, 3, 'Small Okinawa', 29, '12oz', 'BC-SMO', 'true', 'milktea.png'),
(35, 3, 'Medium Okinawa', 39, '16oz', 'BC-MDO', 'true', 'milktea.png'),
(36, 3, 'Large Okinawa', 59, '22oz', 'BC-LO', 'true', 'milktea.png'),
(37, 3, 'Small Hokkaido', 29, '12oz', 'BC-SMH', 'true', 'milktea.png'),
(38, 3, 'Medium Hokkaido', 39, '16oz', 'BC-MDH', 'true', 'milktea.png'),
(39, 3, 'Large Hokkaido', 59, '22oz', 'BC-LH', 'true', 'milktea.png'),
(40, 3, 'Small Matcha', 29, '12oz', 'BC-SMM', 'true', 'matcha.png'),
(41, 3, 'Medium Matcha', 39, '16oz', 'BC-MDM', 'true', 'matcha.png'),
(42, 3, 'Large Matcha', 59, '22oz', 'BC-LM', 'true', 'matcha.png'),
(43, 3, 'Small Strawberry', 29, '12oz', 'BC-SMS', 'false', 'strawberry.png'),
(44, 3, 'Medium Strawberry', 39, '16oz', 'BC-MDS', 'false', 'strawberry.png'),
(45, 3, 'Large Strawberry', 59, '22oz', 'BC-LS', 'false', 'strawberry.png'),
(46, 3, 'Small Taro', 29, '12oz', 'BC-SMT', 'true', 'taro.png'),
(47, 3, 'Medium Taro', 39, '16oz', 'BC-MDT', 'true', 'taro.png'),
(48, 3, 'Large Taro', 59, '22oz', 'BC-LT', 'true', 'taro.png'),
(49, 3, 'Small Honeydew', 29, '12oz', 'BC-SMHD', 'false', 'honeydew.png'),
(50, 3, 'Medium Honeydew', 39, '16oz', 'BC-MDHD', 'false', 'honeydew.png'),
(51, 3, 'Large Honeydew', 59, '22oz', 'BC-LHD', 'false', 'honeydew.png'),
(52, 4, 'Green Tea', 75, '6oz', 'BC-GT', 'true', 'green_tea.png'),
(53, 4, 'Matcha Tea', 75, '6oz', 'BC-MT', 'true', 'matcha_tea.png'),
(54, 4, 'Black Tea', 75, '6oz', 'BC-BT', 'false', 'black_tea.png'),
(55, 4, 'White Tea', 75, '6oz', 'BC-WT', 'false', 'white_tea.png'),
(56, 5, 'Vanilla Shake', 75, '16oz', 'BC-VS', 'false', 'vanilla_shake.png'),
(57, 5, 'Chocolate Shake', 75, '16oz', 'BC-CS', 'true', 'chocolate_shake.png'),
(58, 5, 'Strawberry Shake', 75, '16oz', 'BC-SS', 'true', 'strawberry_shake.png'),
(59, 6, 'Chocolate Cake', 300, 'Medium', 'BC-CC', 'true', 'chocolate_cake.png'),
(60, 6, 'Chocolate Chip Cookie', 55, 'Small', 'BC-CCC', 'true', 'cookie_chip.png'),
(61, 7, 'Nachos', 75, 'Medium', 'BC-N', 'true', 'nachos.png'),
(62, 7, 'Fries', 75, 'Medium', 'BC-F', 'true', 'fries.png'),
(63, 8, 'Pearl', 15, 'None', 'BC-P', 'true', 'pearl.png'),
(64, 9, 'Box Coffee White Shirt', 499, 'BC-MWS', 'BC-LWS', 'true', 'merch.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
