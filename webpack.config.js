module.exports = {
  entry: {
    index: "./src/index.js",
    photos: "./src/photos.js",
    quotes: "./src/quotes.js"
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  }
};
