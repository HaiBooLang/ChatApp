var dbserver = require('../dao/dbserver')

/**
 * Sets up the router for the application.
 * @param {Object} app - The Express application object.
 */
module.exports = function(app){
    app.get('/test', (req, res) => {
        dbserver.findUser(res)
    })
}