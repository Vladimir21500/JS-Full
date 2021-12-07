function sortAsc(array) {
  if (!Array.isArray(array)) return null;
  let helpValue;
  let valueLength = array.length;

  do {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i + 1] < array[i]) {
        helpValue = array[i];
        array[i] = array[i + 1];
        array[i + 1] = helpValue;
      }
    }
    valueLength -= 1;
  } while (valueLength > 0);

  return array;
}

function sortAsc(array) {
  if (!Array.isArray(array)) return null;
  let helpValue;
  let valueLength = array.length;

  do {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i + 1] > array[i]) {
        helpValue = array[i];
        array[i] = array[i + 1];
        array[i + 1] = helpValue;
      }
    }
    valueLength -= 1;
  } while (valueLength > 0);

  return array;
}
