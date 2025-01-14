import mysql from 'mysql2/promise';

const con = mysql.createPool({
    user: "root",
    host: "localhost",
    password: "1234",
    database: "videos",
});

export default con;