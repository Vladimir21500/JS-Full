const weekDays = [`Mo`, `Tu`, `We`, `Th`, `Fr`, `St`, `Su`];

export function dayOfWeek(date, days) {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];
}

let result = dayOfWeek(new Date(2019, 0, 1), 14);
console.log(result);
result = dayOfWeek(new Date(2019, 0, 1), 15);
console.log(result);
result = dayOfWeek(new Date(2021, 10, 26), 1);
console.log(result);
