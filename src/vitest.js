import {run as sharedRun} from './shared';

export function run(bool) {
    console.log('from vitest');

    return sharedRun(bool);
}