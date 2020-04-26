var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tactics11!",
  port: 3306,
  database: "bamazon_db",
});

connection.connect();

function display() {
  connection.query("SELECT * FROM bamazon_db.products", function (err, res) {
    if (err) throw err;
    console.log("Welcome to Bamazon!");
    console.log("Discover different products below:");
  });
}
