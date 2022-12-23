import reverseString from '../functions/reverseString';

test('"abcdef" should become "fedcba"', () => {
  expect(reverseString('abcdef')).toBe('fedcba');
});

test('"123456" should become "654321"', () => {
  expect(reverseString('123456')).toBe('654321');
});

test('"text with lots of space!" should become "!ecaps fo stol htiw txet"', () => {
  expect(reverseString('text with lots of space!')).toBe(
    '!ecaps fo stol htiw txet'
  );
});

test('"" should become "no input"', () => {
  expect(reverseString()).toBe('no input');
});

test('123456 should become "no string"', () => {
  expect(reverseString(123456)).toBe('no string');
});
