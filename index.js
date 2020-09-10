module.exports = function () {
    return {
        presets: [
            ['@babel/preset-env', { modules: false, useBuiltIns: 'usage', corejs: 3 }],
        ],

        plugins: [
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            ['@babel/plugin-transform-runtime'],
            ['@babel/plugin-proposal-export-default-from'],
            ['@babel/plugin-syntax-dynamic-import'],
            ['@babel/plugin-proposal-optional-chaining'],
            ['@babel/plugin-transform-regenerator', { async: false }]
        ],
        env: {
            test: {
                presets: [
                    ['@babel/preset-env', { modules: 'commonjs', targets: { node: 'current', esmodules: false } }]
                ]
            },
            development: {
                plugins: []
            },
            production: {
                presets: ['minify', { removeConsole: true, removeDebugger: true }]
            }
        }
    };
};
