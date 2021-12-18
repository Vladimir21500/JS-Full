const mult4 = value => value * 4;
const div1 = value => value / 1;
const add10 = value => value + 10;
const square3 = value => value ** 3;

export const compose =
  (...funcs) =>
  value => {
    return funcs.reduce((acc, func) => func(acc), value);
  };

const doEverything = compose(add10, div1, square3, mult4);

console.log(doEverything(4));
