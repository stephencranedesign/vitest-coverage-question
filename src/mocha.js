import {run as sharedRun} from './shared';

export function run(bool) {
    console.log('from mocha');

    return sharedRun(bool);
}
