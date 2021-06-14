function bfs(data, targetKey, thisKey = Object.keys(data)[0]) {
  const queueKey = [];

  queueKey.push(thisKey);

  while (queueKey.length > 0) {
    const key = queueKey.shift();

    if (key === targetKey) {
      return true;
    }

    if (typeof data[key] !== 'undefined' && !data[key].visited) {
      const leftKey = data[key].left;
      const rightKey = data[key].right;

      queueKey.push(leftKey);
      queueKey.push(rightKey);
      data[key].visited = true;
    }
  }

  return false;
}

module.exports = bfs;