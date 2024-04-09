import {run} from '#src/vitest.js';
import {equal} from 'node:assert';

// it('run - false', () => {
//     equal(run(false), 0);
// });

it('run - true', () => {
    equal(run(true), 1);
});