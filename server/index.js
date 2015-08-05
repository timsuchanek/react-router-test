var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var page = require('./page.generated.js');

var port = process.env.PORT || 3000;

var app = new express();

var publicPath = path.join(__dirname, 'public', 'assets');
var index = path.join(__dirname, '../', 'app', 'index.html');

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

console.log(publicPath);
app.use('/assets', express.static('public/assets'));

app.use(function(req, res, next) {
	page(req, res, next);
});

app.get('*', function(req, res) {
	res.sendFile(index);
});

app.listen(port);

console.log('Server running at port ' + port);