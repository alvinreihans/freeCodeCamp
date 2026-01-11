const convertHTML = (text) => {
  let result = [];
  for (const char of text) {
    switch (char) {
      case `&`:
        result.push(`&amp;`);
        break;
      case `<`:
        result.push(`&lt;`);
        break;
      case `>`:
        result.push(`&gt;`);
        break;
      case `"`:
        result.push(`&quot;`);
        break;
      case `'`:
        result.push(`&apos;`);
        break;
      default:
        result.push(char);
        break;
    }
  }

  return result.join('');
};

console.log(convertHTML('Dolce & Gabbana'));
