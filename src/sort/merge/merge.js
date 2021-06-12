function merge(left, right) {
  const arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const half = Math.floor(array.length / 2);
  const left = array.slice(0, half);
  const right = array.slice(half);

  return merge(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;