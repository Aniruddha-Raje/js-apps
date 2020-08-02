var mysql = require('mysql');
var express = require('express');
var url = require('url');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");

//compression
var compression = require('compression');
app.use(compression())

var isConnected = false;

app.use(bodyParser.text({ type: '*/*' }));

app.use(bodyParser.json());
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

var options = {
    inflate: true,
    limit: '1mb',
    type: '*/*'
};
app.use(bodyParser.raw(options));


app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", 'Content-Type, Accept, X-Access-Token');

    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodejs",
    port: 3306
});

con.connect(function (err) {
    if (err) throw err

});

app.get('/get/:id/:name', function (req, res) {

    var start = Date.now();
    console.log("\n\nFull Request ===> " + req);
    console.log("\n\nRequest's Query ===> \n" + req.query.id + "\n" + req.query.name);
    console.log("\n\nRequest's Parameters ===> \n" + req.params.id + "\n" + req.params.name);

    var query = con.query('SELECT * FROM customer', function (err, rows, fields) {
        if (err) {
            console.log("Error Selecting : %s ", err);
        }
        else {
            var resp = [];
            function Person(id, name) {
                this.id = id;
                this.name = name;
            }

            for (var i = 0; i < rows.length; i++) {
                var id = rows[i].id;
                var name = rows[i].name;
                resp.push(new Person(id, name));
            }
            var end = Date.now();
            res.send(JSON.stringify({ "status": 200, "error": null, "response": resp, "requestTime": end - start }));
        }
        //res.render('customers',{page_title:"Customers - Node.js",data:rows});
    });

});

app.post('/post', function (req, res) {

    console.log("\n\nRequestBody => \n" + req.body.id + "\n" + req.body.name);

    var query = con.query('SELECT * FROM customer', function (err, rows, fields) {
        if (err) {
            console.log("Error Selecting : %s ", err);
        }
        else {
            var resp = [];
            function Person(id, name) {
                this.id = id;
                this.name = name;
            }

            for (var i = 0; i < rows.length; i++) {
                var id = rows[i].id;
                var name = rows[i].name;
                resp.push(new Person(id, name));
            }
            res.send(JSON.stringify({ "status": 200, "error": null, "response": resp }));
        }
        //res.render('customers',{page_title:"Customers - Node.js",data:rows});
    });

});

var server = app.listen(8085, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});
