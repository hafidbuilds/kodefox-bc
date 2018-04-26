// @flow
/* eslint-disable */

function compareCombine(thing1: mixed, thing2: mixed): boolean {
  if (thing1 == null || thing2 == null) {
    return false
  }
  // checking all primitives cases
  if (
    typeof thing1 === 'number' || typeof thing1 === 'string' || typeof thing1 === 'boolean' &&
    typeof thing2 === 'number' || typeof thing2 === 'string' || typeof thing2 === 'boolean'
  ) {
    return false
  }
  // checking non-primitives cases (Array vs Array)
  if (Array.isArray(thing1) && Array.isArray(thing2)) {
    return compareArrays(thing1, thing2)
  }
  // checking Objects cases (Array vs Obj)
  if (
    typeof thing1 === 'object' && !Array.isArray(thing1) && thing1 != null 
    && 
    typeof thing2 === 'object' && !Array.isArray(thing2) && thing2 != null
  ) {
    return compareObjects(thing1, thing2)
  }
  return true
}

function compareArrays(arr1: Array<mixed>, arr2: Array<mixed>): boolean {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

type AnObject = {
  [key: string]: mixed
}

function compareObjects(obj1: AnObject, obj2: AnObject): boolean {
  let keys1: Array<string> = Object.keys(obj1)
  let keys2: Array<string> = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  } 
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  for (let key of keys2) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true
}


// Another approach but there is flow error msg i dont understand yet

// function isAnObjects(obj1: AnObject, obj2: AnObject): boolean {
//   // check if obj1 && obj2 is an Object
//   if (
//     typeof obj1 === 'object' && !Array.isArray(obj1) && obj1 != null 
//     && 
//     typeof obj2 === 'object' && !Array.isArray(obj2) && obj2 != null
//   ) {
//     return true
//   } else {
//     return false
//   }
// }

// function isAnArrays(arr1: Array<mixed>, arr2: Array<mixed>): boolean {
//   if (Array.isArray(arr1) && Array.isArray(arr2)) {
//     return true
//   } else {
//     return false
//   }
// }

export default compareCombine