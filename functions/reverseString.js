function reverseString(string) {
  if (!string) return 'no input';
  if (typeof string !== 'string') return 'no string';
  return string.split('').reverse().join('');
}

export default reverseString;
