export default class Calculator {
  add(x, y) {
    if (typeof x === 'string') x = parseFloat(x);
    if (typeof y === 'string') y = parseFloat(y);
    return Number((x + y).toFixed(2));
  }

  substract(x, y) {
    if (typeof x === 'string') x = parseFloat(x);
    if (typeof y === 'string') y = parseFloat(y);
    return Number((x - y).toFixed(2));
  }
}
