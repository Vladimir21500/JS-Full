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
export const shmoment = (date) => {
  let newDate = date;
  const changeDate = {
    add(type, number) {
      if (type === 'years') newDate.setFullYear(newDate.getFullYear() + number);
      if (type === 'months') newDate.setMonth(newDate.getMonth() + number);
      if (type === 'days') newDate.setDate(newDate.getDay() + number);
      if (type === 'hours') newDate.setHours(newDate.getHours() + number);
      if (type === 'minutes') newDate.setMinutes(newDate.getMinutes() + number);
      if (type === 'seconds') newDate.setSeconds(newDate.getSeconds() + number);
      if (type === 'milliseconds')
        newDate.setMilliseconds(newDate.getMilliseconds() + number);

      return this;
    },
    subtract(type, number) {
      if (type === 'years') newDate.setFullYear(newDate.getFullYear() - number);
      if (type === 'months') newDate.setMonth(newDate.getMonth() - number);
      if (type === 'days') newDate.setDate(newDate.getDay() - number);
      if (type === 'hours') newDate.setHours(newDate.getHours() - number);
      if (type === 'minutes') newDate.setMinutes(newDate.getMinutes() - number);
      if (type === 'seconds') newDate.setSeconds(newDate.getSeconds() - number);
      if (type === 'milliseconds')
        newDate.setMilliseconds(newDate.getMilliseconds() - number);

      return this;
    },
    result() {
      return newDate;
    },
  };

  return changeDate;
};

const result = shmoment(new Date())
  .add('years', 2)
  .subtract('months', 3)
  .add('minutes', 1)
  .result();
console.log(result);
