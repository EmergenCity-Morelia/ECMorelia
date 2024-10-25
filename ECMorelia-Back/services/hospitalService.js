const BcryptService = require('./bcryptService')
const prisma = require('../config/prisma')
const JWTService = require('./jwtService')

class HospitalService {
  constructor() {
    this.bcryptService = new BcryptService()
    this.jwtService = new JWTService()
  }

  async addUser(user) {
    try {
      const userExists = await prisma.hospitales.findFirst({
        where: {
          nombre: user.nombre
        }
      })

      if (userExists) {
        throw new Error('User already exists')
      }

      const hashedPassword = await this.bcryptService.hashPassword(user.password)
      const createdUser = await prisma[role].create({
        data: {
          ...user,
          password: hashedPassword
        }
      })

      return { user: createdUser }
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async verifyUser({ nombre, password }) {
    try {
      const hospital = await prisma.hospitales.findUnique({
        where: { nombre }
      })

      if (!hospital) {
        throw new Error('User not found')
      }

      const isPasswordValid = await this.bcryptService.comparePassword(password, hospital.password)
      if (!isPasswordValid) {
        throw new Error('Invalid credentials')
      }

      return this.jwtService.generateToken({ user: hospital.nombre })
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

module.exports = HospitalService
