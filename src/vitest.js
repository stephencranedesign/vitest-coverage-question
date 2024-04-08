import {run as sharedRun} from './shared.cjs';

export function run(bool) {
    console.log('from vitest');

    return sharedRun(bool);
}