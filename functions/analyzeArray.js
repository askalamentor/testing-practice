export default function analyzeArray(array) {
  if (Array.isArray(array)) {
    for (let item of array) {
      if (typeof item !== 'number') {
        return 'not an number array';
      }
    }
  } else {
    return 'not an array';
  }

  array.forEach((number) => {
    if (typeof number != 'number') return 'not an number array';
  });

  const average = array.reduce((a, b) => a + b) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  return { average, min, max, length };
}
