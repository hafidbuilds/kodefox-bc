/* eslint-disable */
import isAnObjects from '../compareCombine.js'

it('should return true from an Objects', () => {
  expect(isAnObjects({}, {}).toEqual(true))
})

it('should return true from an String', () => {
  expect(iisAnObjects('string', {}).toEqual(false))
})

it('should return true from an Integers', () => {
  expect(isAnObjects(3434, {}).toEqual(false))
})

it('should return true from an Boolean', () => {
  expect(isAnObjects({}, false).toEqual(false))
})
