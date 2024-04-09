console.log('babel.cjs');

module.exports = {
    env: {
        test: {
            plugins: [ 'istanbul' ]
        }
    },
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