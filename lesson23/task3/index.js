/* 
найти разницу во времени в формате d h m s
алгоритм 
in: date1, date2
out: разница

алгоритм: 
1. перевести даты в миллисекунды и найти разницу
2. перевести разницу в нужный формат
2.1 по порядку добавлять в ответ и переводить в дни полный год,месяцы, день
                                              в минуты 
                                              секунды  
так как в месяце не одинаковое кол-во дней создадим обькт
с которого будем считывать кол-во дней в зависимости от месяца                                                                           
*/
const DEFAULT_POINT_YEAR = 1970;
const DAYS_YEAR = 365;

const months = {
  jan: 31,
  feb: 28,
  mar: 31,
  apr: 30,
  may: 31,
  jun: 30,
  jul: 31,
  auh: 31,
  sep: 30,
  oct: 31,
  nov: 30,
  dec: 31,
  getSumDays(year, month) {
    if (year % 4 === 0) this.feb = 29;

    return Object.values(this).reduce((acc, el, index) => {
      if (index < month) {
        return acc + el;
      }
      return acc;
    }, 0);
  },
};

function getDiff(startDate, endDate) {
  const diff = new Date(endDate).getTime() - new Date(startDate).getTime();
  const fullYear = new Date(diff).getUTCFullYear() - DEFAULT_POINT_YEAR;
  const fullMonths = new Date(diff).getUTCMonth();

  let days = fullYear * DAYS_YEAR;
  days += months.getSumDays(fullYear, fullMonths);
  days += new Date(diff).getUTCDate() - 1;

  const hours = new Date(diff).getUTCHours();
  const minutes = new Date(diff).getUTCMinutes();
  const seconds = new Date(diff).getUTCSeconds();
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
