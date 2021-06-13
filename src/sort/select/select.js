function selectSort(array) {
  if (array.length > 1) {
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;

      // Search min
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }
  }

  return array;
}

module.exports = selectSort;