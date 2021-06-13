function radixSort(array) {
  if (array.length > 1) {
    const position = Array(10).fill(0).map(() => []);
    let radix = 1;
    const maxValue = Math.max(...array);

    while (maxValue - radix >= 0) {
      let positionFlatIndex = 0;

      for (let i = 0; i < array.length; i++) {
        position[Math.floor(array[i] / radix) % 10].push(array[i]);
      }

      for (let i = 0; i < position.length; i++) {
        for (let j = 0; j < position[i].length; j++) {
          array[positionFlatIndex] = position[i][j];
          positionFlatIndex++;
        }

        position[i] = [];
      }

      radix *= 10;
    }
  }

  return array;
}

module.exports = radixSort;