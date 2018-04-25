/* eslint-disable */
import isAnArrays from '../compareCombine.js'

it('should return true from an Array', () => {
  expect(isAnArrays([], []).toEqual(true))
})

it('should return true from an Array', () => {
  expect(isAnArrays([1, 2, 3], [3, 2, 1]).toEqual(true))
})

it('should return true from an Array', () => {
  expect(isAnArrays([{}], []).toEqual(true))
})

it('should return true from an Array', () => {
  expect(isAnArrays({}, []).toEqual(false))
})
