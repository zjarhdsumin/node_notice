const maria = require('mysql')

require('dotenv').config({path : '.env'});

const conn = maria.createPool({
    host : process.env.host,
    port : process.env.DB_port,
    user : process.env.DB_user,
    password : process.env.DB_password,
    database : process.env.DB_database,
    dataString : true
})

handleDisconnect(conn)  //DB 재연결

function handleDisconnect(client){
    client.on('error', function(error){
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err; 
        }
    })
}

module.exports = conn;