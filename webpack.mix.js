
const mix = require('laravel-mix');

mix.js('src/app.js','dist');
mix.css('src/app.css', 'dist');
mix.setPublicPath('dist');

/*
const { assertSupportedNodeVersion } = require('../src/Engine');

module.exports = async () => {
    // @ts-ignore
    process.noDeprecation = true;

    assertSupportedNodeVersion();

    const mix = require('../src/Mix').primary;

    require(mix.paths.mix());

    await mix.installDependencies();
    await mix.init();

    return mix.build();
};
*/
