/* 
1. создаем функцию saveCalls, которая принимает на вход функцию
2. создаем массив calls в который попадают массивы аргументов для вызова withMemory
3. возвращаем функцию withMemory (входные данные такие же как и у входящей функции)
со свойством calls в котором массив calls
3.1. пушим аргументы как массив в массив calls
4. withMemory в свою очередь возвращает результат работы входящей функции
*/

function saveCalls(func) {
  const calls = [];
  return function withMemory() {
    withMemory.calls = calls;
    calls.push([...arguments]);
    return func.apply(this, [...arguments]);
  };
}
function test(a, b) {
  return [Math.sqrt(a * a + b * b)];
}

const testWithMemory = saveCalls(test);
testWithMemory(4, 2);
testWithMemory(9, 1);

const user = {
  name: 'John',

  sayHi() {
    return this.name;
  },
};

const methodWithMemory = saveCalls(user.sayHi);
