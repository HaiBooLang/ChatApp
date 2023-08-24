/**
 * Finds all users in the database.
 * @param {Object} res - The response object.
 * @returns {void}
 */
var dbmodel = require('../model/dbmodel')
var User = dbmodel.model('User')

exports.findUser = function(res) {
    User.find({}, function(err, doc) {
        if (err) {
            console.log(err)
        } else {
            res.send(doc)
        }
    })
}