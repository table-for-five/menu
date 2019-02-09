
const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    database: 'testMenu',
    user: 'root',
    password: '',
});

connection.connect();

function seeding(meal) {
    for (let i = 0; i < 100; i++) {
        let name = faker.name.firstName();
        let description = faker.lorem.sentence();
        let price = Math.random() * (25 - 9) + 9;

        let params = [name, description, price];

        let queryStr = 'insert into ' + meal + '(name, description,price) \
        values (?,?,?)';

        connection.query(queryStr, params, function (err, result) {
            if (err) {
                console.log("error message: ", err);
                return;
            }
            console.log('done: ', result);
        });
    }
}
seeding("lunch");
seeding("dinner");
seeding("dessert");




