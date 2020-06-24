module.exports = {
    plugins: [
      require('autoprefixer'),
      require('cssnano'),
      require('postcss-nested'),
      require('postcss-media-minmax'),
      require('postcss-import')
    ]
  }