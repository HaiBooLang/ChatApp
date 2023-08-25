const dbserver = require('../dao/dbserver');
const emailserver = require('../dao/emailserver');
const signup = require('../server/signup');

/**
 * Sets up the router for the application.
 * @param {Object} app - The Express application object.
 */
module.exports = function (app) {
    /**
     * GET endpoint for testing purposes.
     * @name GET/test
     * @function
     * @memberof module:router
     * @inner
     * @param {Object} req - The Express request object.
     * @param {Object} res - The Express response object.
     */
    app.get('/test', (req, res) => {
        dbserver.findUser(res);
    });

    /**
     * POST endpoint for sending email.
     * @name POST/mail
     * @function
     * @memberof module:router
     * @inner
     * @param {Object} req - The Express request object.
     * @param {Object} req.body - The request body.
     * @param {string} req.body.mail - The email address to send the email to.
     * @param {Object} res - The Express response object.
     * @returns {Object} - The response object with a success message.
     */
    app.post('/mail', (req, res) => {
        emailserver.emailSignUp(req.body.mail);
        res.send({ success: true, message: '邮件发送成功' });
    });

    /**
     * POST endpoint for adding a new user.
     * @name POST/signup/add
     * @function
     * @memberof module:router
     * @inner
     * @param {Object} req - The Express request object.
     * @param {Object} req.body - The request body.
     * @param {string} req.body.username - The username of the new user.
     * @param {string} req.body.password - The password of the new user.
     * @param {string} req.body.email - The email address of the new user.
     * @param {Object} res - The Express response object.
     */
    app.post('/signup/add', (req, res) => {
        signup.signUp(req, res);
    });

    /**
     * POST endpoint for checking if a value already exists in the database.
     * @name POST/signup/judge
     * @function
     * @memberof module:router
     * @inner
     * @param {Object} req - The Express request object.
     * @param {Object} req.body - The request body.
     * @param {string} req.body.type - The type of value to check (username or email).
     * @param {string} req.body.value - The value to check.
     * @param {Object} res - The Express response object.
     */
    app.post('/signup/judge', (req, res) => {
        signup.judgeValue(req, res);
    });
};