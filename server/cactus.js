/**
 * This is the main file for the ChatApp server.
 * It sets up an Express app and listens on port 3000.
 * @module ChatAppServer
 */

const express = require('express')
const app = express()
const port = 3000

/**
 * Responds with a "Hello World!" message.
 * @function
 * @name getHome
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/', (req, res) => {
    res.send('Hello World!')
})

/**
 * Starts the server and logs a message to the console.
 * @function
 * @name startServer
 * @param {number} port - The port number to listen on.
 */
app.listen(port, () => {
    console.log(`端口已启动：${port}`)
})