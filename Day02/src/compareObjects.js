
/* eslint-disable */
// @flow

type AnObject = {
  [key: string]: mixed
}

function compareObjects(obj1: AnObject, obj2: AnObject): boolean {
  let prop1: Array<string> = Object.keys(obj1)
  let prop2: Array<string> = Object.keys(obj2)

  if (prop1.length !== prop2.length) {
    return false
  }
  
  for (let key of prop1) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  for (let key of prop2) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true
}

export default compareObjects
