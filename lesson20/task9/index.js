export function finishList() {
  const ul = document.querySelector(`ul`);

  const item1 = document.createElement(`li`);
  item1.textContent = `1`;
  ul.prepend(item1);

  const specialItem = document.querySelector(`.special`);

  const item4 = document.createElement(`li`);
  item4.textContent = `4`;
  specialItem.before(item4);

  const item6 = document.createElement(`li`);
  item6.textContent = `6`;
  specialItem.after(item6);

  const item8 = document.createElement(`li`);
  item8.textContent = `8`;
  ul.append(item8);
}

function test() {}
