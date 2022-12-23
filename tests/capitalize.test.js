import capitalize from '../functions/capitalize.js';

test('"test" should become "Test"', () => {
  expect(capitalize('test')).toBe('Test');
});

test('"Test" should become "Test"', () => {
  expect(capitalize('Test')).toBe('Test');
});

test('"TEST" should become "TEST"', () => {
  expect(capitalize('TEST')).toBe('TEST');
});

test('"multiple word test" should become "Multiple word test"', () => {
  expect(capitalize('multiple word test')).toBe('Multiple word test');
});

test('"123@!#abcd#!@" should become "123@!#Abcd#!@"', () => {
  expect(capitalize('123@!#abcd#!@')).toBe('123@!#Abcd#!@');
});

test('"123@!#Abcd#!@" should become "123@!#Abcd#!@"', () => {
  expect(capitalize('123@!#Abcd#!@')).toBe('123@!#Abcd#!@');
});

test('"123456" should become "no valid characters"', () => {
  expect(capitalize('123456')).toBe('no valid characters');
});

test('"!#+&" should become "no valid characters"', () => {
  expect(capitalize('!#+&')).toBe('no valid characters');
});
