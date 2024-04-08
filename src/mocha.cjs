const sharedRun = require('./shared.cjs').run;

function run(bool) {
    console.log('from mocha');

    return sharedRun(bool);
}

module.exports = {run};