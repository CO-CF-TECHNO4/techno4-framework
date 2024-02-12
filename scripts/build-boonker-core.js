const path = require('path');
const fs = require('./utils/fs-extra.js');

function buildKs(cb) {
  const env = process.env.NODE_ENV || 'development';
  let index = fs.readFileSync(path.resolve(__dirname, '../boonker/core/index.html'));
  if (env === 'development') {
    index = index
      .replace(
        '../../packages/core/techno4-bundle.min.css',
        '../../build/core/techno4-bundle.css',
      )
      .replace(
        '../../packages/core/techno4-bundle.min.js',
        '../../build/core/techno4-bundle.js',
      );
  } else {
    index = index
      .replace(
        '../../build/core/techno4-bundle.css',
        '../../packages/core/techno4-bundle.min.css',
      )
      .replace(
        '../../build/core/techno4-bundle.js',
        '../../packages/core/techno4-bundle.min.js',
      );
  }
  fs.writeFileSync(path.resolve(__dirname, '../boonker/core/index.html'), index);
  cb();
}

module.exports = buildKs;
