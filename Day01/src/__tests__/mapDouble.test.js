import {map, double} from '../mapDouble.js';

it('should return doubled item for an array of integers', () => {
  expect(map([1, 2, 3], double)).toEqual([2, 4, 6]);
});

it('should return doubled item for an array of integers', () => {
  expect(map([-10, 2, 3], double)).toEqual([-20, 4, 6]);
});
