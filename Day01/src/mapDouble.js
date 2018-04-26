/*
given an array of numbers,
return a new array in which each number is doubled
*/

// @flow

type DoubleFunc = (item: number) => number

function map(array: Array<number>, instruction: DoubleFunc ): Array<number> {
  let newArr = [];
  for (let item of array) {
    newArr.push(instruction(item));
  }
  return newArr;
}

const double = (item: number): number => item * 2;

export {map, double};
