const connection = require("./db");
const express = require('express');
const cors = require('cors');
const path = require('path');

let server = express();

server.use(cors());
server.use(express.static(express.static(__dirname,'../client/dist')));

server.get("/menu", function (req, res) {

  let meal = req.query.q === undefined ? 'lunch' : req.query.q;
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

module.exports = server;