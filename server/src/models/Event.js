var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Event = new Schema({
	event: {
		type: String
	} 
}, {
	collection: 'events'
});

module.exports = mongoose.model('Event', Event);