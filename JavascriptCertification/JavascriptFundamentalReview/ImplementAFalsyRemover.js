const bouncer = (arr) => {
  let result = [];
  for (const element of arr) {
    if (element) {
      result.push(element);
    }
  }
  return result;
};

console.log(bouncer([7, 'ate', '', false, 9]));
