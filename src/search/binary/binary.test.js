const binarySearch = require('./binary');

describe.each([

  [[0, 1, 2, 3], 2, 2],
  [[0, 1, 2, 3], 0, 0],
  [[0, 1, 2, 3], 3, 3],
  [[-1, 0, 1, 2, 3], 1, 2],
  [[10, 20, 2000000, 30000000000, 40000000000, 50000000000, 60000000000, 70000000000], 2000000, 2],
  [Array(1000000).fill(0).map((item, i) => i), 450000, 450000],
  [[0, 1, 2, 3], 100, -1],
  [[], 1, -1],
  [[''], 1, -1],

])('Test binarySearch() [%#]', (array, search, expected) => {
  test('Should return correct value', () => {
    expect(binarySearch(array, search)).toBe(expected);
  });
});