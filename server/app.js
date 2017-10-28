var express = require('express');
var app = express();
var cors = require('cors');

var eventRouter = require('./src/routes/eventRouter.js');

var mongoose = require('mongoose');
var dbURL = process.env.MONGOLAB_URI;

mongoose.connect(dbURL || 'mongodb://localhost/meetingdb');

var db = mongoose.connection;

db.on('error', function(err) {
	console.log(err);
})

db.once('open', function() {
	console.log('Connected to database.');

	app.use(function(req, res, next) {
		req.db = db;
		next();
	});

	app.use('/events', eventRouter);

	app.use(express.static('public'));
	app.use(cors());

	app.set('port', (process.env.PORT || 8080));

	app.listen(process.env.PORT || 8080, function() {
		console.log('Server Listening on Port 8080');
	});
});