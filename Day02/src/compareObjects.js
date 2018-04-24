
/* eslint-disable */

function compareObjects(obj1, obj2) {
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

export default compareObjects
