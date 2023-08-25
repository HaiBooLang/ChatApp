/**
 * Encrypts the given password using bcrypt.
 * @param {string} password - The password to be encrypted.
 * @returns {string} The encrypted password.
 */
var encryption = function (password) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return hash;
}

/**
 * Verifies if the given password matches the given hash using bcrypt.
 * @param {string} password - The password to be verified.
 * @param {string} hash - The hash to be compared against.
 * @returns {boolean} True if the password matches the hash, false otherwise.
 */
var verificaion = function (password, hash) {   
    return bcrypt.compareSync(password, hash);
}

module.exports = {
    encryption: encryption,
    verificaion: verificaion
};
