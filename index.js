/* eslint-disable global-require */

module.exports = function () {
    return {

        presets: [
            [
                require('@babel/preset-env').default,
                {
                    modules: false,
                    useBuiltIns: 'usage',
                    corejs: 3
                },
            ],
        ],

        plugins: [
            [require('@babel/plugin-proposal-class-properties').default, { loose: true }],
            [
                require('@babel/plugin-transform-runtime').default,
                {
                    corejs: false,
                    helpers: false,
                    regenerator: true,
                    useESModules: false,
                },
            ],
            require('@babel/plugin-proposal-export-default-from').default,
            require('@babel/plugin-syntax-dynamic-import').default,
            require('@babel/plugin-proposal-optional-chaining').default,
            [require('@babel/plugin-transform-regenerator').default, { async: false }]
        ],
    };
};
