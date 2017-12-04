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
  ticket_name: {type: String, trim: true, required: true},
  price: {type: Number, default: 0},
  free: {type: String, checked: true},
  paid: {type: String, checked: true},
  eventType: {type: String},
  eventTopic: {type: String},
  numLikes: {type: Number, default: 0},
  numAnswers: {type: Number, default: 0},
  numReads: {type: Number, default: 0},
  createdAt: {type: Date, default: Date.now},

  name: {type: String, required: true, trim: true},
  email: {type: String, required: true, index: true, unique: true, trim: true},
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});
schema.plugin(mongoosePaginate);
// schema.statics.eventType = [
//   "Select the type of event",
//   "Appearance or Signing",
//   "Attraction",
//   "Camp, Trip, or Retreat",
//   "Concert or Performance",
//   "Class, Training, or Workshop",
//   "Concert or Performance",
//   "Conference",
//   "Convention",
//   "Dinner or Gala",
//   "Festival or Fail",
//   "Game or Competition",
//   "Metting or Networking Event",
//   "Other",
//   "Party or Social Gathering",
//   "Race or Endurance Event",
//   "Rally",
//   "Screening",
//   "Seminar or Talk",
//   "Tour",
//   "Tournament",
//   "Tradeshow, Consumer Show, or Expo"
// ];

// schema.statics.eventTopic = [
//   "Select a topic",
//   "Auto, Boat & Air",
//   "Business & Professional",
//   "Charity & Causes",
//   "Community & Culture",
//   "Family & Education",
//   "Fashion & Beauty",
//   "Film, Media& Entertainment",
//   "Food & Drink",
//   "Government & Politics",
//   "Health & Wellness",
//   "Hobbies & Special Interest",
//   "Home & Lifestyle",
//   "Music",
//   "Other",
//   "Performing & Visual Arts",
//   "Religion& Spirituality",
//   "School Activities",
//   "Science & Technology",
//   "Seasonal & Holiday",
//   "Sports & Fitness",
//   "Travel & Outdoor"
// ];

var Question = mongoose.model('Question', schema);

module.exports = Question;

