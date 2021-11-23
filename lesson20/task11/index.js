export function manageClasses() {
  document.querySelector(`.one`).classList.add(`selected`);
  document.querySelector(`.two`).classList.remove(`selected`);
  document.querySelector(`.three`).classList.add(`three_done`);
  document.querySelector(`.one`).classList.add(`selected`);
  if (document.querySelector(`.four`).classList.contains(`some-class`)) {
    document.querySelector(`.four`).classList.add(`another-class`);
  }
}
