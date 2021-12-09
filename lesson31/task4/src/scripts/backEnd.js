const baseUrl = 'https://61af86a73e2aba0017c493ea.mockapi.io/api/v1/users';

export const sendToServer = userData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
};

const passwordInputElem = document.querySelector('[name="password"]');

let userId = null;

const getUserId = () => {
  console.log(passwordInputElem.value);
  return fetch(baseUrl)
    .then(response => response.json())
    .then(users => {
      userId = users.find(user => user.password === passwordInputElem.value).id;
    });
};

export const getUser = () => {
  getUserId();
  return fetch(`${baseUrl}/${userId}`).then(response => response.json());
};
