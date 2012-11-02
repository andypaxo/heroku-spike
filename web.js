var express = require('express');

var app = express.createServer(express.logger('tiny'));
app.use(express.bodyParser());

app.get('/', function(request, response) {
	response.send('It works!');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on " + port);
});