/* 
   shmoment 
   //input: value
   //output: object
   1. функция принмает дату и записывает ее в 
   2.создает обькт даты с функциями
    2.1 add - принимает строку и число
    проверяет строку и в зваисимости от результата использует нужный
    сеттер и геттер
    добавляет число в нужный тип
    возвращает обект
     2.2 принимает строку и число
    проверяет строку и в зваисимости от результата использует нужный
    сеттер и геттер
    отнимает число от нужного типа
    возвращает обект
    2.3 result возвращает дату 
*/

const getMethodsNames = {
  years: 'getFullYear',
  months: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds',
};

const setMethodsNames = {
  years: 'setFullYear',
  months: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};

export const shmoment = (date) => {
  let result = new Date(date);
  const changeDate = {
    add(type, number) {
      const currentUnitValue = result[getMethodsNames[type]]();
      result = new Date(
        result[setMethodsNames[type]](currentUnitValue + number)
      );
      return this;
    },
    subtract(type, number) {
      const currentUnitValue = result[getMethodsNames[type]]();
      result = new Date(
        result[setMethodsNames[type]](currentUnitValue - number)
      );
      return this;
    },
    result() {
      return result;
    },
  };

  return changeDate;
};

/* const result = shmoment(new Date())
  .add('years', 2)
  .subtract('months', 3)
  .add('minutes', 1)
  .result();
console.log(result); */

const date1 = new Date(19, 4, 5);
console.log(date1);
console.log(shmoment(date1).add('days', 4).subtract('months', 3).result());
console.log(date1);
