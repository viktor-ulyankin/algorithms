const linearSearch = require('./linear');

describe.each([

  [[0, 1, 2, 3], 2, 2],
  [[3, 2, 1, 0], 2, 1],
  [[3, 2, 1, 0], 0, 3],
  [[3, 2, -1, 1, 0], 1, 3],
  [[0, 1000000000, 2000000000, 2, 3000000000], 2, 3],
  [Array(1000000).fill(0).map((item, i, arr) => arr.length - i), 450002, 549998],
  [[3, 2, 1, 0], 100, -1],
  [[], 1, -1],
  [[''], 1, -1],
  [['a', 'bb', 'ccc', 'dddd'], 'dddd', 3],

])('Test linearSearch() [%#]', (array, search, expected) => {
  test('Should return correct value', () => {
    expect(linearSearch(array, search)).toBe(expected);
  });
});