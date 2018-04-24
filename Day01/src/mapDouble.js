/*
given an array of numbers,
return a new array in which each number is doubled
*/

function map(array, instruction) {
  let newArr = [];
  for (let item of array) {
    newArr.push(instruction(item));
  }
  return newArr;
}

const double = (item) => item * 2;

export {map, double};
