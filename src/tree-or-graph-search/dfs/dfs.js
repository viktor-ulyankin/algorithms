function dfs(data, targetKey, thisKey = Object.keys(data)[0]) {
  if (thisKey === targetKey) {
    return true;
  }

  if (typeof data[thisKey] === 'undefined' || data[thisKey].visited) {
    return false;
  }

  data[thisKey].visited = true;

  const isReachedLeft = dfs(data, targetKey, data[thisKey].left);
  const isReachedRight = dfs(data, targetKey, data[thisKey].right);

  return isReachedLeft || isReachedRight;
}

module.exports = dfs;