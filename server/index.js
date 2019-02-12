const connection = require("./db");
const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('../client/dist'));

app.get("/menu", function (req, res) {
  let meal = req.query.q;
  console.log('MEAL: ', meal);
  let queryStr = "select * from " + meal;
  connection.connection.query(queryStr, function (err, result) {
    if (err) {
      console.log("error message: ", err);
      return;
    }
    res.send(result);
  });

});

let port = 3030;
app.listen(port, function () {
  console.log('listening on port', port);
});
