const mysql = require("mysql");

module.exports = function getConnection(){
    return mysql.createPool({
        connectionLimit: 10,
        host: process.env.URL || "localhost",
        user: process.env.USERNAME || "user", 
        password: process.env.PASSWORD || "password", 
        database: process.env.DATABASE || "leaderboard"
    });
}