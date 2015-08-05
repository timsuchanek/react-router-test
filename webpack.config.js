/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');
var path = require('path');

var assetsPath = path.join(__dirname, 'public', 'assets');
var publicPath = "assets/";



var preLoaders = [{
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	loader: 'jsx-loader'
}];


module.exports = [

{
	// The configuration for the server-side rendering
	name: "server-side rendering",
	entry: "./server/page.js",
	target: "node",
	output: {
		path: assetsPath,
		filename: "../../server/page.generated.js",
		publicPath: publicPath,
		libraryTarget: "commonjs2"
	},
	externals: /^[a-z\-0-9]+$/,
	module: {
	  preLoaders: preLoaders
	},
	plugins: [
		new webpack.DefinePlugin({
			__DEV__: true,
			__BROWSER__: false
		}),
	]
}];
