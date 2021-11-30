const calc = (value) => {
  let result = value;
  const calculator = {
    add(value) {
      result += value;
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },
    subtract(value) {
      result -= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
};

const result = calc(5).add(2).mult(5).div(2).subtract(0).result();

console.log(result);
