const baseUrl = 'https://61af86a73e2aba0017c493ea.mockapi.io/api/v1/users';

export const sendToServer = userData => {
  console.log('sendServer');

  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
};
