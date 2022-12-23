import Calculator from '../functions/calculator';

describe('Calculator', () => {
  const calculator = new Calculator();

  // add
  test('4,5 should become "9"', () => {
    expect(calculator.add(4, 5)).toBe(9.0);
  });

  test('3.36, 7.14 should become "10.5"', () => {
    expect(calculator.add(3.36, 7.14)).toBe(10.5);
  });

  test('-5.14, -2 should become "-7.14"', () => {
    expect(calculator.add(-5.14, -2)).toBe(-7.14);
  });

  test('"4","5" should become "9"', () => {
    expect(calculator.add('4', '5')).toBe(9.0);
  });

  test('"3.36","7.14" should become "10.5"', () => {
    expect(calculator.add('3.36', '7.14')).toBe(10.5);
  });

  test('"-5.14", "-2" should become "-7.14"', () => {
    expect(calculator.add('-5.14', '-2')).toBe(-7.14);
  });

  // substract
  test('4,5 should become "-1"', () => {
    expect(calculator.substract(4, 5)).toBe(-1.0);
  });

  test('7.14, 3.36 should become "3.78"', () => {
    expect(calculator.substract(7.14, 3.36)).toBe(3.78);
  });

  test('-5.14, -2 should become "-3.14"', () => {
    expect(calculator.substract(-5.14, -2)).toBe(-3.14);
  });

  test('"4","5" should become "-1"', () => {
    expect(calculator.substract('4', '5')).toBe(-1.0);
  });

  test('"7.14","3.36" should become "3.78"', () => {
    expect(calculator.substract('7.14', '3.36')).toBe(3.78);
  });

  test('"-5.14", "-2" should become "-3.14"', () => {
    expect(calculator.substract('-5.14', '-2')).toBe(-3.14);
  });
});
