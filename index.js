// eslint-disable-next-line global-require,import/no-dynamic-require
const use = pkg => require(pkg).default;

module.exports = () => ({
    presets: [
        [use('@babel/preset-env'), { modules: false, useBuiltIns: 'usage', corejs: 3 }],
    ],

    plugins: [
        [use('@babel/plugin-proposal-class-properties'), { loose: true }],
        [use('@babel/plugin-transform-runtime')],
        [use('@babel/plugin-proposal-export-default-from')],
        [use('@babel/plugin-syntax-dynamic-import')],
        [use('@babel/plugin-proposal-optional-chaining')],
        [use('@babel/plugin-transform-regenerator'), { async: false }]
    ],
    env: {
        test: {
            presets: [
                [use('@babel/preset-env'), { modules: 'commonjs', targets: { node: 'current', esmodules: false } }]
            ]
        },
        development: {
            plugins: []
        },
        production: {
            presets: [use('minify'), { removeConsole: true, removeDebugger: true }]
        }
    }
});
