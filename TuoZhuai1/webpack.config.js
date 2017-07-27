var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var port = 8088;
module.exports = {
	"devtool":"source-map",
	devServer:{
	    port:port,
	    inline:true,
	},
	entry: './js/entry.js', //入口文件
	output: {
		filename: './bundle.js', //出口
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.less$/,
				loader:'style-loader!css-loader!postcss-loader!less-loader'
			},
			{
	            test:/\.(png|jpg|gif|svg)/i,
	            loader:'url-loader',
	            query:{
	                limit:20000,
	                name:'image/[name]-[hash:5].[ext]'
	            }
	        },
	        {
	            test:/\.js$/,
	            loader:'babel-loader',
	            exclude:/node_modules/,
	            query: {
	                presets: ['es2015']
	            }
	        }
		]
	},	
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:'+port })
    ]
}