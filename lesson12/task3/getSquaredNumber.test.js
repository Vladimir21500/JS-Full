import getMinSquaredNumber from './getMinSquaredNumber';

it('should get null if array is empty', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});

it('should get null if type argument is string', () => {
  const result = getMinSquaredNumber('45, 53');

  expect(result).toEqual(null);
});

it('should get min square number', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});
