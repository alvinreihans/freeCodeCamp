const diffArray = (arr1, arr2) => {
  let result = [...arr1, ...arr2];
  return result.filter(
    (value) => !(arr1.includes(value) && arr2.includes(value))
  );
};

console.log(
  diffArray(
    ['apple', 'apple', 'orange'],
    ['apple', 'orange', 'banana', 'grape']
  )
);
