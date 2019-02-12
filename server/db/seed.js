
const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');
const mysql = require('mysql');
const connection = require("./index.js");

function seeding(meal) {
    for (let i = 0; i < 100; i++) {
        let name = faker.name.firstName();
        let description = faker.lorem.sentence();
        let price = Math.random() * (25 - 9) + 9;
        let params = [name, description, price];
        let queryStr = 'insert into ' + meal + '(name, description,price) \
        values (?,?,?)';

        connection.connection.query(queryStr, params, function (err, result) {
            if (err) {
                console.log("error message: ", err);
                return;
            }
            console.log('done: ', result);
        });
    }
}

// Create 3 tables and insert dummy data.
seeding("lunch");
seeding("dinner");
seeding("dessert");




