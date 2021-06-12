function binarySearch(array, search) {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);

    if (array[midIndex] === search) {
      return midIndex;
    }

    if (array[midIndex] > search) {
      endIndex = midIndex - 1;
    }

    if (array[midIndex] < search) {
      startIndex = midIndex + 1;
    }
  }

  return -1;
}

module.exports = binarySearch;