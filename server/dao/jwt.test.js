const jwt = require('jsonwebtoken')
const jwtFunctions = require('./jwt')

describe('generateToken', () => {
  test('should generate a JWT with the given user ID and expiration time', () => {
    const id = 'testuser'
    const res = {
      send: jest.fn()
    }
    const token = jwtFunctions.generateToken(id, res)
    const decoded = jwt.verify(token, 'hahahahaha')
    expect(decoded.id).toBe(id)
  })
})

describe('verifyToken', () => {
  test('should verify the given JWT and return its payload', () => {
    const id = 'testuser'
    const payload = { id: id, time: new Date() }
    const token = jwt.sign(payload, 'hahahahaha', { expiresIn: 60 * 60 * 24 * 30 })
    const decoded = jwtFunctions.verifyToken(token)
    expect(decoded.id).toBe(id)
  })

  test('should throw an error if the given JWT is invalid', () => {
    const token = 'invalidtoken'
    expect(() => {
      jwtFunctions.verifyToken(token)
    }).toThrow()
  })
})