import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "root369",
    database:"blogpost"
})

db.connect((err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Database connected')
  })