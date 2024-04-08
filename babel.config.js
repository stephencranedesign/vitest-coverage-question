console.log('babel.cjs');

module.exports = {
    presets: [
        '@babel/preset-typescript',
        ['@babel/env', {
            shippedProposals: true,
            exclude: ['proposal-dynamic-import']
        }],
        // ['@babel/preset-react', {
        //     'runtime': 'automatic'
        // }]
    ]
};