function sortArray(array) {
  const missingIndex = []
  const odd = []
  // Return a sorted array.
  let newArr = array
  for (let item of array) {
    if (item % 2 !== 0) {
      missingIndex.push(array.indexOf(item))
      odd.push(item)
    }
  }

  let sorted = odd.sort((a,b) => a-b)
  for (let i = 0; i < missingIndex.length; i++) {
    newArr[missingIndex[i]] = sorted[i]
  }
  return newArr
}

let a = sortArray([5, 3, 2, 8, 1, 4, 11, 11, 1, 111])
a