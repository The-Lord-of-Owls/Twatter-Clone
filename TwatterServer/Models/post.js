const { Schema, model, ObjectId } = require('mongoose');

const PostSchema = new Schema({
  text: {
    type: String
  },
  timestamp: {
    type: String
  },
  creator: {
    type: String
  },
  likes: {
    type: [String]
  },
  repost: {
    type: ObjectId
  },
  uuid: ObjectId
});

module.exports = {
  Post: model('Posts', PostSchema)
}