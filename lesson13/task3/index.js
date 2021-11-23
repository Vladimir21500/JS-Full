let defaultNum = 0;

export function add(num) {
  defaultNum += num;
}

export function decrease(num) {
  defaultNum -= num;
}

export function reset() {
  defaultNum = 0;
}

export const getMemo = () => defaultNum;
