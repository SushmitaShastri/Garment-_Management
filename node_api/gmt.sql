-- MySQL dump 10.13  Distrib 8.0.30, for Linux (x86_64)
--
-- Host: localhost    Database: management
-- ------------------------------------------------------
-- Server version	8.0.30-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `phone` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assigned_to`
--

DROP TABLE IF EXISTS `assigned_to`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assigned_to` (
  `wid` int(20) DEFAULT NULL ,
  `pid` int(20) DEFAULT NULL ,
  `vid` int(20) DEFAULT NULL ,
  `date` date DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `quantity` varchar(20) DEFAULT NULL,
  `damage` varchar(20) DEFAULT NULL,
  KEY `wid` (`wid`),
  KEY `pid` (`pid`),
  KEY `vid` (`vid`),
  CONSTRAINT `assigned_to_ibfk_1` FOREIGN KEY (`wid`) REFERENCES `employee` (`wid`),
  CONSTRAINT `assigned_to_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `order_request` (`pid`),
  CONSTRAINT `assigned_to_ibfk_3` FOREIGN KEY (`vid`) REFERENCES `order_request` (`vid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assigned_to`
--

LOCK TABLES `assigned_to` WRITE;
/*!40000 ALTER TABLE `assigned_to` DISABLE KEYS */;
/*!40000 ALTER TABLE `assigned_to` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalog`
--

DROP TABLE IF EXISTS `catalog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `catalog` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `size` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalog`
--

LOCK TABLES `catalog` WRITE;
/*!40000 ALTER TABLE `catalog` DISABLE KEYS */;
/*!40000 ALTER TABLE `catalog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `wid` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `contact` bigint DEFAULT NULL,
  `address` varchar(20) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`wid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_request`
--

DROP TABLE IF EXISTS `order_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_request` (
  `pid` int(20) DEFAULT NULL,
  `vid` int(20) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `quantity` varchar(20) DEFAULT NULL,
  `damage` float DEFAULT NULL,
  `cid` int(20) DEFAULT NULL,
  KEY `pid` (`pid`),
  KEY `vid` (`vid`),
  KEY `cid` (`cid`),
  CONSTRAINT `order_request_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `product` (`pid`),
  CONSTRAINT `order_request_ibfk_2` FOREIGN KEY (`vid`) REFERENCES `vendor` (`vid`),
  CONSTRAINT `order_request_ibfk_3` FOREIGN KEY (`cid`) REFERENCES `catalog` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_request`
--

LOCK TABLES `order_request` WRITE;
/*!40000 ALTER TABLE `order_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pays`
--

DROP TABLE IF EXISTS `pays`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pays` (
  `pay_id` int(20) NOT NULL AUTO_INCREMENT,
  `pid` int(20) DEFAULT NULL,
  `vid` int(20) DEFAULT NULL,
  `wid` int(20) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `stauts` varchar(20) DEFAULT NULL,
  `total_amt` bigint DEFAULT NULL,
  `is_paid` bit(1) DEFAULT NULL,
  PRIMARY KEY (`pay_id`),
  KEY `pid` (`pid`),
  KEY `vid` (`vid`),
  KEY `wid` (`wid`),
  CONSTRAINT `pays_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `order_request` (`pid`),
  CONSTRAINT `pays_ibfk_2` FOREIGN KEY (`vid`) REFERENCES `order_request` (`vid`),
  CONSTRAINT `pays_ibfk_3` FOREIGN KEY (`wid`) REFERENCES `employee` (`wid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pays`
--

LOCK TABLES `pays` WRITE;
/*!40000 ALTER TABLE `pays` DISABLE KEYS */;
/*!40000 ALTER TABLE `pays` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `pid` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `size` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `raw_material`
--

DROP TABLE IF EXISTS `raw_material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `raw_material` (
  `rid` int(20) NOT NULL AUTO_INCREMENT,
  `type` varchar(20) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `size` varchar(20) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `avaliable` int DEFAULT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `raw_material`
--

LOCK TABLES `raw_material` WRITE;
/*!40000 ALTER TABLE `raw_material` DISABLE KEYS */;
/*!40000 ALTER TABLE `raw_material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sold`
--

DROP TABLE IF EXISTS `sold`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sold` (
  `sellid` int(20) PRIMARY KEY AUTO_INCREMENT,
  `pid` int(20) DEFAULT NULL,
  `vid` int(20) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `quantity` varchar(20) DEFAULT NULL,
  `damage` float DEFAULT NULL,
  KEY `pid` (`pid`),
  KEY `vid` (`vid`),
  CONSTRAINT `sold_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `order_request` (`pid`),
  CONSTRAINT `sold_ibfk_2` FOREIGN KEY (`vid`) REFERENCES `order_request` (`vid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sold`
--

LOCK TABLES `sold` WRITE;
/*!40000 ALTER TABLE `sold` DISABLE KEYS */;
/*!40000 ALTER TABLE `sold` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor`
--

DROP TABLE IF EXISTS `vendor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor` (
  `vid` int(20) NOT NULL AUTO_INCREMENT,
  `admin_id` int(20) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`vid`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `vendor_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor`
--

LOCK TABLES `vendor` WRITE;
/*!40000 ALTER TABLE `vendor` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-01 15:17:50
