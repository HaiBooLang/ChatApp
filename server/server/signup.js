const dbserver = require('../dao/dbserver');

/**
 * Creates a new user account with the provided email, name and password.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.signUp = function (req, res) {
    let mail = req.body.mail
    let name = req.body.name
    let pwd = req.body.pwd

    dbserver.buildUser(mail, mail, pwd, res)
}

/**
 * Checks if a given user value already exists in the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.judgeValue = function (req, res) {
    let data = req.body.data
    let type = req.body.type

    dbserver.countUserValue(data, type, res)
}