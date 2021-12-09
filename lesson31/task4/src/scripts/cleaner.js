const emailInputElem = document.querySelector('[name="email"]');
const nameInputElem = document.querySelector('[name="name"]');
const passwordInputElem = document.querySelector('[name="password"]');

export const cleanerInputs = () => {
  emailInputElem.value = '';
  nameInputElem.value = '';
  passwordInputElem.value = '';
};
