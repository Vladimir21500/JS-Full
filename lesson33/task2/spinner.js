const spinner = document.querySelector('.spinner_hidden');

export const showSpinner = () => {
  spinner.classList.remove('spinner_hidden');
};

export const hideSpinner = () => {
  spinner.classList.add('spinner_hidden');
};
