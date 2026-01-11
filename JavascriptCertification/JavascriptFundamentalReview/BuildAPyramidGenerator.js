const pyramid = (pattern, rows, bool) => {
  const result = [];
  if (bool) {
    let counter = 1;
    for (let i = 0; i < rows; i++) {
      result.push('\n');
      result.push(' '.repeat(i));
      result.push(pattern.repeat(rows + (rows - counter)));
      counter += 2;
    }
  } else {
    for (let i = 0; i < rows; i++) {
      result.push('\n');
      result.push(' '.repeat(rows - i - 1));
      result.push(pattern.repeat(i + (i + 1)));
    }
  }
  return result.join('') + '\n';
};
