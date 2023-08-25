var dbserver = require('../dao/dbserver');

exports.signIn = function (req, res) {
    var data = req.body.data;
    var pwd = req.body.pwd;

    dbserver.userMatch(data, pwd, res);
}