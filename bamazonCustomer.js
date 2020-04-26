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
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;

    console.log("Welcome to Bamazon!");
    console.log("Discover different products below:");

    var table = new Table({
      head: ["ID", "Products", "Department", "Price", "Quantity"],

      colWidths: [10, 40, 25, 10, 10],
    });

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
    shop();
  });
}

function shop() {
  inquirer
    .prompt([
      {
        name: "itemId",
        type: "input",
        message:
          "Please enter the Product Id of the item you would like to buy!",
      },
      {
        name: "quantity",
        type: "input",
        message: "How many items would you like to buy?",
      },
    ])
    .then(function (choice) {
      connection.query(
        "SELECT * FROM products WHERE item_id=?",
        choice.itemId,
        function (err, res) {
          for (var i = 0; i < res.length; i++) {
            if (choice.quantity > res[i].stock_quantity) {
              console.log(
                "Sorry! Not enough in stock. Please try again later."
              );
              shop();
            } else {
              console.log("You've selected:");
              console.log("----------------");
              console.log("Item: " + res[i].product_name);
              console.log("Department: " + res[i].department_name);
              console.log("Price: $" + res[i].price);
              console.log("Quantity: " + choice.quantity);
              console.log("----------------");
              console.log("Total: $" + res[i].price * choice.quantity);
            }
          }
        }
      );
    });
}

start();
