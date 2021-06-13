const insertionSort = require('./insertion');

describe.each([

  [[0, 1, 2, 3], [0, 1, 2, 3]],
  [[3, 2, 1, 0], [0, 1, 2, 3]],
  [[11, 0, -1, -2, 3], [-2, -1, 0, 3, 11]],
  [[70000000000, 10, -70000000000, -50000000000], [-70000000000, -50000000000, 10, 70000000000]],
  [
    Array(100).fill(0).map((item, i, array) => array.length - i),
    Array(100).fill(0).map((item, i) => i + 1),
  ],
  [[], []],

])('Test insertionSort() [%#]', (array, expected) => {
  test('Should return correct value', () => {
    expect(insertionSort(array)).toEqual(expected);
  });
});