const uniteUnique = (...arrays) => {
  let result = [];
  for (const arr of arrays) {
    for (const num of arr) {
      if (result.includes(num) == false) {
        result.push(num);
      }
    }
  }

  return result;
};

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
