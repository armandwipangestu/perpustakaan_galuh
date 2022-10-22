-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 22, 2022 at 07:32 PM
-- Server version: 10.9.3-MariaDB
-- PHP Version: 8.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perpustakaan_galuh`
--

-- --------------------------------------------------------

--
-- Table structure for table `anggota`
--

CREATE TABLE `anggota` (
  `id` int(11) NOT NULL,
  `id_anggota` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nama_anggota` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `jenis_kelamin` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alamat` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `no_telepon` int(13) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `anggota`
--

INSERT INTO `anggota` (`id`, `id_anggota`, `nama_anggota`, `jenis_kelamin`, `alamat`, `no_telepon`, `createdAt`, `updatedAt`) VALUES
(1, 'AG001', 'Arman Dwi Pangestu', 'Laki-laki', 'Jl. Jakarta', 1234567890, '2022-10-22 18:31:49', '2022-10-22 18:31:49'),
(2, 'AG002', 'Sandhika Galih', 'Laki-laki', 'Jl. Antapani', 987654321, '2022-10-22 18:32:13', '2022-10-22 18:32:13'),
(3, 'AG003', 'Eko Kurniawan Khannedy', 'Laki-laki', 'Jl. Bogor', 543216890, '2022-10-22 18:34:40', '2022-10-22 18:34:40'),
(4, 'AG004', 'Mikasa', 'Perempuan', 'Jl. Tokyo', 678905432, '2022-10-22 18:35:45', '2022-10-22 18:35:45');

-- --------------------------------------------------------

--
-- Table structure for table `buku`
--

CREATE TABLE `buku` (
  `id` int(11) NOT NULL,
  `id_buku` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `judul_buku` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pengarang` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `penerbit` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tahun_terbit` int(11) DEFAULT NULL,
  `gambar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bahasa` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `buku`
--

INSERT INTO `buku` (`id`, `id_buku`, `judul_buku`, `pengarang`, `penerbit`, `tahun_terbit`, `gambar`, `bahasa`, `createdAt`, `updatedAt`) VALUES
(1, 'BK001', 'Death Note', 'Tsugumi Ohba', 'Viz Media', 2005, 'https://covers.openlibrary.org/b/id/6390630-L.jpg', 'English', '2022-10-22 18:41:28', '2022-10-22 18:41:28'),
(2, 'BK002', 'Jujutsu Kaisen', 'Gege Akutami', 'Viz Media', 2020, 'https://covers.openlibrary.org/b/id/12708006-L.jpg', 'English', '2022-10-22 18:44:11', '2022-10-22 18:44:11'),
(3, 'BK003', 'Naruto', 'Masashi Kishimoto', 'Elex Media Komputindo', 2005, 'https://covers.openlibrary.org/b/id/11684208-L.jpg', 'Indonesia', '2022-10-22 18:44:40', '2022-10-22 18:44:40'),
(4, 'BK004', 'Attack on Titan', 'Hajime Isayama', 'Elex Media Komputindo', 2021, 'https://ebooks.gramedia.com/ebook-covers/65407/thumb_image_normal/BLK_LAOTBTF12021469854.jpg', 'Indonesia', '2022-10-22 18:45:42', '2022-10-22 18:45:42'),
(5, 'BK005', 'Doraemon Petualangan 17', 'Fujiko F. Fujio', 'Elex Media Komputindo', 2016, 'https://www.bukukita.com/babacms/displaybuku/94347_f.jpg', 'Indonesia', '2022-10-22 18:46:19', '2022-10-22 18:46:19'),
(6, 'BK006', 'Ready Player One', 'Ernest Cline', 'Gramedia Pustaka Utama', 2018, 'https://ebooks.gramedia.com/ebook-covers/42028/thumb_image_normal/ID_GPU2018MTH04RPON.jpg', 'Indonesia', '2022-10-22 18:46:50', '2022-10-22 18:46:50'),
(7, 'BK007', 'Lancar Java dan Javascript', 'Jubilee Enterprise', 'Elex Media Komputindo', 2019, 'https://cdn.gramedia.com/uploads/items/9786230005633_Cov_Lancar_Ja.jpg', 'Indonesia', '2022-10-22 18:47:35', '2022-10-22 18:47:35'),
(8, 'BK008', 'Semua Bisa Menjadi Programmer JavaScript & Node.js', 'Ir. Yuniar Supardi', 'Elex Media Komputindo', 2020, 'https://cdn.gramedia.com/uploads/items/9786230019760_Cover_Semua_Bisa_Menjadi_Programmer_Javascrift_Node_JS.jpg', 'Indonesia', '2022-10-22 18:48:03', '2022-10-22 18:48:03'),
(9, 'BK009', 'Bicara Itu Ada Seninya', 'Oh Su Hyang', 'Bhuana Ilmu Populer', 2016, 'https://cdn.gramedia.com/uploads/items/9786024553920.jpg', 'Indonesia', '2022-10-22 18:48:34', '2022-10-22 18:48:34'),
(10, 'BK010', 'Filosofi Teras Edisi Baru-Filsafat Yunani-Romawi Kuno untuk Mental Tangguh Masa', 'Henry Manampiring', 'Penerbit Buku Kompas', 2022, 'https://cdn.gramedia.com/uploads/items/img20220101_11444970.jpg', 'Indonesia', '2022-10-22 18:49:09', '2022-10-22 18:49:09');

-- --------------------------------------------------------

--
-- Table structure for table `peminjam`
--

CREATE TABLE `peminjam` (
  `id` int(11) NOT NULL,
  `id_peminjam` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nama_peminjam` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `judul_buku` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tanggal_pinjam` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tanggal_kembali` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `peminjam`
--

INSERT INTO `peminjam` (`id`, `id_peminjam`, `nama_peminjam`, `judul_buku`, `tanggal_pinjam`, `tanggal_kembali`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'PM001', 'Arman Dwi Pangestu', 'Jujutsu Kaisen', '2022-10-22T18:55:12.910Z', '2022-10-29T18:55:12.000Z', 'Sudah Dikumpulkan', '2022-10-22 18:55:26', '2022-10-22 18:55:38'),
(2, 'PM002', 'Sandhika Galih', 'Semua Bisa Menjadi Programmer JavaScript & Node.js', '2022-09-30T18:56:49.000Z', '2022-10-31T18:56:49.000Z', 'Belum Dikumpulkan', '2022-10-22 18:57:09', '2022-10-22 18:57:09'),
(3, 'PM003', 'Eko Kurniawan Khannedy', 'Ready Player One', '2022-10-12T18:57:21.000Z', '2022-10-25T18:57:21.000Z', 'Belum Dikumpulkan', '2022-10-22 18:57:38', '2022-10-22 18:57:38'),
(4, 'PM004', 'Mikasa', 'Attack on Titan', '2022-07-30T18:57:45.000Z', '2022-09-02T18:57:45.000Z', 'Belum Dikumpulkan', '2022-10-22 18:58:13', '2022-10-22 18:58:13'),
(5, 'PM005', 'Arman Dwi Pangestu', 'Attack on Titan', '2022-10-22T18:58:24.597Z', '2022-11-04T18:58:24.000Z', 'Belum Dikumpulkan', '2022-10-22 18:58:41', '2022-10-22 18:58:41'),
(6, 'PM006', 'Arman Dwi Pangestu', 'Lancar Java dan Javascript', '2022-11-02T18:59:01.000Z', '2022-11-23T18:59:01.000Z', 'Sudah Dikumpulkan', '2022-10-22 18:59:20', '2022-10-22 19:02:15'),
(7, 'PM007', 'Arman Dwi Pangestu', 'Bicara Itu Ada Seninya', '2022-12-20T18:59:23.000Z', '2023-01-24T18:59:23.000Z', 'Belum Dikumpulkan', '2022-10-22 18:59:47', '2022-10-22 18:59:47'),
(8, 'PM008', 'Sandhika Galih', 'Naruto', '2022-12-05T18:59:59.000Z', '2022-12-06T18:59:59.000Z', 'Sudah Dikumpulkan', '2022-10-22 19:00:23', '2022-10-22 19:02:38'),
(9, 'PM009', 'Eko Kurniawan Khannedy', 'Filosofi Teras Edisi Baru-Filsafat Yunani-Romawi Kuno untuk Mental Tangguh Masa', '2022-10-23T19:00:26.000Z', '2022-10-24T19:00:26.000Z', 'Sudah Dikumpulkan', '2022-10-22 19:00:52', '2022-10-22 19:02:32'),
(10, 'PM010', 'Mikasa', 'Death Note', '2022-04-03T19:01:01.000Z', '2022-05-04T19:01:01.000Z', 'Sudah Dikumpulkan', '2022-10-22 19:01:31', '2022-10-22 19:01:55');

-- --------------------------------------------------------

--
-- Table structure for table `penerbit`
--

CREATE TABLE `penerbit` (
  `id` int(11) NOT NULL,
  `penerbit` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `penerbit`
--

INSERT INTO `penerbit` (`id`, `penerbit`, `createdAt`, `updatedAt`) VALUES
(1, 'Viz Media', '2022-10-22 18:40:11', '2022-10-22 18:40:11'),
(2, 'Elex Media Komputindo', '2022-10-22 18:40:19', '2022-10-22 18:40:19'),
(3, 'Gramedia Pustaka Utama', '2022-10-22 18:40:31', '2022-10-22 18:40:31'),
(4, 'Bhuana Ilmu Populer', '2022-10-22 18:40:40', '2022-10-22 18:40:40'),
(5, 'Penerbit Buku Kompas', '2022-10-22 18:40:49', '2022-10-22 18:40:49');

-- --------------------------------------------------------

--
-- Table structure for table `pengarang`
--

CREATE TABLE `pengarang` (
  `id` int(11) NOT NULL,
  `pengarang` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pengarang`
--

INSERT INTO `pengarang` (`id`, `pengarang`, `createdAt`, `updatedAt`) VALUES
(1, 'Tsugumi Ohba', '2022-10-22 18:38:38', '2022-10-22 18:38:38'),
(2, 'Gege Akutami', '2022-10-22 18:38:44', '2022-10-22 18:38:44'),
(3, 'Masashi Kishimoto', '2022-10-22 18:38:51', '2022-10-22 18:38:51'),
(4, 'Hajime Isayama', '2022-10-22 18:39:01', '2022-10-22 18:39:01'),
(5, 'Fujiko F. Fujio', '2022-10-22 18:39:09', '2022-10-22 18:39:09'),
(6, 'Ernest Cline', '2022-10-22 18:39:16', '2022-10-22 18:39:16'),
(7, 'Jubilee Enterprise', '2022-10-22 18:39:23', '2022-10-22 18:39:23'),
(8, 'Ir. Yuniar Supardi', '2022-10-22 18:39:45', '2022-10-22 18:39:45'),
(9, 'Oh Su Hyang', '2022-10-22 18:39:53', '2022-10-22 18:39:53'),
(10, 'Henry Manampiring', '2022-10-22 18:39:58', '2022-10-22 18:39:58');

-- --------------------------------------------------------

--
-- Table structure for table `pengembalian`
--

CREATE TABLE `pengembalian` (
  `id` int(11) NOT NULL,
  `nama_peminjam` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `judul_buku` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tanggal_pinjam` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tanggal_kembali` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tanggal_pengembalian` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pengembalian`
--

INSERT INTO `pengembalian` (`id`, `nama_peminjam`, `judul_buku`, `tanggal_pinjam`, `tanggal_kembali`, `tanggal_pengembalian`, `createdAt`, `updatedAt`) VALUES
(1, 'Arman Dwi Pangestu', 'Jujutsu Kaisen', '2022-10-22T18:55:12.910Z', '2022-10-29T18:55:12.000Z', '2022-10-22T18:55:36.932Z', '2022-10-22 18:55:38', '2022-10-22 18:55:38'),
(2, 'Mikasa', 'Death Note', '2022-04-03T19:01:01.000Z', '2022-05-04T19:01:01.000Z', '2022-10-22T19:01:52.227Z', '2022-10-22 19:01:55', '2022-10-22 19:01:55'),
(3, 'Arman Dwi Pangestu', 'Lancar Java dan Javascript', '2022-11-02T18:59:01.000Z', '2022-11-23T18:59:01.000Z', '2022-10-22T19:02:04.698Z', '2022-10-22 19:02:15', '2022-10-22 19:02:15'),
(4, 'Eko Kurniawan Khannedy', 'Filosofi Teras Edisi Baru-Filsafat Yunani-Romawi Kuno untuk Mental Tangguh Masa', '2022-10-23T19:00:26.000Z', '2022-10-24T19:00:26.000Z', '2022-10-22T19:02:25.401Z', '2022-10-22 19:02:32', '2022-10-22 19:02:32'),
(5, 'Sandhika Galih', 'Naruto', '2022-12-05T18:59:59.000Z', '2022-12-06T18:59:59.000Z', '2022-10-22T19:02:33.060Z', '2022-10-22 19:02:38', '2022-10-22 19:02:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anggota`
--
ALTER TABLE `anggota`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `buku`
--
ALTER TABLE `buku`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `peminjam`
--
ALTER TABLE `peminjam`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `penerbit`
--
ALTER TABLE `penerbit`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pengarang`
--
ALTER TABLE `pengarang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pengembalian`
--
ALTER TABLE `pengembalian`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `anggota`
--
ALTER TABLE `anggota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `buku`
--
ALTER TABLE `buku`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `peminjam`
--
ALTER TABLE `peminjam`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `penerbit`
--
ALTER TABLE `penerbit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pengarang`
--
ALTER TABLE `pengarang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `pengembalian`
--
ALTER TABLE `pengembalian`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
