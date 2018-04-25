import {compareObjects, compareArrays} from '../compareObjects';

it('should consider empty objects to be equal', () => {
  let result = compareObjects({}, {});
  expect(result).toEqual(true);
});

it('should consider objects to be equal', () => {
  let result = compareObjects({one: 1, two: 2}, {two: 2, one: 1});
  expect(result).toEqual(true);
});

it('should consider undefined object to be unequal', () => {
  let result = compareObjects({one: 1, two: undefined}, {two: 2, one: 1});
  expect(result).toEqual(false);
});

it('should consider empty arrays to be equal', () => {
  let result = compareArrays([], []);
  expect(result).toEqual(true);
});
