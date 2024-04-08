const nycrc = {
    reporter: ['json'],
    'check-coverage': false,
    cache: false,
    sourceMap: true,
    instrument: true,
    all: false
};

if (process.env.REPORT === 'true') {
   nycrc.lines = 100;
   nycrc.statements = 100;
   nycrc.functions = 100;
   nycrc.branches = 100;
   
   nycrc.reporter = ['lcov', 'text'];
}

module.exports = nycrc;