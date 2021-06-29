/**
 * MLH INIT 2021
 * Day 2 Challenge - Write Code to Sort a List
 * 
 * Author: Pedro Teixeira
 * Jest tests for the sort function
 */

const sort = require('./sort.js');


describe("Test sorting all integers (positive and negative)", () => {

    const sortedList = [-5, -2, 0, 3, 4];

	it("tests sorting an already sorted list", () => {
		expect(sort(sortedList)).toEqual(sortedList);
	});


	it("tests sorting a reversed list", () => {
		expect(sort([...sortedList].reverse())).toEqual(sortedList);
	});

    it("tests sorting a randomly ordered list", () => {
        const list = [0, 4, -5, -2, 3];
		expect(sort(list)).toEqual(sortedList);
	});

});
