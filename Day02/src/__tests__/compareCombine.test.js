import compareCombine from '../compareCombine.js';

it('should consider empty objects to be equal', () => {
  let result = compareCombine({}, {});
  expect(result).toEqual(true);
});

it('should consider objects to be equal', () => {
  let result = compareCombine({one: 1, two: 2}, {two: 2, one: 1});
  expect(result).toEqual(true);
});

it('should consider undefined object to be unequal', () => {
  let result = compareCombine({one: 1, two: undefined}, {two: 2, one: 1});
  expect(result).toEqual(false);
});

it('should consider empty arrays to be equal', () => {
  let result = compareCombine({city: ['jkt', 'tng']}, {city: ['tng', 'jkt']});
  expect(result).toEqual(false);
});

it('should consider empty arrays to be equal', () => {
  let result = compareCombine([], []);
  expect(result).toEqual(true);
});

it('should consider empty arrays to be equal', () => {
  let result = compareCombine([{name: 'Hafidz'}, {nationality: 'INA'}], [{nationality: 'INA'}, {name: 'Hafidz'}]);
  expect(result).toEqual(false);
});

it('should consider empty arrays to be equal', () => {
  let result = compareCombine('string', 'string');
  expect(result).toEqual(false);
});

it('should consider empty arrays to be equal', () => {
  let result = compareCombine(200, true);
  expect(result).toEqual(false);
});