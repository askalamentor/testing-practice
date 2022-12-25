export default function caesarCipher(text, shift) {
  // check: text exists, text input type is text
  if (!text) return 'no text available';
  if (typeof text !== 'string') return 'text is not string';
  // check: shift exitst, shift input type is number
  if (!shift) return 'no shift available';
  if (typeof shift !== 'number') return 'shift is not number';

  const letters = text.split('');
  const cipher = [];

  letters.forEach((letter) => {
    // tolowercase
    let asciiVal = letter.toLowerCase();

    // if it is blank, stays blank
    if (asciiVal.charCodeAt(0) === 32) {
      asciiVal;
    }
    // otherwise change letter
    else {
      asciiVal = String.fromCharCode(letter.charCodeAt(0) + shift);
    }

    // check end of lowercase ascii (z = 122)
    if (asciiVal.charCodeAt(0) > 122) {
      // (asciivalue) - (z ascii (122)) + (a ascii (97)) - 1
      asciiVal = String.fromCharCode(asciiVal.charCodeAt(0) - 122 - 1 + 97);
    }

    cipher.push(asciiVal);
  });

  return cipher.join('');
}
