const mysql = require('mysql');

let connection = mysql.createConnection({
    host: '127.0.0.1',
    database: 'menu',
    user: 'root',
    password: '',
});

connection.connect();

// connection.end();

exports.connection = connection; 