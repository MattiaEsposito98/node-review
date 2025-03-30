const mysql = require('mysql2')


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'esercizi_mysql'
})

connection.connect((err) => {
  if (err) throw err
  console.log('Connesione riuscita')
})

module.exports = connection