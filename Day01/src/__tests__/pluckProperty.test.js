import pluck from '../pluckProperty.js';

it('should pluck value', () => {
  const profiles = [
    {address: 'Jakarta'},
    {name: 'Hafidz', age: 22},
    {name: 'Ilham', age: 50},
    {name: 'Aji', age: 10},
  ];
  expect(pluck(profiles, 'name')).toEqual(['Hafidz', 'Ilham', 'Aji']);
});

it('should handle non existing keys ', () => {
  const profiles = [
    {address: 'Jakarta'},
    {name: 'Hafidz', age: 22},
    {name: 'Ilham', age: 50},
    {name: 'Aji', age: 10},
  ];
  expect(pluck(profiles, 'names')).toEqual([]);
});

it('should return empty array for an empty array ', () => {
  expect(pluck([], 'name')).toEqual([]);
});

it('should pluck value', () => {
  const profiles = [
    {address: 'Jakarta'},
    {name: 'Hafidz', age: 22},
    {name: 'Ilham', age: 50},
    {name: 'Aji', age: 10},
  ];
  expect(pluck(profiles, 'address')).toEqual(['Jakarta']);
});

it('should pluck value', () => {
  const profiles = [
    {address: 'Jakarta'},
    {name: 'Hafidz', age: 22},
    {name: 'Ilham', age: 50},
    {name: 'Aji', age: 10},
  ];
  expect(pluck(profiles, 'age')).toEqual([22, 50, 10]);
});
