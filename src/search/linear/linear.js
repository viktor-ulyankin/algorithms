function linearSearch(array, search) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === search) {
      return i;
    }
  }

  return -1;
}

module.exports = linearSearch;