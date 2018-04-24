import shallowCompare from '../shallowCompare.js';

it('should return true', () => {
  expect(shallowCompare([1, 2, 3], [1, 2, 3])).toBe(true);
});

it('should return false', () => {
  expect(shallowCompare([1, 2, 3], [6, 2])).toBe(false);
});

it('should return false', () => {
  expect(shallowCompare([1, 2, 3], [1, 2, 3, 4])).toBe(false);
});
