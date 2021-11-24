const input = document.querySelector(`.text-input`);

input.addEventListener(`change`, () => {
  console.log(event.target.value);
});
