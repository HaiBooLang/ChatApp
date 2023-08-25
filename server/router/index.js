var dbserver = require('../dao/dbserver')
var emailserver = require('../dao/emailserver')
var signup = require('../server/signup')
/**
 * Sets up the router for the application.
 * @param {Object} app - The Express application object.
 */
module.exports = function(app){
    app.get('/test', (req, res) => {
        dbserver.findUser(res)
    })

    app.post('/mail', (req, res) => {
        emailserver.emailSignUp(req.body.mail)
        res.send({success: true, message: '邮件发送成功'})
    })

    app.post('/signup/add', (req, res) => {
        signup.signUp(req, res)
    })
}