/**
 * Finds all users in the database.
 * @param {Object} res - The response object.
 * @returns {void}
 */
var bcrypt = require('../dao/bcrypt')
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
    let password = bcrypt.encryption(pwd)

    let data ={
        name: name,
        email: mail,
        psw: password,
        time: new Date(),  
    }

    let user = new User(data)

    user.save(function(err, result) {
        if(err) {
            res.send({status:500, success: false, message: '注册失败'})
        } else {
            res.send({status:200, success: true, message: '注册成功'})
        }
    })
}

exports.countUserValue = function (data, type, res) {
    let wherestr = {}

    wherestr[type] = data
    
    User.countDocuments(wherestr, function(err, result) {
        if(err) {
            res.send({status:500, success: false, message: '查询失败'})
        } else {
            res.send({status:200, success: true, message: '查询成功', result: result == 0 ? 0 : 1})
        }
    })
}
