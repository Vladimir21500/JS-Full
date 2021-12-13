/* 
1.принимаем число и создаем пустой массив
2. проходимся циклом по всем числам меньше заданного 
3. каждому элементу присваиваем функцию которая возвращает индекс
4. возвращаем массив
*/
function createArrayOfFunctions(num) {
  if (num === undefined) return [];
  if (typeof num !== 'number') return null;
  const arr = [];
  arr.length = num;
  arr.fill(null);
  return arr.map((el, index) => {
    return function () {
      return index;
    };
  });
}
