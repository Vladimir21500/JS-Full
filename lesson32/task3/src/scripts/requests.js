const baseUrl = 'https://api.github.com/users';

const nameInputElem = document.querySelector('.name-form__input');

export const getUser = () => {
  const enteredName = nameInputElem.value;
  return fetch(`${baseUrl}/${enteredName}`).then(response => response.json());
};

export const getRepos = url => {
  return fetch(`${url}`).then(response => response.json());
};
