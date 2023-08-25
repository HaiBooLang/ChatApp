/**
 * This module exports functions for interacting with the database to perform CRUD operations on the User model.
 * @module dbserver
 */

var bcrypt = require('../dao/bcrypt')
var jwt = require('../dao/jwt')
var dbmodel = require('../model/dbmodel')
var User = dbmodel.model('User')

/**
 * Builds a new user and saves it to the database.
 * @param {string} name - The name of the user.
 * @param {string} mail - The email of the user.
 * @param {string} pwd - The password of the user.
 * @param {Object} res - The response object.
 * @returns {void}
 */
exports.buildUser = function (name, mail, pwd, res) {
    /**
     * Hash the password using bcrypt
     * bcrypt.hash() is asynchronous, This will prevent the event loop from being blocked
     * and allow the application to remain responsive when handling a large number of users.
     */
    bcrypt.hash(pwd, 10, function (err, hash) {
      if (err) {
        res.send({ status: 500, success: false, message: '注册失败' })
      } else {
        // Create a new user with the hashed password
        const user = new User({
          name: name,
          email: mail,
          psw: hash
        })
  
        // Save the user to the database
        user.save(function (err) {
          if (err) {
            res.send({ status: 500, success: false, message: '注册失败' })
          } else {
            res.send({ status: 200, success: true, message: '注册成功' })
          }
        })
      }
    })
  }

/**
 * Counts the number of users in the database with the specified data and type.
 * @param {string} data - The data to search for.
 * @param {string} type - The type of data to search for (name or email).
 * @param {Object} res - The response object.
 * @returns {void}
 */
exports.countUserValue = function (data, type, res) {
    // Create a search criteria object based on the provided data and type
    let wherestr = { [type]: data }

    // Count the number of users in the database that match the search criteria
    User.countDocuments(wherestr, function (err, result) {
        if (err) {
            res.send({ status: 500, success: false, message: '查询失败' })
        } else {
            res.send({ status: 200, success: true, message: '查询成功', result: result ? 1 : 0 })
        }
    })
}

/**
 * Searches the database for a user with the specified data and password.
 * @param {string} data - The data to search for (name or email).
 * @param {string} pwd - The password to verify.
 * @param {Object} res - The response object.
 * @returns {void}
 */
exports.userMatch = function (data, pwd, res) {

    // Create a search criteria object based on the provided data
    let wherestr = { $or: [{ 'name': data }, { 'email': data }] }

    // Specify which fields should be included in the query results
    let out = { name: 1, email: 1, psw: 1 }

    // Search the database for a user that matches the search criteria
    User.find(wherestr, out, function (err, result) {
        if (err) {
            res.send({ status: 500, success: false, message: '查询失败' })
        } else {
            if (result == '') {
                res.send({ status: 400, success: false, message: '用户不存在或密码错误' })
            } else {
                result.map(function (user) {
                    // Verify the password using bcrypt
                    const pwdMatchFlag = bcrypt.verification(pwd, user.psw)
                    if (pwdMatchFlag) {
                        // Generate a JWT token for the user
                        let token = jwt.generateToken(user._id)
                        let back = {
                            id: user._id,
                            name: e.name,
                            imgurl: user.imgurl,
                            token: token
                        }
                        res.send({ status: 200, success: true, message: '登录成功', result: back })
                    } else {
                        res.send({ status: 400, success: false, message: '用户不存在或密码错误' })
                    }
                })
            }
        }
    })
}
