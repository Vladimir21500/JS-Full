const arrAverage = (arr) => {
  if (!Array.isArray(arr)) return null;
  const sum = arr.reduce((acc, elem) => (acc += elem), 0);
  return sum / arr.length;
};
