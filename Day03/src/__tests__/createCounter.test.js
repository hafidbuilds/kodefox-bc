/* eslint-disable */

import createCounter from '../createCounter.js'

it('should start from zero', () => {
  let counter = createCounter()
  expect(counter.getCount()).toEqual(0)
})

it('should increment', () => {
  let counter = createCounter()
  counter.increment()
  counter.increment()
  counter.increment()
  expect(counter.getCount()).toEqual(3)
})

it('should deccrement', () => {
  let counter = createCounter()
  counter.decrement()
  expect(counter.getCount()).toEqual(-1)
})
