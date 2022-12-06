const sass = require('rollup-plugin-sass');
const autoprefixer = require('autoprefixer');


module.exports = {
  rollup(config, options) {
    config.plugins.push(
      sass({
        plugins: [
          autoprefixer(),
        ],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    );

    return config;

  }
}