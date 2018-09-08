const webpack = require('webpack')
const path = require('path')  // เพื่อทำ absolute path 

module.exports = {
  mode: 'development', // <---------- เพิ่มบรรทัดนี้  'product','development' ไม่ระบุจะเป็น prod
  entry: './src/index.js',
  output: {
    filename: '[name].js', // see index.html <script src='http://localhost:8080/main.js'></script> ,server file bundle.js from memory and user feature webpack ให้ใช้ [name]
    path: path.join(__dirname, './public/dist'), // __dirname <---- อันนี้คือตัวแปรพิเศษของ node =>return ค่า absolute path ของ directory ปัจจุบัน
    publicPath: '/',  // serve at root in webpack dev server
  },
  module: {
	rules:[
	 {
   test: /\.(js|jsx)$/,
   exclude: /(node_modules|bower_components)/,
	 use:[
	   {
		 loader: 'babel-loader',
		 options:{
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins:[
            ],
         }  
			}
		 ]
	  }
	 ]
  },
  devServer:{
      port:8080,
      inline:true, // add code before => entry

  }
}