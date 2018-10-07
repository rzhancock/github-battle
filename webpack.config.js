var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},

	module: {
		rules:  [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader']},
<<<<<<< HEAD
=======
			{test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/font-woff"},
			{test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/font-woff"},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=application/octet-stream"},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: "file-loader"},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: "url-loader?limit=10000&mimetype=image/svg+xml"}
>>>>>>> e3e48e75054997eee6f1d41bd5e1c6f14fb18121
		]
	},
	devServer: {
		historyApiFallback: true
	},
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new webpack.LoaderOptionsPlugin({
  options: {
    context: path.join(__dirname, 'src'),
    output: {
      path: path.join(__dirname, 'www')
    }
  }
})
  ]
};

if (process.env.NODE_ENV === 'production') {
	config.plugins.push(
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}
		}),
		new webpack.optimize.UglifyJsPlugin()
	)
}

module.exports = config;