/*
given an array of objects,
pluck a specific property from each
*/

function pluck(array, propName) {
  let newArr = [];
  for (let item of array) {
    if (item.hasOwnProperty(propName)) {
      newArr.push(item[propName]);
    }
  }
  return newArr;
}

export default pluck;
