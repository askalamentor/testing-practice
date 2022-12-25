export default function caesarCipher(string) {
  // check any input
  if (!string) return 'no input';
  // check true input type
  if (typeof string !== 'string') return 'no string';

  const letters = string.split('');
  const cipher = [];

  letters.forEach((letter) => {
    cipher.push(String.fromCharCode(letter.charCodeAt(0) + 1));
  });

  return cipher.join('');
}
