/* eslint-disable */
import numberAverage from '../numberAverage.js'

it('should return a value of average list of number', () => {
  const result = numberAverage([12,12,12])
  expect(result).toEqual(12)
})

it('should return a a value of average list of number', () => {
  const result = numberAverage([2])
  expect(result).toEqual(2)
})