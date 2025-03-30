const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const dataRouter = require('./routers/dataRouter')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Server running')
})

app.use(dataRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})