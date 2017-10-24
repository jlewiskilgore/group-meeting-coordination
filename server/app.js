var express = require('express');
var app = express();
var cors = require('cors');

var eventRouter = require('./src/routes/eventRouter.js');

app.use(express.static('public'));
app.use(cors());

app.use('/events', eventRouter);

app.set('port', (process.env.PORT || 8080));

app.listen(process.env.PORT || 8080, function() {
	console.log('Server Listening on Port 8080');
})