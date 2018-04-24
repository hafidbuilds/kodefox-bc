// @flow

function printString(s: string) {
  console.log(s);
}

function print(value: mixed) {
  if (value == null) {
    printString('null');
  } else
  if (typeof value === 'string') {
    printString(value);
  } else
  if (typeof value === 'number' || typeof value === 'boolean') {
    printString(value.toString());
  } else
  if (Array.isArray(value)) {
    let array = value;
    for (let item of array) {
      print(item);
    }
    return;
  } else
  if (typeof value === 'object') {
    let object = value;
    for (let key of Object.keys(object)) {
      printString(key);
      print(object[key]);
    }
  }
}

print([{name: 'hafidz', age: 22}, {name: 'Zoid'}]);
