CREATE DATABASE coffee_shop;
USE coffee_shop;

CREATE TABLE users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100),
    password VARCHAR(100)
);

INSERT INTO users(email,password)
VALUES ('test@gmail.com','12345');
