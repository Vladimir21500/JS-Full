const input = document.querySelector(`.text-input`);

input.addEventListener(`change`, () => {
  console.log(Event.target.value);
});
