export function getDiff(startDate, endDate) {
  const DAYS_IN_MS = 86400000;
  const HOURS_IN_MS = 3600000;
  const MINUTES_IN_MS = 60000;
  const SECONDS_IN_MS = 1000;

  let diff = Math.abs(new Date(endDate).getTime() - new Date(startDate).getTime());

  const days = Math.floor(diff / DAYS_IN_MS);
  diff -= days * DAYS_IN_MS;
  const hours = Math.floor(diff / HOURS_IN_MS);
  diff -= hours * HOURS_IN_MS;
  const minutes = Math.floor(diff / MINUTES_IN_MS);
  diff -= minutes * MINUTES_IN_MS;
  const seconds = Math.floor(diff / SECONDS_IN_MS);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
