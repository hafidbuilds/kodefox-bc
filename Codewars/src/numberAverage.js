/* eslint-disable */
/*
Create a function that computes the average a List of Numbers:
getAverage([1, 5, 2, 9, -3]) => 2.8
*/

// @flow

const averageNumber = (arrOfInt: Array<number>): number => {
  let sum = 0
  const length = arrOfInt.length
  arrOfInt.forEach(integer => {
    sum += integer
  })
  return sum / length
}

export default averageNumber
