console.log('babel hook');

require('@babel/register')({
    extensions: ['.js', '.cjs', '.mjs', '.ts', '.mts'],
    cache: false
});