/** @jsx React.DOM */

var React = require("react/addons");
var Router = require('react-router');


var Routes = require('../app/routes');

module.exports = function(req, res, next) {

	var router = Router.create({
		location: req.url,
		routes: Routes
	});

	Router.run(function(Handler, state) {
		var html = React.renderToString(<Handler />);

		return res.end(React.renderToString(
			<html>
				<head>
				  <title>Test</title>
				</head>

				<body>
					<div id="content" dangerouslySetInnerHTML={{__html: html}} />
					<script src={"assets/main.js"}></script>
				</body>
			</html>
		));
	});

}