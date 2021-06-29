/**
 * MLH INIT 2021
 * Day 2 Challenge - Write Code to Sort a List
 * 
 * Author: Pedro Teixeira
 * Description:
 * Merge sort using JavaScript for algorithms for the first time. 
 * No googling of sorting, just Javascript.
 */

function merge(left, right) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    return result;
}

function sort(list) {
    let n = list.length;
    if (n == 1) { return list; }
    let mid = Math.floor(n / 2);
    let left = list.slice(0, mid);
    let right = list.slice(mid, n);
    return merge(sort(left), sort(right));
}

module.exports = sort;