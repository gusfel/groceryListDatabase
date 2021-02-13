/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/


DROP DATABASE IF EXISTS groceries;
-- DROP TABLE IF EXISTS `Users`;
-- const mysql =require('mysql');

CREATE DATABASE groceries;

USE groceries;

CREATE TABLE groceries (
  id INTEGER  AUTO_INCREMENT,
  name VARCHAR(255),
  quantity INTEGER NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO groceries (name, quantity) VALUES ('Milk', 1);
INSERT INTO groceries (name, quantity) VALUES ('Pizza', 1);
INSERT INTO groceries (name, quantity) VALUES ('Mangoes', 6);
INSERT INTO groceries (name, quantity) VALUES ('Coffee', 1);
INSERT INTO groceries (name, quantity) VALUES ('Ice Cream', 2);


-- const groceries = [
--   {item: 'Milk', quantity: 1},
--   {item: 'Pizza', quantity: 1},
--   {item: 'Mangoes', quantity: 6},
--   {item: 'Coffee', quantity: 1},
--   {item: 'Ice Cream', quantity: 2}
-- ];