var dbserver = require('../dao/dbserver');

exports.signUp = function (req, res) {  
    let mail = req.body.mail
    let name = req.body.name
    let pwd = req.body.pwd

    dbserver.buildUser(mail, mail, pwd, res)
}