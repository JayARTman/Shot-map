require('dotenv').config();

const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PW
});

con.connect(err => {
    if(err) throw err;
    console.log('connected!');
})
