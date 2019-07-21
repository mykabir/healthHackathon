-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: healthhack
-- ------------------------------------------------------
-- Server version	5.7.26-0ubuntu0.19.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `doctors`
--

DROP TABLE IF EXISTS `doctors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `doctors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mobile` varchar(20) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `hospital` varchar(50) DEFAULT NULL,
  `department` varchar(100) DEFAULT NULL,
  `location` varchar(300) DEFAULT NULL,
  `dv1` varchar(100) DEFAULT NULL,
  `dv2` varchar(100) DEFAULT NULL,
  `dv3` varchar(100) DEFAULT NULL,
  `dv4` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctors`
--

LOCK TABLES `doctors` WRITE;
/*!40000 ALTER TABLE `doctors` DISABLE KEYS */;
/*!40000 ALTER TABLE `doctors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patients`
--

DROP TABLE IF EXISTS `patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(50) DEFAULT NULL,
  `lname` varchar(50) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `gender` enum('male','female','na') DEFAULT NULL,
  `ssn` int(11) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `pv1` varchar(200) DEFAULT NULL,
  `pv2` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `records`
--

DROP TABLE IF EXISTS `records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `records` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `medname` varchar(200) NOT NULL,
  `meddose` varchar(20) DEFAULT NULL,
  `rdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `cat` varchar(200) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `rv1` varchar(200) DEFAULT NULL,
  `rv2` varchar(200) DEFAULT NULL,
  `rv3` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_pid` (`pid`),
  CONSTRAINT `records_ibfk_1` FOREIGN KEY (`pid`) REFERENCES `patients` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `records`
--

LOCK TABLES `records` WRITE;
/*!40000 ALTER TABLE `records` DISABLE KEYS */;
INSERT INTO `records` VALUES (1,'AMOXICILLIN 500MG,AMOXICILLIN 500MG',NULL,'2019-07-21 05:34:18',NULL,NULL,NULL,NULL,NULL),(2,'PERCOCET TAB 10-325MG',NULL,'2019-07-21 05:38:53',NULL,NULL,NULL,NULL,NULL),(3,'',NULL,'2019-07-21 05:40:09',NULL,NULL,NULL,NULL,NULL),(4,'IBUPROFEN 800M',NULL,'2019-07-21 05:42:18',NULL,NULL,NULL,NULL,NULL),(5,'IBUPROFEN 800M',NULL,'2019-07-21 05:47:08',NULL,NULL,NULL,NULL,NULL),(6,'PERCOCET TAB 10-325MG',NULL,'2019-07-21 05:52:25',NULL,NULL,NULL,NULL,NULL),(7,'ALPRAZOLAM 0.5MG,MFG ACTAVIS - SUBSTITUTED FOR XANAX 0.5MG',NULL,'2019-07-21 06:06:28',NULL,NULL,NULL,NULL,NULL),(8,'',NULL,'2019-07-21 06:17:13',NULL,NULL,'xc9pd@mst.edu',NULL,NULL),(9,'IBUPROFEN 800M',NULL,'2019-07-21 06:18:05',NULL,NULL,'xc9pd@mst.edu',NULL,NULL),(10,'IBUPROFEN 800M',NULL,'2019-07-21 06:25:47',NULL,NULL,'xc9pd@mst.edu',NULL,NULL),(11,'IBUPROFEN 800M',NULL,'2019-07-21 06:29:13',NULL,NULL,'xc9pd@mst.edu',NULL,NULL),(12,'AMOXICILLIN 500MG,AMOXICILLIN 500MG',NULL,'2019-07-21 06:33:29',NULL,NULL,'xc9pd@mst.edu',NULL,NULL),(13,'IBUPROFEN 800M',NULL,'2019-07-21 06:43:48',NULL,NULL,'xc9pd@mst.edu',NULL,NULL),(14,'IBUPROFEN 800M',NULL,'2019-07-21 06:44:30',NULL,NULL,'xc9pd@mst.edu',NULL,NULL),(15,'IBUPROFEN 800M',NULL,'2019-07-21 06:45:28',NULL,NULL,'xc9pd@mst.edu',NULL,NULL),(16,'AMOXICILLIN 500MG,AMOXICILLIN 500MG',NULL,'2019-07-21 08:18:50',NULL,NULL,'xc9pd@mst.edu',NULL,NULL),(17,'ALPRAZOLAM 0.5MG,MFG ACTAVIS - SUBSTITUTED FOR XANAX 0.5MG',NULL,'2019-07-21 08:21:17',NULL,NULL,'xc9pd@mst.edu',NULL,NULL);
/*!40000 ALTER TABLE `records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `pid` int(11) DEFAULT NULL,
  `did` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'dfd@fdf','dfdf',NULL,NULL,'2019-07-20 09:35:26'),(2,'dfdf@fdfggg','dfdfdfdf',NULL,NULL,'2019-07-20 10:35:30'),(3,'xc9pd@mst.edu','Hpp0711!',NULL,NULL,'2019-07-20 10:45:42'),(4,'dfdhj@s','ewrewr',NULL,NULL,'2019-07-20 11:13:07'),(5,'shid@mst.edu','dkaalfdkafj',NULL,NULL,'2019-07-20 11:41:23'),(6,'dfd@fdfdggh','wrffdg',NULL,NULL,'2019-07-20 11:44:52'),(7,'ke@ljnnnnnnnnnnnnnnnnnnnnnnnn','nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',NULL,NULL,'2019-07-20 11:46:12'),(8,'jt@k','hk',NULL,NULL,'2019-07-20 11:46:37'),(9,'ou@jlk','lk',NULL,NULL,'2019-07-20 11:48:25'),(14,'ttyy@yytt','yytt',NULL,NULL,'2019-07-20 13:14:55'),(15,'aaa@aaa','555',NULL,NULL,'2019-07-20 14:20:35'),(16,'shkkkk@kkk','gggg',NULL,NULL,'2019-07-20 14:46:14');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-21  4:14:01
