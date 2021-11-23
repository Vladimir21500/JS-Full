`use strict`;

export const tasks = [
  { text: `Buy milk`, done: false },
  { text: `Pick up Tom from airport`, done: false },
  { text: `Visit party`, done: false },
  { text: `Visit doctor`, done: true },
  { text: `Buy meat`, done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = (tasksList) => {
  const listElem = document.querySelector(`.list`);

  const listItemsElems = tasksList.map(({ text, done }) => {
    const listItemElem = document.createElement(`li`);
    listItemElem.classList.add(`list__item`);
    const checkboxElem = document.createElement(`input`);
    checkboxElem.classList.add(`list__item-checkbox`);
    checkboxElem.setAttribute(`type`, `checkbox`);
    checkboxElem.checked = done;
    if (done) {
      listItemElem.classList.add(`list__item_done`);
    }
    listItemElem.append(checkboxElem, text);

    return listItemElem;
  });

  listElem.append(...listItemsElems);
};

renderTasks(tasks);
