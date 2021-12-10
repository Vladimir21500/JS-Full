import { addItem, cleanReeposList } from './repos.js';
import { fetchRepositories, fetchUserData } from './gateways.js';
import { hideSpinner, showSpinner } from './spinner.js';
import { renderUserData } from './user.js';

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
const defaultAvatar = 'https:/avatars3.githubusercontent.com/u10001';

const defaultUser = {
  avatar_url: defaultAvatar,
  name: '',
  location: '',
};

renderUserData(defaultUser);

const buttonElem = document.querySelector('.name-form__btn');
const inputElem = document.querySelector('.name-form__input');

const onSearchUser = async () => {
  showSpinner();
  cleanReeposList();
  const userName = inputElem.value;

  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);
    reposList.forEach(repos => {
      addItem(repos.name);
    });
  } catch (error) {
    alert(error.message);
  } finally {
    hideSpinner();
  }
};

buttonElem.addEventListener('click', onSearchUser);
