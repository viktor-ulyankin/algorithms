const bfs = require('./bfs');

describe.each([

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

])('Test bfs() [%#]', (data, target, expected) => {
  test('Should return correct value', () => {
    expect(bfs(data, target)).toBe(expected);
  });
});