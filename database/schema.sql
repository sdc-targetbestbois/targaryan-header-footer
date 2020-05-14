DROP DATABASE IF EXISTS searchbar;

CREATE DATABASE searchbar;

USE searchbar;

CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  item VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

/* For the record, these numbers were generated with Math.random,
 * please don't read into them. :) */

INSERT INTO items (id, item, category) VALUES (1, 'Sigil Tapestry Pillow', 'Home Goods');
INSERT INTO items (id, item, category) VALUES (2, 'Dragonstone Stein', 'Kitchen & Dining');
INSERT INTO items (id, item, category) VALUES (3, 'Dragon Egg Box', 'Home Goods');
INSERT INTO items (id, item, category) VALUES (4, 'Night King Mask', 'Apparel');
INSERT INTO items (id, item, category) VALUES (5, 'Fire and Blood Sock Set', 'Apparel');
