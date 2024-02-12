/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-console: "off" */
/* eslint global-require: "off" */
/* eslint no-param-reassign: ["off"] */

const exec = require('exec-sh');
const bannerReact = require('./banners/vue.js');
const getOutput = require('./get-output.js');
const fs = require('./utils/fs-extra.js');
const transformVueComponent = require('./transform-vue-component.js');

// Build Vue
async function buildVue(cb) {
  const buildPath = getOutput();

  const files = fs.readdirSync('src/vue/components').filter((file) => file.indexOf('.vue') > 0);
  const componentImports = [];
  const componentExports = [];

  const componentsRegistrations = [];

  files.forEach((fileName) => {
    const componentName = fileName
      .replace('.vue', '')
      .split('-')
      .map((word) => word[0].toUpperCase() + word.substr(1))
      .join('');
    const fileBase = fileName.replace('.vue', '');
    componentImports.push(`import t4${componentName} from './components/${fileBase}.js';`);
    componentExports.push(`t4${componentName}`);
    componentsRegistrations.push(`app.component('t4-${fileBase}', t4${componentName})`);
    transformVueComponent(
      `src/vue/components/${fileName}`,
      `src/vue-temp/${fileName.replace('.vue', '.js')}`,
    );
  });

  const pluginContent = fs
    .readFileSync('src/vue/techno4-vue.js', 'utf-8')
    .replace('// IMPORT_COMPONENTS', componentImports.join('\n'))
    .replace('// EXPORT_COMPONENTS', `export { ${componentExports.join(', ')} }`);

  fs.writeFileSync(`${buildPath}/vue/techno4-vue.js`, pluginContent);

  await exec.promise(
    `MODULES=esm npx babel --config-file ./babel-vue.config.js src/vue --out-dir ${buildPath}/vue --ignore "src/vue/techno4-vue.js","*.ts","*.jsx",*jsx --extensions .js`,
  );

  await exec.promise(
    `MODULES=esm npx babel --config-file ./babel-vue.config.js src/vue-temp --out-dir ${buildPath}/vue/components --ignore "src/vue/techno4-vue.js","*.ts","*.jsx",*jsx`,
  );

  const esmContent = fs.readFileSync(`${buildPath}/vue/techno4-vue.js`, 'utf-8');

  fs.writeFileSync(`${buildPath}/vue/techno4-vue.js`, `${bannerReact.trim()}\n${esmContent}`);

  // Bundle
  const bundleContent = `
function registerComponents(app) {
  ${componentsRegistrations.join(';\n  ')}
}
export { registerComponents }
      `.trim();
  fs.writeFileSync(
    `${buildPath}/vue/techno4-vue-bundle.js`,
    `${bannerReact.trim()}\n${esmContent}\n${bundleContent}`,
  );

  if (cb) cb();
}

module.exports = buildVue;
