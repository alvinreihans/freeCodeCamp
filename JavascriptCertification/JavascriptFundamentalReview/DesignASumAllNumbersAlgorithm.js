const sumAll = (arrOf2Num) => {
  let [n, m] = arrOf2Num;
  let result = 0;
  if (n <= m) {
    while (n <= m) {
      result += n;
      n++;
    }
  } else {
    while (m <= n) {
      result += m;
      m++;
    }
  }
  return result;
};

console.log(sumAll([10, 5]));
