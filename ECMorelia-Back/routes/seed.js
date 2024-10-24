const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const app = require('express')
const router = app.Router()
const data = require('./dataSeed.js')

const truncateTables = async () => {
  await prisma.ambulancias_paramedicos.deleteMany()
  await prisma.ambulancias_hospitales.deleteMany()
  await prisma.ambulancias_doctor.deleteMany()
  await prisma.ambulancias.deleteMany()
  await prisma.paramedicos.deleteMany()
  await prisma.operador.deleteMany()
  await prisma.hospitales.deleteMany()
  await prisma.doctor.deleteMany()
}

const seedData = async (table, data) => {
  try {
    const result = await prisma[table].createMany({
      data
    })
    console.log(`Inserted ${result.count} records into ${table}`)
    return result
  } catch (error) {
    console.error(`Error inserting data into ${table}:`, error)
    throw error // Lanza el error para que pueda ser manejado por quien llame a la función
  }
}

router.post('/', async (req, res) => {
  await truncateTables()

  const doctor = await seedData('doctor', data.doctor)
  const hospitales = await seedData('hospitales', data.hospitales)
  const operador = await seedData('operador', data.operador)
  const paramedicos = await seedData('paramedicos', data.paramedicos)
  const ambulancias = await seedData('ambulancias', data.ambulancias)
  const ambulanciasDoctor = await seedData('ambulancias_doctor', data.ambulancias_doctor)
  const ambulanciasHospitales = await seedData(
    'ambulancias_hospitales',
    data.ambulancias_hospitales
  )
  const ambulanciasParamedicos = await seedData(
    'ambulancias_paramedicos',
    data.ambulancias_paramedicos
  )

  res.status(200).json({
    doctor,
    hospitales,
    operador,
    paramedicos,
    ambulancias,
    ambulanciasDoctor,
    ambulanciasHospitales,
    ambulanciasParamedicos
  })
})

module.exports = router
