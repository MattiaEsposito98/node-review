const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const dataRouter = require('./routers/dataRouter')
const logger = require('./middlware')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Server running')
})

app.use(logger)
app.use('/data', dataRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})