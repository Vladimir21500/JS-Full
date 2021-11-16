import { reverseArray } from '../../lesson7 array methods/task6/index';

it('should return null if argument not is array', () => {
  const result = reverseArray('[5, 6, 7]');

  expect(result).toEqual(null);
});

it('should return reverse array if argument is array', () => {
  const result = reverseArray([5, 6, 7, 8, 9]);

  expect(result).toEqual([9, 8, 7, 6, 5]);
});

it('should argument is not changed', () => {
  let arr = [5, 6, 7, 8, 9];
  const result = reverseArray(arr);

  expect(arr).toEqual([5, 6, 7, 8, 9]);
});

import { withdraw } from '../../lesson7 array methods/task9/index';

it('should get correct balance for client', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).toEqual(37);
});

it('should get correct change array balances ', () => {
  let balances = [1400, 87, -6];
  const result = withdraw(['Ann', 'John', 'User'], balances, 'John', 50);

  expect(balances).toEqual([1400, 37, -6]);
});

it('should get correct result if client not have enought money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

  expect(result).toEqual(-1);
});

import { getAdults } from '../../lesson8 object/task7/index';

it('should get correct filtered object', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should get correct filtered object', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });

  expect(result).toEqual({ Ann: 56 });
});

it('should get correct with empty object', () => {
  const result = getAdults({});

  expect(result).toEqual({});
});
