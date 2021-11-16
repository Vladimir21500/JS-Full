import { calc } from './calculator';

it('should get correct sum', () => {
  const result = calc('5 + 3');

  expect(result).toEqual('5 + 3 = 8');
});

it('should get correct minus', () => {
  const result = calc('6 - 3');

  expect(result).toEqual('6 - 3 = 3');
});

it('should get correct mult', () => {
  const result = calc('5 * 3');

  expect(result).toEqual('5 * 3 = 15');
});

it('should get correct division', () => {
  const result = calc('64 / 8');

  expect(result).toEqual('64 / 8 = 8');
});
it('should get null if type argument not is string', () => {
  const result = calc(45 + 45);

  expect(result).toEqual(null);
});
