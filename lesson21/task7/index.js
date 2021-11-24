function handleClick() {
  console.log(event.target.textContent);
}

const btnElems = document.querySelectorAll(`.btn`).forEach((btnElem) => {
  btnElem.addEventListener(`click`, handleClick);
});
