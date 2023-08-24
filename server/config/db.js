/**
 * @file This file contains the configuration for the database connection.
 * @name db.js
 * @requires mongose
 */
var mongose = require('mongose')

var db = mongose.createConnection('mongodb://localhost:27017/cactus')
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log('db connected')
})

module.exports = db