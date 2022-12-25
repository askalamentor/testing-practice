import caesarCipher from '../functions/caesarCipher';

test('"aaabbbcccdddeee" should become "bbbcccdddeeefff"', () => {
  expect(caesarCipher('aaabbbcccdddeee')).toBe('bbbcccdddeeefff');
});
