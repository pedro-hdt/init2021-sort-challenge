/**
 * MLH INIT 2021
 * Day 2 Challenge - Write Code to Sort a List
 * 
 * Author: Pedro Teixeira
 * Jest tests for the sort function
 */

const sort = require('./sort.js');


describe("Test sorting strings", () => {

    const sortedList = ['a', 'b', 'c', 'x', 'y', 'z'];

	it("tests sorting an already sorted list", () => {
		expect(sort(sortedList)).toEqual(sortedList);
	});

    it("tests sorting a reversed list", () => {
		expect(sort([...sortedList].reverse())).toEqual(sortedList);
	});

    it("tests sorting a randomly ordered list", () => {
        const list = ['x', 'a', 'b', 'c', 'z', 'y'];
		expect(sort(list)).toEqual(sortedList);
	});

});
