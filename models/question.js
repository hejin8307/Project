const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

var schema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  title: {type: String, trim: true, required: true},
  content: {type: String, trim: true, required: true},
  tags: [String],
  location: {type: String, trim: true, required: true},
  date_start: {type: Date, trim: true, default: Date},
  date_end: {type: Date, trim: true, default: Date},
  start_time: {type: String, trim: true, required: true},
  end_time: {type: String, trim: true, required: true},
  organizer: {type: String, trim: true, required: true},
  description: {type: String, trim: true, required: true},
  ticket_name: {type: String},
  price: {type: Number, default: 0},
  eventType: {type: String, trim: true, required: true},
  // checkbox1: {type: String},
  // checkbox2: {type: String},
  numLikes: {type: Number, default: 0},
  numAnswers: {type: Number, default: 0},
  numReads: {type: Number, default: 0},
  createdAt: {type: Date, default: Date.now}
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});
schema.plugin(mongoosePaginate);
var Question = mongoose.model('Question', schema);

module.exports = Question;
