const mysql = require('mysql');


const connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'db_blog'
});

connection.connect(function (error) {
    if(error)
        throw error;
    console.log("mysql is connected.")
});

module.exports = {
    connection
};