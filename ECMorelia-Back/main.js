const express = require('express')
const app = express()
const cors = require('cors')
const { swaggerUi, swaggerDocs } = require('./config/swagger')
const dotenv = require('dotenv')
dotenv.config()

const seed = require('./routes/seed.js')
const auth = require('./routes/auth.js')

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/seed', seed)
app.use('/auth', auth)

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`)
})
