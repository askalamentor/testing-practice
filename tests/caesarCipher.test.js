import caesarCipher from '../functions/caesarCipher';

test('"aaabbbcccdddeee", 1 should become "bbbcccdddeeefff"', () => {
  expect(caesarCipher('aaabbbcccdddeee', 1)).toBe('bbbcccdddeeefff');
});

test('"adz", 3 should become "dgc"', () => {
  expect(caesarCipher('adz', 3)).toBe('dgc');
});

test('"abcd cdef xyz", 2 should become "cdef efgh zab"', () => {
  expect(caesarCipher('abcd cdef xyz', 2)).toBe('cdef efgh zab');
});

test('1, 1 should become "text is not string"', () => {
  expect(caesarCipher(1, 1)).toBe('text is not string');
});
