const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  fullName: {
    type: String
  },
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  birthdate: {
    type: Date
  },
  aboutMe: {
    type: String
  },
  profileImg: {
    type: String
  },
  posts: {
    type: [String]
  },
  followers: {
    type: [String]
  },
  following: {
    type: [String]
  }
});

module.exports = {
  User: model('Users', UserSchema)
}