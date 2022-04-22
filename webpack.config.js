const path = require('path');

module.exports = {
	entry: {
		index: './src/index.js',
		about: './src/about.js',
        article: './src/article.js',
		cart: './src/cart.js',
		categories: './src/categories.js',
		comparison: './src/comparison.js',
		contact: './src/contact.js',
		location: './src/location.js',
		news: './src/news.js',
		package: './src/package.js',
		product: './src/product.js',
		search: './src/search.js',
		support: './src/support.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'build'),
		},
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|webp|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.js$/i,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
};
