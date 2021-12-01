const requestUserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          email: `${userId}`,
          userId,
        });
      }, 1000);
    }
  });
  return request;
};

requestUserData('broken')
  .catch(error => console.log(error))
  .then(data => console.log(data))
  .finally(data => console.log('finally'));
