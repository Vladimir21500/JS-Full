const getRandomNumbers = (length, from, to) => {
  if (Math.trunc(from) === Math.trunc(to)) return null;
  const arr = [];
  arr.length = length;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(
      Math.random() * (Math.ceil(to) - Math.ceil(from)) + Math.ceil(from)
    );
  }
  return arr;
};

// examples
getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
