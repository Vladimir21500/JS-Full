const reposListElem = document.querySelector('.repo-list');

export const cleanReeposList = () => {
  reposListElem.innerHTML = '';
};

export const addItem = nameRep => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('repo-list__item');
  listItemElem.textContent = nameRep;
  reposListElem.append(listItemElem);
};
