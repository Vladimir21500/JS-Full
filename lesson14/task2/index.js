const createCalculator = () => {
  let defaultNum = 0;

  function add(num) {
    defaultNum += num;
  }

  function decrease(num) {
    defaultNum -= num;
  }

  function reset() {
    defaultNum = 0;
  }

  const getMemo = () => defaultNum;

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};
