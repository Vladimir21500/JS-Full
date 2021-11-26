const daysOfWeek = [`Mo`, `Tu`, `We`, `Th`, `Fr`, `St`, `Su`];

export function dayOfWeek(date, days) {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return daysOfWeek[new Date(dateInFuture).getDay()];
}
