/**
 * MLH INIT 2021
 * Day 2 Challenge - Write Code to Sort a List
 * 
 * Author: Pedro Teixeira
 * Jest tests for the sort function
 */

const sort = require('./sort.js');


describe("Test sorting positive integers", () => {

    const sortedList = [1, 2, 3, 4, 5];

	it("tests sorting an already sorted list", () => {
		expect(sort(sortedList)).toEqual(sortedList);
	});


	it("tests sorting a reversed list", () => {
		expect(sort([...sortedList].reverse())).toEqual(sortedList);
	});

    it("tests sorting a randomly ordered list", () => {
        const list = [1, 3, 2, 5, 4];
		expect(sort(list)).toEqual(sortedList);
	});

});
