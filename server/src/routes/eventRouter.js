var express = require('express');
var app = express();
var eventRouter = express.Router();

var Event = require('../models/Event');

eventRouter.route('/add').post(function(req, res) {
	console.log("add event route");
	var event = new Event(req.body);
	console.log(event);
});

eventRouter.route('/').get(function(req, res) {
	console.log("default route");
});

eventRouter.route('/update/:id').post(function(req, res) {
	console.log("update route");
});

eventRouter.route('/delete/:id').get(function(req, res) {
	console.log("delete route");
});

module.exports = eventRouter;