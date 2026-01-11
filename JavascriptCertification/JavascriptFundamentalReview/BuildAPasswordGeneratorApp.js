const generatePassword = (passLength) => {
  const char =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

  let result = [];
  for (let i = 0; i < passLength; i++) {
    result.push(char[Math.floor(Math.random() * (char.length + 1))]);
  }
  return result.join('');
};

const password = generatePassword(5);
console.log(`Generated password: ${password}`);
