import operate from '../logic/operate';

describe('Operate calculation', () => {
  test('7 plus 7', () => {
    const result = operate(7, 7, '+');
    expect(result).toBe('14');
  });
  test('7 minus 7', () => {
    const result = operate(7, 7, '-');
    expect(result).toBe('0');
  });
  test('7 times 7', () => {
    const result = operate(7, 7, 'x');
    expect(result).toBe('49');
  });
  test('7 divided 7', () => {
    const result = operate(7, 7, '÷');
    expect(result).toBe('1');
  });
});
