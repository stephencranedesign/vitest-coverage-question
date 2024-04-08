const {run} = require('#src/mocha.cjs');
const {equal} = require('node:assert');

it('run - false', () => {
    equal(run(false), 0);
});

it('run - true', () => {
    equal(run(true), 1);
});