const countOccurrences = (text = '', str) => {
  if (str === '') return null;
  let count = 0;
  let startIndex = 0;
  while (text.indexOf(str, startIndex) >= 0) {
    count++;
    startIndex = text.indexOf(str, startIndex) + str.length;
  }
  return count;
};
