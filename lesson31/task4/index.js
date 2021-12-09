/* 
0. создать пустой обьект пользователя
1. Выбрать нужные элементы на форме
2.для каждого инпута 
2.1 создать bool переменную валидации
2.2 создать переменную контента
2.3 добавить событие change которое:
 записывает содержимое инпута в переменную контента
 переменная контента проверяется на валидацию
 добавляет либо изменяет поле обекта юзера

 3. валидатор: 
 проверка что все данные прошли валидацию,
 делаем кнопку активной
 4. на кнопку вешаем событие по клику: 
   1. с помощью метода POST добавляем объект на сервер
   2. чистим поля
   3. выводим alert с данными с сервера
*/
const baseUrl = 'https://61af86a73e2aba0017c493ea.mockapi.io/api/v1/users';

const user = {};

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

const onChanged = event => {
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

const cleanerInputs = () => {
  emailInputElem.value = '';
  nameInputElem.value = '';
  passwordInputElem.value = '';
};

const sendToServer = userData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
};

const onSubmit = event => {
  event.preventDefault();

  sendToServer(user)
    .then(response => response.json())
    .then(user => alert(user));
  cleanerInputs();
};

const formElem = document.querySelector('.login-form');
formElem.addEventListener('change', onChanged);
formElem.addEventListener('submit', onSubmit);
