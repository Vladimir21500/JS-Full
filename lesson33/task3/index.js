/* 
1. создаем функцию getUsersBlogs
//input arr
//output promise with linkList
2. считываем переданый массив. 
с помощью await PromiseAll(1, 2, 3) // 1, 2, 3 промисы с юзерами
 получеными с помощью
fetchUser {
  //input userId
  //output user
}
для каждого элемента:
2.1 у user получаем имейл
2.2. записываем Promise/all в переменную 
2.3 возвращаем ее
2.4 все заворачиваем в try и при ошибке отклоняем
*/
const fetchUser = userId => {
  return fetch(`https://api.github.com/users/${userId}`).then(response => response.json());
};

export const getUsersBlogs = async arrUsers => {
  try {
    const blogs = await Promise.all(
      arrUsers.map(id => {
        return fetchUser(id).then(user => user.blog);
      }),
    );
    return blogs;
  } catch (err) {
    throw new Error('Failed to fetch user');
  }
};

getUsersBlogs(['google', 'faceboosdfvsdvk', 'facebook']).then(linksList => console.log(linksList));
