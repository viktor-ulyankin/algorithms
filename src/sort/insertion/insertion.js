function insertionSort(array) {
  if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
      let targetIndex = 0;

      for (let j = i - 1; j >= 0; j--) {
        if (array[j] <= array[i]) {
          targetIndex = j + 1;
          break;
        }
      }

      array.splice(targetIndex, 0, ...array.splice(i, 1));
    }
  }

  return array;
}

module.exports = insertionSort;