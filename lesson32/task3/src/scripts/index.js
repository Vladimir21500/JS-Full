import { render } from './renderer.js';

/* 
1. при загрузке отображается аватар по умолчанию
 при нажатии на show:
 1. считываем контент из инпута(username)
 показываем спиннер
 2. делаем запрос на сервер по url
 '...github.../userName'
 3. считываем нужные свойства
 3.1 помещаем их в контент соотвествующих элемнтов
 4. по адресу из repos_url делаем запрос за списком репозиториев
 убираем спиннер
 5. имена (поле name) репозиториев записываем в контент repo-list-item -ов
 и даем list-item класс

 при любой ошибке показываем alert('Failed to load data')
*/
const defaultAvatar = 'https:/avatars3.githubusercontent.com/0001';

const userAvatarElem = document.querySelector('.user__avatar');
userAvatarElem.setAttribute('src', defaultAvatar);

const buttonElem = document.querySelector('.name-form__btn');
buttonElem.addEventListener('click', render);
