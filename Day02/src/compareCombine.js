// @flow
/* eslint-disable */

function combineCompare(thing1: mixed, thing2: mixed): boolean {
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
  if (isEqualArray(thing1, thing2)) {
    return compareArrays(thing1, thing2)
  }
  // checking Objects cases (Array vs Obj)
  if (isEqualObjects(thing1, thing2)) {
    return compareObjects(thing1, thing2)
  }
}

function isEqualArray(arr1: Array<mixed>, arr2: Array<mixed>): boolean {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    return true
  } else {
    return false
  }
}

function compareArrays(arr1, arr2): boolean {
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

function isEqualObjects(obj1: Object, obj2: Object): boolean {
  // check if obj1 && obj2 is an Object
  if (typeof obj1 === 'object' && !Array.isArray(obj1) && obj1 != null) {
    return compareObjects(obj1, obj2)
  } else {
    return false
  }
  if (typeof obj1 === 'object' && !Array.isArray(obj1) && obj1 != null) {
    return compareObjects(obj1, obj2)
  } else {
    return false
  }
}

function compareObjects(obj1, obj2): boolean {
  let prop1 = Object.keys(obj1)
  let prop2 = Object.keys(obj2)

  if (prop1.length !== prop2.length) {
    return false
  }
  for (let prop of prop1) {
    if (prop1[prop] !== prop2[prop]) {
      return false
    }
  }
  for (let prop of prop2) {
    if (prop1[prop] !== prop2[prop]) {
      return false
    }
  }
  return true
}
