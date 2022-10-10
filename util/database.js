const mysql = require("mysql2")

const pool = mysql.createPool({
    host: "localhost",
    database: "node_complete",
    user: "root",
    password: "Badmantons10"
})

module.exports = pool.promise()