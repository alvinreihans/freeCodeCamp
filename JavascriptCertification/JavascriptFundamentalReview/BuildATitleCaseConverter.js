const titleCase = (title) => {
  let words = title.toLowerCase().split(' ');
  let result = [];
  for (let word of words) {
    let newWord = [];
    for (let i = 0; i < word.length; i++) {
      if (i == 0) {
        newWord.push(word[i].toUpperCase());
      } else {
        newWord.push(word[i]);
      }
    }
    result.push(newWord.join(''));
  }
  return result.join(' ');
};

titleCase("I'm a little tea pot");
