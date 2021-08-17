CREATE DATABASE  IF NOT EXISTS `marketnow` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `marketnow`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: marketnow
-- ------------------------------------------------------
-- Server version	5.1.45-community

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
-- Table structure for table `articulocliente`
--

DROP TABLE IF EXISTS `articulocliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articulocliente` (
  `idArticulo` int(6) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `cdb` int(14) DEFAULT NULL,
  `categoria` varchar(100) DEFAULT NULL,
  `iva` int(4) DEFAULT NULL,
  `PdeGanacia` int(4) DEFAULT NULL,
  `precioUnitario` float DEFAULT NULL,
  `precioVenta` float DEFAULT NULL,
  `cantidad` int(6) DEFAULT NULL,
  `cantMinima` int(6) DEFAULT NULL,
  `cantIdeal` int(6) DEFAULT NULL,
  PRIMARY KEY (`idArticulo`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articulocliente`
--

LOCK TABLES `articulocliente` WRITE;
/*!40000 ALTER TABLE `articulocliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `articulocliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `articuloproveedor`
--

DROP TABLE IF EXISTS `articuloproveedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articuloproveedor` (
  `idArtProv` int(6) NOT NULL AUTO_INCREMENT,
  `calificacion` int(6) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `cantidad` int(6) DEFAULT NULL,
  `cdb` int(14) DEFAULT NULL,
  `idProveedor` int(6) DEFAULT NULL,
  PRIMARY KEY (`idArtProv`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articuloproveedor`
--

LOCK TABLES `articuloproveedor` WRITE;
/*!40000 ALTER TABLE `articuloproveedor` DISABLE KEYS */;
/*!40000 ALTER TABLE `articuloproveedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `balancemesual`
--

DROP TABLE IF EXISTS `balancemesual`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `balancemesual` (
  `idBalance` int(6) NOT NULL AUTO_INCREMENT,
  `deudas` float DEFAULT NULL,
  `haber` float DEFAULT NULL,
  `ingresos` float DEFAULT NULL,
  `egresos` float DEFAULT NULL,
  `cantidadVentas` int(12) DEFAULT NULL,
  `ganancia` float DEFAULT NULL,
  `cantidadCompras` int(12) DEFAULT NULL,
  `egresoCompras` float DEFAULT NULL,
  `impuestos` float DEFAULT NULL,
  `salario` float DEFAULT NULL,
  `servicios` float DEFAULT NULL,
  `alquiler` float DEFAULT NULL,
  `otros` float DEFAULT NULL,
  `totalsinCompras` float DEFAULT NULL,
  `perdidas` float DEFAULT NULL,
  `topCmas` varchar(300) DEFAULT NULL,
  `topCmenos` varchar(300) DEFAULT NULL,
  `ventasPorCategoria` varchar(300) DEFAULT NULL,
  `idComercio` int(6) DEFAULT NULL,
  PRIMARY KEY (`idBalance`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `balancemesual`
--

LOCK TABLES `balancemesual` WRITE;
/*!40000 ALTER TABLE `balancemesual` DISABLE KEYS */;
/*!40000 ALTER TABLE `balancemesual` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cajero`
--

DROP TABLE IF EXISTS `cajero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cajero` (
  `idCajero` int(6) NOT NULL AUTO_INCREMENT,
  `idComercio` int(6) DEFAULT NULL,
  `idUsuario` int(6) DEFAULT NULL,
  PRIMARY KEY (`idCajero`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cajero`
--

LOCK TABLES `cajero` WRITE;
/*!40000 ALTER TABLE `cajero` DISABLE KEYS */;
/*!40000 ALTER TABLE `cajero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria` (
  `idCategoria` int(6) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `ventas` int(6) DEFAULT NULL,
  `idCliente` int(6) DEFAULT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `idCliente` int(6) NOT NULL AUTO_INCREMENT,
  `idUsuario` int(6) DEFAULT NULL,
  PRIMARY KEY (`idCliente`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comercio`
--

DROP TABLE IF EXISTS `comercio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comercio` (
  `idComercio` int(6) NOT NULL AUTO_INCREMENT,
  `dni` int(12) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `logo` varchar(100) DEFAULT NULL,
  `estado` varchar(100) DEFAULT NULL,
  `telefono` int(12) DEFAULT NULL,
  `nombreLocal` varchar(100) DEFAULT NULL,
  `idUsuario` int(6) DEFAULT NULL,
  PRIMARY KEY (`idComercio`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comercio`
--

LOCK TABLES `comercio` WRITE;
/*!40000 ALTER TABLE `comercio` DISABLE KEYS */;
/*!40000 ALTER TABLE `comercio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cupon`
--

DROP TABLE IF EXISTS `cupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cupon` (
  `idCupon` int(6) NOT NULL AUTO_INCREMENT,
  `tipo` int(6) DEFAULT NULL,
  `descuento` int(6) DEFAULT NULL,
  `expirar` date DEFAULT NULL,
  `categoría` varchar(100) DEFAULT NULL,
  `idComercio` int(6) DEFAULT NULL,
  PRIMARY KEY (`idCupon`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cupon`
--

LOCK TABLES `cupon` WRITE;
/*!40000 ALTER TABLE `cupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `cupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuponcliente`
--

DROP TABLE IF EXISTS `cuponcliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cuponcliente` (
  `idCuponCliente` int(6) NOT NULL AUTO_INCREMENT,
  `idCupon` int(6) DEFAULT NULL,
  `idCliente` int(6) DEFAULT NULL,
  PRIMARY KEY (`idCuponCliente`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuponcliente`
--

LOCK TABLES `cuponcliente` WRITE;
/*!40000 ALTER TABLE `cuponcliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `cuponcliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `egresovario`
--

DROP TABLE IF EXISTS `egresovario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `egresovario` (
  `idEgreso` int(6) NOT NULL AUTO_INCREMENT,
  `tipo` int(3) DEFAULT NULL,
  `cantidad` int(6) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `idBalance` int(6) DEFAULT NULL,
  PRIMARY KEY (`idEgreso`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `egresovario`
--

LOCK TABLES `egresovario` WRITE;
/*!40000 ALTER TABLE `egresovario` DISABLE KEYS */;
/*!40000 ALTER TABLE `egresovario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `infodepago`
--

DROP TABLE IF EXISTS `infodepago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `infodepago` (
  `idPago` int(6) NOT NULL AUTO_INCREMENT,
  `metodo` varchar(100) DEFAULT NULL,
  `cuil` varchar(14) DEFAULT NULL,
  `cvu` int(25) DEFAULT NULL,
  `alias` varchar(100) DEFAULT NULL,
  `idUsuario` int(6) DEFAULT NULL,
  PRIMARY KEY (`idPago`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `infodepago`
--

LOCK TABLES `infodepago` WRITE;
/*!40000 ALTER TABLE `infodepago` DISABLE KEYS */;
/*!40000 ALTER TABLE `infodepago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pedido` (
  `idPedido` int(6) NOT NULL AUTO_INCREMENT,
  `monto` int(10) DEFAULT NULL,
  `estado` varchar(20) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `tipo` int(2) DEFAULT NULL,
  `comprobante` varchar(100) DEFAULT NULL,
  `idUsuario` int(6) DEFAULT NULL,
  `idComercio` int(6) DEFAULT NULL,
  PRIMARY KEY (`idPedido`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proveedor`
--

DROP TABLE IF EXISTS `proveedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proveedor` (
  `idProveedor` int(6) NOT NULL AUTO_INCREMENT,
  `dni` int(12) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `logo` varchar(100) DEFAULT NULL,
  `telefono` int(12) DEFAULT NULL,
  `nombreLocal` varchar(100) DEFAULT NULL,
  `idUsuario` int(6) DEFAULT NULL,
  PRIMARY KEY (`idProveedor`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proveedor`
--

LOCK TABLES `proveedor` WRITE;
/*!40000 ALTER TABLE `proveedor` DISABLE KEYS */;
/*!40000 ALTER TABLE `proveedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `puntosporcomercio`
--

DROP TABLE IF EXISTS `puntosporcomercio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `puntosporcomercio` (
  `idPuntos` int(6) NOT NULL AUTO_INCREMENT,
  `cantidad` int(6) DEFAULT NULL,
  `idComercio` int(6) DEFAULT NULL,
  `idCliente` int(6) DEFAULT NULL,
  PRIMARY KEY (`idPuntos`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puntosporcomercio`
--

LOCK TABLES `puntosporcomercio` WRITE;
/*!40000 ALTER TABLE `puntosporcomercio` DISABLE KEYS */;
/*!40000 ALTER TABLE `puntosporcomercio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registrocompra`
--

DROP TABLE IF EXISTS `registrocompra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `registrocompra` (
  `idCompra` int(6) NOT NULL AUTO_INCREMENT,
  `cantidad` int(6) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `cdb` int(14) DEFAULT NULL,
  `idProducto` int(6) DEFAULT NULL,
  `idPedido` int(6) DEFAULT NULL,
  PRIMARY KEY (`idCompra`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registrocompra`
--

LOCK TABLES `registrocompra` WRITE;
/*!40000 ALTER TABLE `registrocompra` DISABLE KEYS */;
/*!40000 ALTER TABLE `registrocompra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `idUsuario` int(6) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `apelllido` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `clave` varchar(100) DEFAULT NULL,
  `fechaReg` date DEFAULT NULL,
  `rol` int(4) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-17 13:30:13
