import analyzeArray from '../functions/analyzeArray';

test('normal number array', () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test('array with string', () => {
  expect(analyzeArray([1, 2, 3, 4, '5'])).toBe('not an number array');
});

test('string input', () => {
  expect(analyzeArray('123456')).toBe('not an array');
});
