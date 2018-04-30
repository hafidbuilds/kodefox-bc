// @flow

function filterArray<T>(array: Array<T>, filter: T) {
  let filteredArray = [];
  for (let el of array) {
    if (el === filter) {
      filteredArray.push(el);
    }
  }
  return filteredArray;
}

export default filterArray;