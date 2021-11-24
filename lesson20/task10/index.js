function finishForm() {
  const inputText = document.createElement(`input`);
  inputText.setAttribute(`type`, `text`);
  inputText.setAttribute(`name`, `login`);
  document.querySelector(`form`).prepend(inputText);

  document
    .querySelector(`input[name = "password"]`)
    .setAttribute(`type`, `password`);
}
