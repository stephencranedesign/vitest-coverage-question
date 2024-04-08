console.log('babel hook');

require('@babel/register')({
    extensions: ['.js', '.cjs', '.mjs', '.ts', '.mts'],
    ignore: [
        function (filepath) {
            console.log('ignore: ', filepath);
            return false;
        }
    ],
    cache: false
});