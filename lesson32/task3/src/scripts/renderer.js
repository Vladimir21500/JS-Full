import { addItem, setInfoUser } from './content.js';
import { getRepos, getUser } from './requests.js';

export const render = () => {
  const spinner = document.querySelector('.spinner_hidden');
  spinner.classList.remove('spinner_hidden');

  getUser()
    .then(user => {
      setInfoUser(user);
      return user.repos_url;
    })
    .then(url => getRepos(url))
    .then(repos => {
      repos.forEach(el => {
        addItem(el.name);
      });
      spinner.classList.add('spinner_hidden');
    })
    .catch(err => {
      alert('Failed to load data');
    });
};
