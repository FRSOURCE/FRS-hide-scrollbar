const FastGlob   = require('fast-glob');
const {execSync} = require('child_process');

const files = FastGlob.sync(['src/scripts/**/*.js', '!**/*.spec.js']);

execSync(
  `uglifyjs ${
    files.map(v => '../../' + v)
         .join(' ')
    } -o ../../dist/FRS-hide-scrollbar.vanilla.js -c -m --source-map --wrap=FRSHideScrollbar`,
  {
    stdio: [0, 1, 2],
    cwd  : './node_modules/.bin'
  }
);