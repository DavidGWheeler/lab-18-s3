'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const picSchema = Schema({
  name: {type: String, required: true},
  desc: {type: String, required: true},
  userId: {type: Schema.Types.ObjectId, required: true},
  galleryID: {type: Schema.Types.ObjectId, required: true},
  inageURI: {type: String, required:true, unique: true},
  objectKey: {type: String, required: true, unique: true},
  created: {type: Date, required: true, default: Date.now},
});

module.exports = mongoose.model('pic', picSchema);
