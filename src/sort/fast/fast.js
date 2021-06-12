const fastSort = (array) => {
  if (array.length > 1) {
    const pivot = array[Math.floor((array.length - 1) / 2)];
    const left = array.filter((item) => item < pivot);
    const right = array.filter((item) => item > pivot);

    return [...fastSort(left), pivot, ...fastSort(right)];
  }

  return array;
};

module.exports = fastSort;