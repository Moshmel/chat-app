var mysql = require('mysql')
console.log('creating new instance');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: "sql2.freemysqlhosting.net",
    user: "sql2325854",
    password: "zD9*yC4%",
    database: "sql2325854"
})
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()
    return
})
module.exports = pool