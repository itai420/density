const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    authentication: '/static/apps/Authentication/Authentication.js',
    home: '/static/apps/Home/Home.js',
    myTestimonies: '/static/apps/myTestimonies/myTestimonies.js',
    pendingTestimonies: '/static/apps/pendingTestimonies/pendingTestimonies.js',
    testimonies: '/static/apps/testimonies/testimonies.js',
  },
  // home:'./webpack/home',
  // myTestimonies:'./webpack/myTestimonies',
  // pendingTestimonies:'./webpack/pendingTestimonies',
  // tesitmonies:'./webpack/tesitmonies',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'static/public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|woff(2)?|ttf|eot|svg)$/i,
        use: ['file-loader'],
      }
      // ,
      // {
      //   test:/\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,loader:"url-loader?limit=10000&mimetype=application/font-woff"},
      //   {test:/\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,loader:"file-loader"}

    ]
  },
  devtool: 'source-map'
}