DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
id INT AUTO_INCREMENT, 
departName VARCHAR(20),
departId VARCHAR(20),
PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT AUTO_INCREMENT,
  jobTitle VARCHAR(20),
  roleId VARCHAR(20),
  departRole VARCHAR(20),
  salaryRole VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(20),
  lastName VARCHAR(20),
  jobTitle (20),
  department VARCHAR(20),
  salary VARCHAR(20),
  manager VARCHAR(20),
  PRIMARY KEY (id)
);