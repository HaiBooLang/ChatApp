/**
 * Module dependencies.
 * @module emailserver
 */

var nodemailer = require('nodemailer');

var credentials = require('../config/credentials');

/**
 * Creates a nodemailer transporter object with the specified service and authentication credentials.
 * @type {Object}
 */
var transporter = nodemailer.createTransport({
    service: 'qq',
    auth:{
        user: credentials.qqmail.user,
        pass: credentials.qqmail.pass
    }
})

/**
 * Sends a verification email to the specified email address.
 * @param {string} email - The email address to send the verification email to.
 * @param {Object} res - The response object to send the result of the email sending operation to.
 */
exports.emailSignUp = function(email, res){
    let options ={
        from: credentials.qqmail.user,
        to: email,
        subject: 'Cactus注册验证码',
        html: '<h1>欢迎注册Cactus</h1><p>您的验证码为：</p><p style="color: red;">' + Math.random().toString().slice(-6) + '</p>'
    }

    transporter.sendMail(options, function(err, msg){
        if(err){
            console.log(err)
            res.send({success: false, message: '邮件发送失败'})
        }else{
            console.log(msg)
            res.send({success: true, message: '邮件发送成功'})
        }    })

}
