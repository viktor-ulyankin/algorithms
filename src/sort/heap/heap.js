function heap(array, n, i) {
  let largestIndex = i;
  const leftIndex = 2 * i + 1;
  const rightIndex = 2 * i + 2;

  if (leftIndex < n && array[leftIndex] > array[largestIndex]) {
    largestIndex = leftIndex;
  }

  if (rightIndex < n && array[rightIndex] > array[largestIndex]) {
    largestIndex = rightIndex;
  }

  if (largestIndex !== i) {
    [array[i], array[largestIndex]] = [array[largestIndex], array[i]];
    heap(array, n, largestIndex);
  }
}

function heapSort(array) {
  for (let i = array.length / 2 - 1; i >= 0; i--) {
    heap(array, array.length, i);
  }

  for (let i = array.length - 1; i >= 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    heap(array, i, 0);
  }

  return array;
}

module.exports = heapSort;