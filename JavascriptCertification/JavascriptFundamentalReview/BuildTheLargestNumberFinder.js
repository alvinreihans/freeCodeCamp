const largestOfAll = (arr2d) => {
  let result = [];
  for (const arr of arr2d) {
    let largest = -Infinity;
    for (const num of arr) {
      if (num > largest) {
        largest = num;
      }
    }
    result.push(largest);
    largest = -Infinity;
  }
  return result;
};
