const BcryptService = require('./bcryptService')
const prisma = require('../config/prisma')
const JWTService = require('./jwtService')

class OperadorService {
  // * Sugerencia: Refactorizar con inyeccion de dependecias
  bcryptService = new BcryptService()
  jwtService = new JWTService()

  constructor() {}

  async addUser(user) {
    try {
      const userExists = await prisma.operador.findFirst({
        where: {
          licencia_medica: user.licencia_medica
        }
      })

      if (userExists) {
        throw new Error('User already exists')
      }

      const hashedPassword = await this.bcryptService.hashPassword(user.password)
      const createdUser = await prisma.operador.create({
        data: {
          ...user,
          password: hashedPassword
        }
      })

      return { user: createdUser.nombre, license: createdUser.licencia_medica }
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async loginUser({ licencia_medica, password }) {
    try {
      const operador = await prisma.operador.findUnique({
        where: { licencia_medica }
      })

      if (!operador) {
        throw new Error('User not found')
      }

      const isPasswordValid = await this.bcryptService.comparePassword(password, operador.password)
      if (!isPasswordValid) {
        throw new Error('Invalid credentials')
      }

      const token = this.jwtService.generateToken(operador.licencia_medica)
      return { token }
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

module.exports = OperadorService
