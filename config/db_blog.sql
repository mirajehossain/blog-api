/*
SQLyog Ultimate v12.11 (64 bit)
MySQL - 10.1.33-MariaDB : Database - db_blog
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_blog` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `db_blog`;

/*Table structure for table `about` */

DROP TABLE IF EXISTS `about`;

CREATE TABLE `about` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `quotes` text NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `about` */

insert  into `about`(`id`,`title`,`quotes`,`description`) values (1,'Alamin Hossain Miraje','Learner | Programmer | Dreamer','I\'m Md. Alamin(Miraje), from Mirpur, Dhaka.\n\nStuding Bsc in Computer Science and Engineering at Bangladesh University of Business and Technology(BUBT). \nI was completed Diploma in Computer Department at Dhaka Polytechnic Institute. \nI Love to keep touch with cutting edge technology and hungry to learn new thing by passion, Try to become a Polyglot Programmer');

/*Table structure for table `category` */

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `category` */

insert  into `category`(`id`,`title`) values (1,'C/C++'),(2,'Javascript');

/*Table structure for table `post` */

DROP TABLE IF EXISTS `post`;

CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `category_id` int(11) NOT NULL,
  `author` text NOT NULL,
  `date` text NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

/*Data for the table `post` */

insert  into `post`(`id`,`title`,`category_id`,`author`,`date`,`description`) values (24,'JavaScript Array method(map(),filter(),reduce())',2,'Md. Alamin','9/10/2018','<p><img src=\"http://localhost:3000\\static\\map-filter-reduce.png\" style=\"width: 702px;\" class=\"fr-fic fr-dib\" data-success=\"true\" data-message=\"image uploaded\"></p><p name=\"eba0\">আজকে আলোচনা করব জাভাস্ক্রিপ্ট এর ৩ টি&nbsp;<code>Array</code>মেথড নিয়ে&nbsp;<code>map(),filter(),reduce()</code>নিয়ে।</p><p name=\"924f\">জাভাস্ক্রিপ্ট এর <code>Array</code>ইউজ করার সময়<strong>&nbsp;</strong>এই ৩ টি মেথড প্রায়ই ব্যবহার করতে হয়, এই মেথডগুলো অনেকটা একই রকম ভাবে কাজ করে, আলোচনা করব এই মেথড গুলো কিভাবে কাজ করে। ওকে তাহলে শুরুকরা যাক-</p><h3 name=\"7541\"><strong>Map</strong>()<strong>:</strong></h3><p name=\"8f5f\">যখনই আমরা কোন <code>Array</code> তে <code>map()</code>এপ্লাই করি তখন এই মেথড তার আর্গুমেন্ট হিসেবে একটা <code>user define function</code>নেয়, সেই <code>function</code>ঐ <code>Array</code> র প্রতিটা <code>element</code> এ এপ্লাই হয় এবং তার উপর ভিত্তি করে ফাইনালি নতুন একটা <code>Array</code>রিটার্ন করে।</p><p name=\"0964\"><strong>Syntax:</strong></p><pre name=\"1ee9\">let oldArray = [1,2,3,4,5];\nlet <strong>newArray</strong> = <strong>oldArray</strong>.map((<strong>currentValue</strong>, <strong>index</strong>, <strong>arr</strong>) =&gt; {\n      //return item for new Array\n});</pre><p><br></p><p><code>.map()</code>তার আর্গুমেন্ট হিসেবে একটা কলব্যাক ফাংশন নিচ্ছে, তার ৩ টা প্যারামিটার আছে প্রথমটা হল <code>currentValue</code><strong>&nbsp;</strong>যেটা অ্যারের ঐ ইলিমেন্ট, যেটার উপর ফাংশন টা এপ্লাই হয়েছে, প্রতিটা ইলিমেন্ট এ ই ফাংশন টা কল হয়, সেকেন্ড প্যারামিটার হলো <code>index&nbsp;</code><strong>অ্যারের ইনডেক্স&nbsp;</strong>আর তৃতীয়টা হলো মূল অ্যারে।</p><p>&lt;script src=&quot;https://gist.github.com/mirajehossain/b30bf591622b528d6bc6061f1bf45757.js&quot;&gt;&lt;/script&gt;</p><p><br></p>');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
