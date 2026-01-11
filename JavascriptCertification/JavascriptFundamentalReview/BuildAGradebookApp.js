const getAverage = (scores) => {
  let result = 0;
  for (const score of scores) {
    result += score;
  }
  return result / scores.length;
};

const getGrade = (score) => {
  if (score == 100) {
    return 'A+';
  } else if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
};

const hasPassingGrade = (score) => {
  if (getGrade(score) != 'F') {
    return true;
  } else {
    return false;
  }
};

const studentMsg = (scores, score) => {
  if (hasPassingGrade(score)) {
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(
      score
    )}. You passed the course.`;
  } else {
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(
      score
    )}. You failed the course.`;
  }
};
