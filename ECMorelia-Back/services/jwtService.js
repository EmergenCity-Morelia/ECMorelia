const jwt = require('jsonwebtoken')

class JWTService {
  generateToken(payload) {
    return jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })
  }
}

module.exports = JWTService
