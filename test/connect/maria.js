const maria = require('mysql')

const conn = maria.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'1q2w3e4r',
    database:'sample_notice'
})

module.exports = conn;