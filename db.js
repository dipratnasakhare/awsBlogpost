import mysql from "mysql"

export const db = mysql.createPool({
    connectionLimit : 100, //important
    host:"localhost",
    user:"root",
    password: "root369",
    database:"blogpost",
    debug    :  false
})

