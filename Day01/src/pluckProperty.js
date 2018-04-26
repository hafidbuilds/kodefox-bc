/*
given an array of objects,
pluck a specific property from each
*/

// @flow

type ArrOfObjects = [
  {[key: string]: mixed}
]

function pluck(array: ArrOfObjects, propName: string): Array<mixed> {
  let newArr = [];
  for (let item of array) {
    if (item.hasOwnProperty(propName)) {
      newArr.push(item[propName]);
    }
  }
  return newArr;
}

export default pluck;
