var nodemailer = require('nodemailer');

var credentials = require('../config/credentials');

var transporter = nodemailer.createTransport({
    service: 'qq',
    auth:{
        user: credentials.qqmail.user,
        pass: credentials.qqmail.pass
    }
})

exports.emailSignUp = function(email, res){
    let options ={
        from: credentials.qqmail.user,
        to: email,
        subject: 'Cactus注册验证码',
        html: '<h1>欢迎注册Cactus</h1><p>您的验证码为：</p><p style="color: red;">' + Math.random().toString().slice(-6) + '</p>'
    }
}

transporter.sendMail(options, function(err, msg){
    if(err){
        console.log(err)
    }else{
        console.log(msg)
    }
})