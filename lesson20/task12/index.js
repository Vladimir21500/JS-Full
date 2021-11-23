function squaredNumbers() {
  const numbers = Array.from(document.querySelectorAll(`.number`));
  numbers.map((el) => {
    el.setAttribute(`data-squared-number`, el.dataset.number ** 2);
    console.dir(el.dataset.squaredNumber);
  });
}
