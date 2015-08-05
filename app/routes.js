var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
	render: function() {
		return (
			<div className='app'>
				<RouteHandler />
			</div>
		);
	}
});

var Home = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Home</h1>
			</div>
		)
	}
});


var Routes = (
	<Route handler={App}>
		<Route name="test" path="/" handler={Home} />
	</Route>
);

module.exports = Routes;
