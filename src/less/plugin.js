const fs = require('fs');
const path = require('path');

function base64Encode(file) {
  // read binary data
  const bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return Buffer.from(bitmap).toString('base64');
}

module.exports = {
  install(less, pluginManager, functions) {
    functions.add('techno4_coreIconsFont', () => {
      const possiblePaths = [
        path.resolve(process.cwd(), 'packages/techno4-framework2-core/src/icons/font/techno4-core-icons.woff'),
        path.resolve(process.cwd(), 'src/icons/font/techno4-core-icons.woff'),
        path.resolve(process.cwd(), 'src/core/icons/font/techno4-core-icons.woff'),
      ];
      const fontPath = possiblePaths.find((p) => fs.existsSync(p));
      if (!fontPath) {
        throw new Error('techno4-core-icons.woff not found in: ' + possiblePaths.join('; '));
      }
      return base64Encode(fontPath);
    });
  },
};
