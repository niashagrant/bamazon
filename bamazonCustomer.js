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

function start() {
  //prints the items for sale and their details
  connection.query("SELECT * FROM Products", function (err, res) {
    if (err) throw err;

    console.log("Welcome to Bamazon!");
    console.log("Discover different products below:");

    var table = new Table({
      //You can name these table heads chicken if you'd like. They are simply the headers for a table we're putting our data in
      head: ["ID", "Products", "Department", "Price", "Quantity"],
      //These are just the width of the columns. Only mess with these if you want to change the cosmetics of our response
      colWidths: [10, 40, 25, 10, 10],
    });

    // table is an Array, so you can `push`, `unshift`, `splice`
    for (var i = 0; i < res.length; i++) {
      table.push([
        res[i].item_id,
        res[i].product_name,
        res[i].department_name,
        res[i].price,
        res[i].stock_quantity,
      ]);
    }
    console.log(table.toString());
  });
}

start();
