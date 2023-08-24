/**
 * This module defines the User model for the ChatApp server.
 * @module dbmodel
 */

var mongose = require('mongose')
var db = require('../config/db')
var Schema = mongose.Schema

/**
 * Defines the schema for the User model.
 * @type {Schema}
 */
var SchemaUser = new Schema()

module.exports = db.model('User', SchemaUser)