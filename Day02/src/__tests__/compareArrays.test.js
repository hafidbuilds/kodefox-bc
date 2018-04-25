/* eslint-disable */
import compareArrays from '../compareCombine,js';

it('should consider empty arrays to be equal', () => {
  let result = compareArrays([], []);
  expect(result).toEqual(true);
});

it('should consider arrays to be equal', () => {
  let result = compareArrays(
    [1, 2, 3], [1, 2, 3]
  );
  expect(result).toEqual(true);
});

it('should consider unordered arrays to be unequal', () => {
  let result = compareArrays(
    [3, 2, 1], [1, 2, 3]
  );
  expect(result).toEqual(false);
});
