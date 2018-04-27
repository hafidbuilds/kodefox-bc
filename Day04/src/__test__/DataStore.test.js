/* eslint-disable */
import DataStore from '../DataStore'

it('should add data to the state', () => {
  const dataStore = new DataStore()
  dataStore.set('Handphone', 90)
  expect(dataStore.get('Handphone')).toEqual(90)
})

it('should return undefined data doesnt exist', () => {
  const dataStore = new DataStore()
  dataStore.set('Handphone', 90)
  expect(dataStore.get('slkdmov')).toEqual(undefined)
})

it('should loop data from the state', () => {
  const dataStore = new DataStore()
  dataStore.set('Handphone', 90)
  dataStore.set('Computer', 10)
  dataStore.set('Laptop', 5)
  let fakeState = []
  // push from state to fakeState
  dataStore.forEach((itemKey, price) => {
    fakeState.push([itemKey, price])
  })
  expect(fakeState).toEqual([['Handphone', 90], ['Computer', 10], ['Laptop', 5]])
})