const express = require('express')
const app = express()
const cors = require('cors')
const { swaggerUi, swaggerDocs } = require('./config/swagger')
const cookieParser = require('cookie-parser')

const dotenv = require('dotenv')
dotenv.config()

const seed = require('./routes/seed.js')
const auth = require('./routes/auth.js')
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/seed', seed)
app.use('/auth', auth)

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world'
  })
})

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`)
})
