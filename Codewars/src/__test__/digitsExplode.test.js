/* eslint-disable */
import digitsExplode from '../digitsExplode.js'

it('should return a string where each digit is repeated a number of times equals to its value.', () => {
  const result = digitsExplode('241')
  expect(result).toEqual('2244441')
})

it('should return a string where each digit is repeated a number of times equals to its value.', () => {
  const result = digitsExplode('23')
  expect(result).toEqual('22333')
})

it('should return a string where each digit is repeated a number of times equals to its value.', () => {
  const result = digitsExplode('34')
  expect(result).toEqual('3334444')
})