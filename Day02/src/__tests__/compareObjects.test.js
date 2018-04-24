import compareObjects from '../compareObjects.js'

it('should consider empty objects to be equal', () => {
  let result = compareObjects({}, {})
  expect(result).toEqual(true)
})

it('should consider object entity to be equal', () => {
  const person1 = {
    name: 'Hafidz',
    age: 22
  }
  const person2 = {
    name: 'Hafidz',
    age: 22
  }
  let result = compareObjects(person1, person2)
  expect(result).toEqual(true)
})

it('should consider object of unordered key to be equal', () => {
  const person1 = {
    age: 22,
    name: 'Hafidz'
  }
  const person2 = {
    name: 'Hafidz',
    age: 22
  }
  let result = compareObjects(person1, person2)
  expect(result).toEqual(true)
})

it('should consider object entity to be NOT equal', () => {
  const person1 = {
    age: 50,
    name: 'Hafidz'
  }
  const person2 = {
    name: 'Hafidz',
    age: 22
  }
  let result = compareObjects(person1, person2)
  expect(result).toEqual(true)
})
