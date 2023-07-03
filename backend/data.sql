-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: emmaus_database
-- ------------------------------------------------------
-- Server version	8.0.32
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;

/*!50503 SET NAMES utf8mb4 */
;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;

/*!40103 SET TIME_ZONE='+00:00' */
;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;

--
-- Dumping data for table `brand`
--
LOCK TABLES `brand` WRITE;

/*!40000 ALTER TABLE `brand` DISABLE KEYS */
;

INSERT INTO
    `brand`
VALUES
    (1, 'Apple', 54, NULL),
    (2, 'Samsung', 50, NULL),
    (3, 'Huawei', 46, NULL),
    (4, 'Xiaomi', 41, NULL);

/*!40000 ALTER TABLE `brand` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Dumping data for table `category`
--
LOCK TABLES `category` WRITE;

/*!40000 ALTER TABLE `category` DISABLE KEYS */
;

INSERT INTO
    `category`
VALUES
    (1, 'HC', 0, 89),
    (2, 'C', 90, 164),
    (3, 'B', 165, 254),
    (4, 'A', 255, 374),
    (5, 'Premium', 375, 10000);

/*!40000 ALTER TABLE `category` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Dumping data for table `config_min`
--
LOCK TABLES `config_min` WRITE;

/*!40000 ALTER TABLE `config_min` DISABLE KEYS */
;

/*!40000 ALTER TABLE `config_min` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Dumping data for table `model`
--
LOCK TABLES `model` WRITE;

/*!40000 ALTER TABLE `model` DISABLE KEYS */
;

INSERT INTO
    `model`
VALUES
    (1, 'iPhone 13', NULL, 1),
    (2, 'iPhone 12', NULL, 1),
    (3, 'iPhone 11', NULL, 1),
    (4, 'iPhone 10', NULL, 1),
    (5, 'iPhone 9', NULL, 1),
    (6, 'iPhone 8', NULL, 1),
    (7, 'iPhone 7', NULL, 1),
    (8, 'Galaxy S23', NULL, 2),
    (9, 'Galaxy A54', NULL, 2),
    (10, 'Galaxy S20', NULL, 2),
    (11, 'Galaxy A34', NULL, 2),
    (12, 'Galaxy S9', NULL, 2),
    (13, 'P40', NULL, 3),
    (14, 'P30', NULL, 3),
    (15, 'P20', NULL, 3),
    (16, 'Y6', NULL, 3),
    (17, 'Y5', NULL, 3),
    (18, 'Redmi A2', NULL, 4),
    (19, 'Redmi 12C', NULL, 4),
    (20, 'Redmi Note 10', NULL, 4);

/*!40000 ALTER TABLE `model` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Dumping data for table `ram`
--
LOCK TABLES `ram` WRITE;

/*!40000 ALTER TABLE `ram` DISABLE KEYS */
;

INSERT INTO
    `ram`
VALUES
    (1, '1', 30),
    (2, '2', 40),
    (3, '3', 54),
    (4, '4', 72),
    (5, '6', 92);

/*!40000 ALTER TABLE `ram` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Dumping data for table `state`
--
LOCK TABLES `state` WRITE;

/*!40000 ALTER TABLE `state` DISABLE KEYS */
;

INSERT INTO
    `state`
VALUES
    (5, 'BON', 5),
    (6, 'EXCELLENT', 10),
    (1, 'DEEE', -100),
    (2, 'BLOQUE', -50),
    (3, 'RECONDITIONNABLE', -10),
    (4, 'RECONDITIONNE', 0);

/*!40000 ALTER TABLE `state` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Dumping data for table `storage`
--
LOCK TABLES `storage` WRITE;

/*!40000 ALTER TABLE `storage` DISABLE KEYS */
;

INSERT INTO
    `storage`
VALUES
    (1, '16', 31),
    (2, '32', 45),
    (3, '64', 66),
    (4, '128', 94);

/*!40000 ALTER TABLE `storage` ENABLE KEYS */
;

UNLOCK TABLES;

--
-- Dumping data for table `user`
--
LOCK TABLES `user` WRITE;

/*!40000 ALTER TABLE `user` DISABLE KEYS */
;

INSERT INTO
    `user`
VALUES
    (
        1,
        'Pierre',
        'Abbé',
        'user',
        'labbepierre@example.fr',
        '$argon2id$v=19$m=65536,t=5,p=1$knEOAruWmohTbt0ien+LEQ$M2BdfRKRv5KSPBoa3sIG+oWx7zdgELqSpcUoXrrZkoA'
    ),
    (
        2,
        'John',
        'Doe',
        'admin',
        'johndoe@example.fr',
        '$argon2id$v=19$m=65536,t=5,p=1$mQ1/v3RSSsWsw5JYJIlx9Q$56+76a8rTp29XwBNKndcXP3/H+zF+pUHlFAgan0u6Pw'
    ),
    (
        3,
        'Emma',
        'Husse',
        'user',
        'emmahusse@example.fr',
        '$argon2id$v=19$m=65536,t=5,p=1$X4gwyrhOH99KdU9mjL4hkg$ZdZ3C00aPWKuhLpXijFTvbJcSZ7b+ZbNeFNKptL8e0s'
    ),
    (
        4,
        'Marco',
        'Necte',
        'user',
        'marconecte@example.fr',
        '$argon2id$v=19$m=65536,t=5,p=1$CDIEEQf3ErB6c048U5i00Q$cKwpGJePWwP8f81MALH/Cq2d6VS9JN4FUu7u6NnP+lY'
    );

/*!40000 ALTER TABLE `user` ENABLE KEYS */
;

UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;

-- Dump completed on 2023-06-28 22:15:29