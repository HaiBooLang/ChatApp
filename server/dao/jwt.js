var jwt = require('jsonwebtoken');
var secret = 'hahahahaha'

/**
 * Generates a JSON Web Token (JWT) with the given user ID and expiration time.
 * @param {string} id - The user ID to include in the token payload.
 * @param {Object} res - The response object to send the token in.
 * @returns {string} The generated JWT.
 */
exports.generateToken = function (id, res) {
    let payload = { id: id, time: new Date() }
    let token = jwt.sign(payload, secret, { expiresIn: 60 * 60 * 24 * 30 })
    return token
}

/**
 * Verifies the given JWT and returns its payload.
 * @param {string} token - The JWT to verify.
 * @returns {Object} The payload of the verified JWT.
 */
exports.verifyToken = function (token) {
    return jwt.verify(token, secret)
}