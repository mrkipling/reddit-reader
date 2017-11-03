const path = require('path');

const paths = require('./paths');

const breakpoints = {
  s: '640px',
  l: '935px',
};

module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('autoprefixer'),
    require('postcss-easy-media-query')({ breakpoints }),
  ],
};
