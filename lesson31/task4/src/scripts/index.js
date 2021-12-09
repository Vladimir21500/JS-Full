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

import { sendToServer } from './backEnd.js';
import { onChanged, user } from './changeInput.js';
import { cleanerInputs } from './cleaner.js';

const onSubmit = event => {
  event.preventDefault();

  sendToServer(user);
  cleanerInputs();
};

const formElem = document.querySelector('.login-form');
formElem.addEventListener('change', onChanged);
formElem.addEventListener('submit', onSubmit);
