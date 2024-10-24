const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const seed = require('./routes/seed.js')

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use('/seed', seed)

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`)
})
