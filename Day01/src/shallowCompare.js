/*
compare two values, shallow comparing content in arrays
*/

function shallowCompare(array1, array2) {
  let result = true;
  if (array1.length !== array2.length) {
    result = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        result = false;
      }
    }
  }
  return result;
}

export default shallowCompare;
