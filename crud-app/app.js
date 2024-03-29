/**
 * Module dependencies.
 */

var express = require("express");
var routes = require("./routes");
var http = require("http");
var path = require("path");
var fs = require("fs");

//load customers route
var customers = require("./routes/customers");
var app = express();

var connection = require("express-myconnection");
var mysql = require("mysql");

// all environments
app.set("port", process.env.PORT || 4300);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, "public")));

// development only
if ("development" == app.get("env")) {
  app.use(express.errorHandler());
}

app.use(
  connection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "rootroot",
      port: 3306, //port mysql
      database: "nodejs"
    },
    "pool"
  ) //or single
);

app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Accept, X-Access-Token"
  );

  if (req.method == "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

app.get("/", routes.index);
app.get("/customers", customers.list);
app.get("/customers/add", customers.add);
app.post("/customers/add", customers.save);
app.get("/customers/delete/:id", customers.delete_customer);
app.get("/customers/edit/:id", customers.edit);
app.get("/getStaticJson", customers.getStaticJson);
app.get("/getDynamicJson", customers.getDynamicJson);
app.post("/customers/edit/:id", customers.save_edit);

app.use(app.router);

http.createServer(app).listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});
