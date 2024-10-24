const app = require('express')
const OperadorService = require('../services/OperadorService')
const router = app.Router()

const operador = new OperadorService()

router.get('/', (req, res) => {
  res.send({
    message: 'Hello World'
  })
})

router.post('/signup', async (req, res) => {
  try {
    const user = req.body
    await operador.addUser(user)
    res.status(200).send({
      message: `New user added successfully`
    })
  } catch (error) {
    console.error(error)
  }
})

router.post('/login', () => {
  try {
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
