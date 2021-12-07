/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromise = new Promise(resolve => {
  resolve(17);
});
/*
 * пример использования
 */
makePromise.then(number => {
  console.log(number); // 17
});
