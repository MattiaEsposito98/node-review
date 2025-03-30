const connection = require("../data/db");

function index(req, res) {
  const sql = 'SELECT * FROM esercizi_mysql.studenti;'

  connection.query(sql, (err, results) => {
    if (err) return res.status(404).send('Pagina non trovata')
    res.json(results)
  })
}

module.exports = { index }