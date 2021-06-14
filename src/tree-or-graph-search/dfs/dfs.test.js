const dfs = require('./dfs');

describe.each([

  // [{
  //   'A': { 'left': 'B', 'right': 'C' },
  //   'B': { 'left': 'C', 'right': 'D' },
  //   'C': { 'left': 'A', 'right': 'D' },
  //   'D': { 'left': 'B', 'right': 'C' },
  // }, 'A', true],
  // [{
  //   'A': { 'left': 'B', 'right': 'C' },
  //   'B': { 'left': 'C', 'right': 'D' },
  //   'C': { 'left': 'A', 'right': 'D' },
  //   'D': { 'left': 'B', 'right': 'C' },
  // }, 'C', true],
  // [{
  //   'A': { 'left': 'B', 'right': 'C' },
  //   'B': { 'left': 'C', 'right': 'D' },
  //   'C': { 'left': 'A', 'right': 'D' },
  //   'D': { 'left': 'B', 'right': 'C' },
  // }, 'D', true],
  // [{
  //   'A': { 'left': 'B', 'right': 'C' },
  //   'B': { 'left': 'C', 'right': 'D' },
  //   'C': { 'left': 'A', 'right': 'D' },
  //   'D': { 'left': 'B', 'right': 'C' },
  // }, 'Z', false],
  [{
    'A': { 'left': 'A', 'right': 'B' },
    'B': { 'left': 'C', 'right': 'D' },
    'C': { 'left': 'E', 'right': 'F' },
    'D': { 'left': 'G', 'right': 'H' },
  }, 'A', true],
  [{
    'A': { 'left': 'A', 'right': 'B' },
    'B': { 'left': 'C', 'right': 'D' },
    'C': { 'left': 'E', 'right': 'F' },
    'D': { 'left': 'G', 'right': 'H' },
  }, 'C', true],
  [{
    'A': { 'left': 'A', 'right': 'B' },
    'B': { 'left': 'C', 'right': 'D' },
    'C': { 'left': 'E', 'right': 'F' },
    'D': { 'left': 'G', 'right': 'H' },
  }, 'H', true],
  [{
    'A': { 'left': 'A', 'right': 'B' },
    'B': { 'left': 'C', 'right': 'D' },
    'C': { 'left': 'E', 'right': 'F' },
    'D': { 'left': 'G', 'right': 'H' },
  }, 'Z', false],

])('Test dfs() [%#]', (data, target, expected) => {
  test('Should return correct value', () => {
    expect(dfs(data, target)).toBe(expected);
  });
});