const mysql = require('mysql');

// setup mysql
const mysqlDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todoapp',
});

mysqlDB.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
});

module.exports = mysqlDB;
