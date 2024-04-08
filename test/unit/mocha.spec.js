import {run} from '#src/mocha.js';
import {equal} from 'node:assert';

console.log('hi from test');

it('run - false', () => {
    equal(run(false), 0);
});

// it('run - true', () => {
//     equal(run(true), 1);
// });