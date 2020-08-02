/*
 * GET users listing.
 */
var fs = require("fs");

exports.list = function(req, res) {
  console.log("req.id => " + req.params.id);
  req.getConnection(function(err, connection) {
    var query = connection.query("SELECT * FROM customer", function(
      err,
      rows,
      fields
    ) {
      /*if (err) {
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
            }*/
      res.render("customers", {
        page_title: "Customers - Node.js",
        data: rows
      });
    });
    //console.log(query.sql);
  });
};

exports.getStaticJson = function(req, res) {
  fs.readFile(
    "/home/user/office/pocs/nodecrud-master/test.json",
    "utf8",
    function(err, data) {
      data = JSON.parse(data);
      console.log(data);
      res.end(JSON.stringify(data));
    }
  );
};

exports.getDynamicJson = function(req, res) {
  req.getConnection(function(err, connection) {
    var query = connection.query("SELECT * FROM customer", function(err, rows) {
      console.log("Query response => " + query);

      if (err) {
        console.log("Error Selecting : %s ", err);
      } else {
        var response = new Array();

        function Customers(id, name, address, email, phone) {
          (this.id = id),
            (this.name = name),
            (this.address = address),
            (this.email = email),
            (this.phone = phone);
        }

        for (var i = 0; i < rows.length; i++) {
          var row = new Customers(
            rows[i].id,
            rows[i].name,
            rows[i].address,
            rows[i].email,
            rows[i].phone
          );
          response.push(row);
        }
      }

      res.end(JSON.stringify(response));
    });
  });
};

exports.add = function(req, res) {
  res.render("add_customer", { page_title: "Add Customers - Node.js" });
};

exports.edit = function(req, res) {
  var id = req.params.id;

  req.getConnection(function(err, connection) {
    var query = connection.query(
      "SELECT * FROM customer WHERE id = ?",
      [id],
      function(err, rows) {
        if (err) console.log("Error Selecting : %s ", err);

        res.render("edit_customer", {
          page_title: "Edit Customers - Node.js",
          data: rows
        });
      }
    );

    //console.log(query.sql);
  });
};

/*Save the customer*/
exports.save = function(req, res) {
  var input = JSON.parse(JSON.stringify(req.body));

  req.getConnection(function(err, connection) {
    var data = {
      name: input.name,
      address: input.address,
      email: input.email,
      phone: input.phone
    };

    var query = connection.query("INSERT INTO customer set ? ", data, function(
      err,
      rows
    ) {
      if (err) console.log("Error inserting : %s ", err);

      res.redirect("/customers");
    });

    // console.log(query.sql); get raw query
  });
};

exports.save_edit = function(req, res) {
  var input = JSON.parse(JSON.stringify(req.body));
  var id = req.params.id;

  req.getConnection(function(err, connection) {
    var data = {
      name: input.name,
      address: input.address,
      email: input.email,
      phone: input.phone
    };

    connection.query(
      "UPDATE customer set ? WHERE id = ? ",
      [data, id],
      function(err, rows) {
        if (err) console.log("Error Updating : %s ", err);

        res.redirect("/customers");
      }
    );
  });
};

exports.delete_customer = function(req, res) {
  var id = req.params.id;

  req.getConnection(function(err, connection) {
    connection.query("DELETE FROM customer  WHERE id = ? ", [id], function(
      err,
      rows
    ) {
      if (err) console.log("Error deleting : %s ", err);

      res.redirect("/customers");
    });
  });
};
