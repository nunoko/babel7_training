var webpack = require('webpack');
const path = require('path')  // เพื่อทำ absolute path 
module.exports = {
  mode: 'development', // <---------- เพิ่มบรรทัดนี้  'production','development' ไม่ระบุจะเป็น prod
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './public/dist') // __dirname <---- อันนี้คือตัวแปรพิเศษของ node =>return ค่า absolute path ของ directory ปัจจุบัน
  },
  module: {
	rules:[
	 {
	 test: /.js$/,
	 exclude: /(node_modules|bower_components)/,
	 use:
	   {
		 loader: 'babel-loader',
		 options: {
				presets: ['@babel/preset-env'],
				plugins: ['@babel/plugin-transform-runtime']
				}
			}
	  }
	 ]
  }
}
