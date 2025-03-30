const connection = require("../data/db");

function index(req, res) {
  const sql = 'SELECT * FROM esercizi_mysql.studenti;'

  connection.query(sql, (err, results) => {
    if (err) return res.status(404).send('Pagina non trovata')
    res.send(results)
  })
}

function show(req, res) {
  const { id } = req.params

  const sql = `SELECT * FROM esercizi_mysql.studenti
              where studenti.id = ?`

  connection.query(sql, [id], (err, result) => {
    if (result.length === 0) return res.status(404).send('Risultato non trovato')
    res.send(result[0])

  })



}

module.exports = { index, show }