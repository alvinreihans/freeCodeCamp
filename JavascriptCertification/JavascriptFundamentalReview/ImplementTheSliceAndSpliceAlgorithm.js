const frankenSplice = (arr1, arr2, index) => {
  let temp = [...arr2];
  temp.splice(index, 0, ...arr1);
  return temp;
};
