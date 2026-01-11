const sumFibs = (num) => {
  let prevFib = 0;
  let currFib = 1;
  let result = 0;

  while (currFib <= num) {
    if (currFib % 2 != 0) {
      result += currFib;
    }

    let nextFib = currFib + prevFib;
    prevFib = currFib;
    currFib = nextFib;
  }

  return result;
};

console.log(sumFibs2(75025));
