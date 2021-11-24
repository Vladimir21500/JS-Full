const input = document.querySelector(`.text-input`);

input.addEventListener(`change`, (event) => {
  console.log(event.target.value);
});
