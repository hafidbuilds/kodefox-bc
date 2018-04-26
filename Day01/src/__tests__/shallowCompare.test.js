import shallowCompare from '../shallowCompare.js';

it('should return true', () => {
  expect(shallowCompare([1, 2, 3], [1, 2, 3])).toEqual(true);
});

it('should return false', () => {
  expect(shallowCompare([1, 2, 3], [6, 2])).toEqual(false);
});

it('should return false', () => {
  expect(shallowCompare([1, 2, 3], [1, 2, 3, 4])).toEqual(false);
});

it('should return false', () => {
  expect(shallowCompare([{name: 'Hafidz'}], [{name: 'Hafidz'})).toEqual(true);
});