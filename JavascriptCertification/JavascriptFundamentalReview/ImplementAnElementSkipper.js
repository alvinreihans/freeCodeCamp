const dropElements = (arr, func) => {
  let trueIndex = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true) {
      trueIndex = i;
      break;
    }
  }

  arr.splice(0, trueIndex);

  return arr;
};

console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
);
