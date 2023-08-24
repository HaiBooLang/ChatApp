/**
 * This module defines the User, Friend, Message, Group, and GroupUser models for the ChatApp server.
 * @module dbmodel
 */

var mongoose = require('mongoose')
var db = require('../config/db')
var Schema = mongoose.Schema

/**
 * Represents a user in the ChatApp server.
 * @typedef {Object} User
 * @property {string} name - The name of the user.
 * @property {string} psw - The password of the user.
 * @property {string} email - The email of the user.
 * @property {string} sex - The gender of the user.
 * @property {Date} name - The date of birth of the user.
 * @property {number} phone - The phone number of the user.
 * @property {string} explain - The explanation of the user.
 * @property {string} imgurl - The URL of the user's profile picture.
 * @property {Date} time - The date when the user registered.
 */

/**
 * Defines the schema for the User model.
 * @type {import('mongoose').Schema<User>}
 */
var UserSchema = new Schema({
    name: { type: String },
    psw: { type: String },
    email: { type: String },
    sex: { type: String, default: 'asexual' },
    name: { type: Date },
    phone: { type: Number },
    explain: { type: String },
    imgurl: { type: String, default: 'user.jpg' },
    time: { type: Date }
})

/**
 * Represents a friend in the ChatApp server.
 * @typedef {Object} Friend
 * @property {Schema.Types.ObjectId} userID - The ID of the user who has the friend.
 * @property {Schema.Types.ObjectId} friendID - The ID of the friend.
 * @property {String} state - The state of the friendship.
 * @property {Date} time - The time when the friendship was established.
 */

/**
 * Defines the schema for the Friend model.
 * @type {import('mongoose').Schema<Friend>}
 */
var FriendSchema = new Schema({
    userID: { type: Schema.Types.ObjectId, ref: 'User' },
    friendID: { type: Schema.Types.ObjectId, ref: 'User' },
    state: { type: String },
    time: { type: Date }
})

/**
 * Represents a message in the ChatApp server.
 * @typedef {Object} Message
 * @property {Schema.Types.ObjectId} userID - The ID of the user who sent the message.
 * @property {Schema.Types.ObjectId} friendID - The ID of the user who received the message.
 * @property {string} message - The content of the message.
 * @property {string} types - The type of the message (e.g. text, image, video).
 * @property {Date} time - The timestamp of when the message was sent.
 * @property {Number} state - The state of the message (e.g. sent, delivered, read).
 */

/**
 * Defines the schema for the Message model.
 * @type {import('mongoose').Schema<Message>}
 */
var MessageSchema = new Schema({
    userID: { type: Schema.Types.ObjectId, ref: 'User' },
    friendID: { type: Schema.Types.ObjectId, ref: 'User' },
    message: { type: String },
    types: { type: String },
    time: { type: Date },
    state: { type: Number }
});

/**
 * Represents a group in the ChatApp server.
 * @typedef {Object} Group
 * @property {Schema.Types.ObjectId} userID - The ID of the user who created the group.
 * @property {string} name - The name of the group.
 * @property {string} imgurl - The URL of the group's profile picture.
 * @property {Date} time - The timestamp of when the group was created.
 * @property {string} notice - The notice of the group.
 */

/**
 * Defines the schema for the Group model.
 * @type {import('mongoose').Schema<Group>}
 */
var GroupSchema = new Schema({
    userID: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String },
    imgurl: { type: String, default: 'group.jpg' },
    time: { type: Date },
    notice: { type: String }
});

/**
 * Represents a user's membership in a group in the ChatApp server.
 * @typedef {Object} GroupUser
 * @property {Schema.Types.ObjectId} groupID - The ID of the group.
 * @property {Schema.Types.ObjectId} userID - The ID of the user who is a member of the group.
 * @property {string} name - The name of the user in the group.
 * @property {Number} tip - The tip of the user in the group.
 * @property {Date} time - The timestamp of when the user joined the group.
 * @property {Number} shield - The shield status of the user in the group.
 */

/**
 * Defines the schema for the GroupUser model.
 * @type {import('mongoose').Schema<GroupUser>}
 */
var GroupUserSchema = new Schema({
    groupID: { type: Schema.Types.ObjectId, ref: 'Group' },
    userID: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String },
    tip: { type: Number, default: 0 },
    time: { type: Date },
    shield: { type: Number }
});

/**
 * Defines the schema for group messages in the Datebase.
 * @typedef {Object} GroupMsgSchema
 * @property {Schema.Types.ObjectId} groupID - The ID of the group the message belongs to.
 * @property {Schema.Types.ObjectId} userID - The ID of the user who sent the message.
 * @property {string} message - The content of the message.
 * @property {string} types - The type of the message.
 * @property {Date} time - The timestamp of when the message was sent.
 */
var GroupMsgSchema = new Schema({
    groupID: { type: Schema.Types.ObjectId, ref: 'Group' },
    userID: { type: Schema.Types.ObjectId, ref: 'User' },
    message: { type: String },
    types: { type: String },
    time: { type: Date }
});

module.exports = db.model('User', UserSchema)
module.exports = db.model('Friend', FriendSchema)
module.exports = db.model('Message', MessageSchema)
module.exports = db.model('Group', GroupSchema)
module.exports = db.model('GroupUser', GroupUserSchema)
module.exports = db.model('GroupMsg', GroupMsgSchema)