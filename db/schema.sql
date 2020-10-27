DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE departments (
  id INT AUTO_INCREMENT, 
  departName VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT AUTO_INCREMENT,
  jobTitle VARCHAR(20),
  departRole VARCHAR(20),
  salaryRole INT,
  PRIMARY KEY (id)
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(20),
  lastName VARCHAR(20),
  jobTitle VARCHAR (20),
  manager VARCHAR(20),
  PRIMARY KEY (id)
);