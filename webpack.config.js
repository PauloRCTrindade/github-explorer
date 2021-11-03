const path = require('path');
const HtmWeebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports ={
	mode: isDevelopment ? 'development': 'production',
	devtool: isDevelopment ? 'eval-source-map' : 'source-map',
	entry:path.resolve(__dirname,'src','index.jsx'),
	output:{
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js'
	},
	resolve:{
		extensions:['.js','.jsx'],
	},
	devServer:{
			static: {
				directory: path.join(__dirname, 'public'),
			},
			// compress: true,
			// port: 9000,
	},
	plugins:[
		new HtmWeebpackPlugin({
			template: path.resolve(__dirname,'public','index.html')
		})
	],
	module:{
		rules:[
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use:'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use:['style-loader', 'css-loader','sass-loader'],
			},

		],
	}
}