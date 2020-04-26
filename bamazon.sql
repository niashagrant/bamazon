create database bamazon_db;

use bamazon_db;

create table products(
item_id int auto_increment not null,
product_name varchar(100) null,
department_name varchar(100) null,
price decimal(10,2) null,
stock_quantity int null,
primary key(item_id)
);


insert into products (product_name, department_name, price, stock_quantity)
values ("Borderlands 3", "Video Games", 59.99, 30),
("Grow Succulent Kit", "Garden & Outdoor", 39.99, 12),
("New Apple iPad Pro(12.9 inch)", "Electronics", 459.00, 45),
("Kichen Aid", "Kitchen & Homegoods", 225.00, 7),
("Shun Classic 6.5 inch Nakiri Knife", "Kitchen & Homegoods", 115.95, 10),
("Scarpa Vapor V Climbing Shoe", "Outdoor Recreation", 130.99, 7),
("Black Diamond Mondo Crash Pad", "Outdoor Recreation", 399.95, 2),
("Liquid Lash Extension Mascara", "Beauty", 24.99, 30),
("Lip Kit", "Beauty",24.99, 15),
("Liquid Chalk", "Outdoor Recreation", 29.99, 12)