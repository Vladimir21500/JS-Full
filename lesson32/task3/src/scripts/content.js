const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const reposListElem = document.querySelector('.repo-list');

export const setInfoUser = user => {
  userAvatarElem.setAttribute('src', user.avatar_url);
  userNameElem.textContent = user.name;
  userLocationElem.textContent = user.location;
};

export const addItem = nameRep => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('repo-list__item');
  listItemElem.textContent = nameRep;
  reposListElem.append(listItemElem);
};
