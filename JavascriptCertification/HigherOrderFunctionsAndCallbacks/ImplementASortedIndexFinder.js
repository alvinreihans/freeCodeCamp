const getIndexToIns = (arr, num) => {
  const deIndex = arr.sort((a, b) => a - b).findIndex((val) => num <= val);

  return deIndex == -1 ? arr.length : deIndex;
};

console.log(getIndexToIns([3, 5, 10], 11));
