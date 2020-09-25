// eslint-disable-next-line global-require,import/no-dynamic-require
const use = pkg => require(pkg).default;

module.exports = () => ({
    plugins: [
        [use('@babel/plugin-proposal-class-properties'), { loose: true }],
        [use('@babel/plugin-transform-runtime')],
        [use('@babel/plugin-proposal-export-default-from')],
        [use('@babel/plugin-syntax-dynamic-import')],
        [use('@babel/plugin-proposal-optional-chaining')],
        [use('@babel/plugin-transform-regenerator'), { async: false }]
    ],
    env: {
        production: {
            presets: [['babel-preset-minify', { removeConsole: true, removeDebugger: true }]]
        },
        test: {
            presets: [['@babel/preset-env', { targets: { node: 'current' }}]],
            plugins: ['transform-es2015-modules-commonjs']
        }
    }
});
