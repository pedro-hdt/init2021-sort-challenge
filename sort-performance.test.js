/**
 * MLH INIT 2021
 * Day 2 Challenge - Write Code to Sort a List
 * 
 * Author: Pedro Teixeira
 * Performance test
 * My code seems to be about 3x slower than Array.prototype.sort()
 * ATTENTION: non-deterministic
 */

const sort = require('./sort.js');
const crypto = require('crypto');
const { performance } = require('perf_hooks');

test('large list of base64 chars can be sorted in up to 5 seconds', () => {
    // random generation of array: non-deterministic results
    const list = Array.from(crypto.randomBytes(2**22).toString('base64'));
    const start = performance.now();
    sort(list); 
    const end = performance.now();
    expect(end - start).toBeLessThanOrEqual(5000);
});
