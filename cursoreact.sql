-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 29-11-2023 a las 21:58:29
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cursoreact`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horarios`
--

DROP TABLE IF EXISTS `horarios`;
CREATE TABLE IF NOT EXISTS `horarios` (
  `horario` time NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `horarios`
--

INSERT INTO `horarios` (`horario`) VALUES
('09:00:00'),
('10:00:00'),
('11:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

DROP TABLE IF EXISTS `mensajes`;
CREATE TABLE IF NOT EXISTS `mensajes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `comentarios` text NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `mensajes`
--

INSERT INTO `mensajes` (`id`, `nombre`, `apellido`, `email`, `telefono`, `comentarios`, `fecha`) VALUES
(6, 'VICTOR ', 'C', 'victor@v.com', '123456789', 'mensaje del 28/11 19:37hs', '2023-11-28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(70) NOT NULL,
  `subtitulo` varchar(100) NOT NULL,
  `desc_corta` text NOT NULL,
  `desc_larga` text NOT NULL,
  `img_id` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `activo` varchar(2) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `desc_corta`, `desc_larga`, `img_id`, `activo`) VALUES
(10, 'Nueva sucursal San Isidro', 'Abrimos una nueva sucursal', 'Conoce los detalles de nuestra nueva sucursal', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'futbsprqx33y9zpftn10', 'SI'),
(11, 'Mas servicios para nuestros asociados', 'Sumamos nuevas especialidades para mejorar nuestros servicios', 'Conoce las nuevas especialidades agregadas a la cartilla.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.', 'vz77fwmgntjohnozkccb', 'SI'),
(12, 'En edicion', 'En edicion', 'No mostrar en la web', 'Prueba para no mostrar en la web una novedad en edición', '', 'NO'),
(13, 'Estrenamos nuestro sitio', 'Te presentamos nuestro nuevo sitio web', 'Ahora vas a poder enterarte de todas nuestras novedades.', 'Ahora vas a poder enterarte de todas nuestras novedades desde la comodidad de tu casa y seguiremos incorporando mas funcionalidades muy pronto!', 'yendvhese4wbkgtvzezk', 'SI');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

DROP TABLE IF EXISTS `turnos`;
CREATE TABLE IF NOT EXISTS `turnos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `dni` int NOT NULL,
  `email` char(70) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT 'Mail del solicitante',
  `dia` date NOT NULL,
  `hora` time NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `turnos`
--

INSERT INTO `turnos` (`id`, `nombre`, `dni`, `email`, `dia`, `hora`) VALUES
(10, 'roman riquelme', 1111, 'roman@riquelme.com', '2023-11-29', '10:00:00'),
(12, 'martin palermo', 333, 'martin@palermo.com', '2023-11-06', '10:00:00'),
(9, 'messi', 456, 'lionel@messi.com', '2023-11-20', '11:00:00'),
(21, 'victor', 444, 'p@p.com', '2023-12-01', '09:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` char(70) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT 'Email',
  `img_id` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`, `email`, `img_id`) VALUES
(20, 'Martin Palermo', '202cb962ac59075b964b07152d234b70', 'martin@palermo.com', 'thxo9fll06zipe3vfdrg'),
(11, 'Victor', '202cb962ac59075b964b07152d234b70', 'victor@victor.com', 'akvukypkmpkakeznmsdu'),
(21, 'Diego Armando Maradona', '202cb962ac59075b964b07152d234b70', 'diego@maradona.com', 'slalbb39blh3g6dhgbod');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
