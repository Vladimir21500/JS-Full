function handleClick(event) {
  console.log(event.target.dataset.pageNumber);
}

const paginationPages = document
  .querySelectorAll(`.pagination__page`)
  .forEach((page) => {
    page.addEventListener(`click`, handleClick);
  });
