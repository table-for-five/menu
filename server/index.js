const connection = require("./db");
const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/menu', (req, res) => {


    for (let i = 0; i < 100; i++) {
        let name = food[i];
        let description = faker.lorem.sentence();
        let price = Math.random() * (25 - 9) + 9;

        let params = [name, description, price];

        let queryStr = 'insert into dinner(name, description,price) \
        values (?,?,?)';

        con.connection.query(queryStr, params, function (err, result) {
            if (err) {
                console.log("error message: ", err);
                return;
            }
            console.log('done: ', result);
        });

    }
});

app.get("/getMenu", function (req, res) {

    let queryStr = "select * from lunch";
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

