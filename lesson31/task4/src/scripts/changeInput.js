export const user = {};

const submitButtonElem = document.querySelector('.submit-button');
const emailInputElem = document.querySelector('[name="email"]');
const nameInputElem = document.querySelector('[name="name"]');
const passwordInputElem = document.querySelector('[name="password"]');

let emailIsValid = false;
let nameIsValid = false;
let passwordIsValid = false;

const validator = () => {
  if (emailIsValid && nameIsValid && passwordIsValid) {
    submitButtonElem.disabled = false;
    return;
  }
  submitButtonElem.disabled = true;
};

export const onChanged = event => {
  console.log('onChange call');
  const inputName = event.target.getAttribute('name');
  const inputContent = event.target.value;

  if (inputName === 'email') {
    user.email = inputContent;
    emailIsValid = emailInputElem.reportValidity();
    validator();
  }
  if (inputName === 'name') {
    user.name = inputContent;
    nameIsValid = nameInputElem.reportValidity();
    validator();
  }
  if (inputName === 'password') {
    user.password = inputContent;
    passwordIsValid = passwordInputElem.reportValidity();
    validator();
  }
};
