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

const formElem = document.querySelector('.login-form');
const emailInputElem = document.querySelector('[name="email"]');
const nameInputElem = document.querySelector('[name="name"]');
const passwordInputElem = document.querySelector('[name="password"]');
const submitButtonElem = document.querySelector('.submit-button');

const validator = () => {
  if (formElem.reportValidity()) {
    submitButtonElem.removeAttribute('disabled');
    submitButtonElem.setAttribute('enabled', true);
    return;
  }
  submitButtonElem.setAttribute('disabled', true);
};

const setUserData = event => {
  const inputName = event.target.getAttribute('name');
  const inputContent = event.target.value;

  if (inputName === 'email') {
    user.email = inputContent;
  }
  if (inputName === 'name') {
    user.name = inputContent;
  }
  if (inputName === 'password') {
    user.password = inputContent;
  }
};

const onInputChange = event => {
  const isValidForm = formElem.reportValidity();
  if (isValidForm) {
    submitButtonElem.removeAttribute('disabled');
    setUserData(event);
  } else {
    submitButtonElem.setAttribute('disabled', true);
  }
};

formElem.addEventListener('input', onInputChange);

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
    .then(user => {
      alert(JSON.stringify(user));
      formElem.reset();
    });
};

formElem.addEventListener('change', onInputChange);
formElem.addEventListener('submit', onSubmit);
