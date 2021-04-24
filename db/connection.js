const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        //mysql username
        user: 'root',
        //mysql password
        password: '$nowBear95',
        database: 'employee_manager'
    },
    console.log('connected to the employee_manager database.')
);

module.exports = db;