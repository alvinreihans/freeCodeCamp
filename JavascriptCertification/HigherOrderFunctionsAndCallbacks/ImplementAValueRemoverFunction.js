const destroyer = (arr, ...args) => {
  return arr.filter((value) => !args.includes(value));
};

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
