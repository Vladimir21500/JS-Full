const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

export const renderUserData = user => {
  userAvatarElem.setAttribute('src', user.avatar_url);
  userNameElem.textContent = user.name;
  userLocationElem.textContent = user.location;
};
