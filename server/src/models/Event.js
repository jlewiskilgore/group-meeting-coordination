var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Event = new Schema({
	eventName: String,
	location: String,
	startDate: String,
	duration: String,
	durationUnit: String
});

module.exports = mongoose.model('Event', Event);