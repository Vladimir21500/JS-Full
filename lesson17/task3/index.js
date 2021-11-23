function sumOfSquares() {
  return [...arguments].reduce((acc, elem) => (acc += elem * elem), 0);
}
