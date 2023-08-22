import mysql from "mysql"

export const db = mysql.createPool({
    connectionLimit : 100, //important
    host:"localhost",
    user:"root",
    password: "root369",
    database:"blogpost",
    debug    :  false
})

db.on('connection', function (connection) {
    console.log('DB Connection established');
  
    connection.on('error', function (err) {
      console.error(new Date(), 'MySQL error', err.code);
    });
    connection.on('close', function (err) {
      console.error(new Date(), 'MySQL close', err);
    });
  
});
