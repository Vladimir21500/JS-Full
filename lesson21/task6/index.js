const clickBtn = document.querySelector(`.single-use-btn`);

function oneClick() {
  console.log(`clicked`);
  clickBtn.removeEventListener(`click`, oneClick);
}
clickBtn.addEventListener(`click`, oneClick);
