var React = require('react/addons');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
	render: function() {
		return (
			<div className='app'>
				<h1>App</h1>
				<RouteHandler />
			</div>
		);
	}
});

var Home = React.createClass({
	render: function() {
		return (
			<div ref="123">
				<h2>Home</h2>
			</div>
		)
	}
});


var Routes = (
	<Route handler={App}>
		<Route name="home" path="/" handler={Home} />
	</Route>
);

module.exports = Routes;
