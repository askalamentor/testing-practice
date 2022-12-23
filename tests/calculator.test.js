import Calculator from '../functions/calculator';

describe('Calculator', () => {
  const calculator = new Calculator();

  // add
  test('4,5 should become 9', () => {
    expect(calculator.add(4, 5)).toBe(9.0);
  });

  test('3.36, 7.14 should become 10.5', () => {
    expect(calculator.add(3.36, 7.14)).toBe(10.5);
  });

  test('-5.14, -2 should become -7.14', () => {
    expect(calculator.add(-5.14, -2)).toBe(-7.14);
  });

  test('"4","5" should become 9', () => {
    expect(calculator.add('4', '5')).toBe(9.0);
  });

  test('"3.36","7.14" should become 10.5', () => {
    expect(calculator.add('3.36', '7.14')).toBe(10.5);
  });

  test('"-5.14", "-2" should become -7.14', () => {
    expect(calculator.add('-5.14', '-2')).toBe(-7.14);
  });

  // substract
  test('4,5 should become -1', () => {
    expect(calculator.substract(4, 5)).toBe(-1.0);
  });

  test('7.14, 3.36 should become 3.78', () => {
    expect(calculator.substract(7.14, 3.36)).toBe(3.78);
  });

  test('-5.14, -2 should become -3.14', () => {
    expect(calculator.substract(-5.14, -2)).toBe(-3.14);
  });

  test('"4","5" should become -1', () => {
    expect(calculator.substract('4', '5')).toBe(-1.0);
  });

  test('"7.14","3.36" should become 3.78', () => {
    expect(calculator.substract('7.14', '3.36')).toBe(3.78);
  });

  test('"-5.14", "-2" should become -3.14', () => {
    expect(calculator.substract('-5.14', '-2')).toBe(-3.14);
  });

  //divide
  test('"8", "4" should become 2.00', () => {
    expect(calculator.divide('8', '4')).toBe(2.0);
  });

  test('"3", "9" should become 0.33', () => {
    expect(calculator.divide('3', '9')).toBe(0.33);
  });

  test('"0", "5" should become 0', () => {
    expect(calculator.divide('0', '5')).toBe(0);
  });

  test('"5", "0" should become "cannot divide by zero"', () => {
    expect(calculator.divide('5', '0')).toBe('cannot divide by zero');
  });

  test('8, 4 should become 2.00', () => {
    expect(calculator.divide(8, 4)).toBe(2.0);
  });

  test('3, 9 should become 0.33', () => {
    expect(calculator.divide(3, 9)).toBe(0.33);
  });

  test('0, 5 should become 0', () => {
    expect(calculator.divide(0, 5)).toBe(0);
  });

  test('5, 0 should become "cannot divide by zero"', () => {
    expect(calculator.divide(5, 0)).toBe('cannot divide by zero');
  });
});
