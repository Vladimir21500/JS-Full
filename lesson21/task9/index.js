const input = document.querySelector(`.task-status`);

input.addEventListener(`click`, (event) => {
  console.log(event.target.checked);
});
