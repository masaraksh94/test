let path = require('path');

let conf = {
	entry: './src-js/script.js',
	output: {
		path : path.resolve(__dirname, './dist-js/'),
		filename: 'bundler.js',
		publicPath: 'dist-js/'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	},

	watch: true,
	devtool: 'cheap-eval-sourse-map'
};

module.exports = conf;