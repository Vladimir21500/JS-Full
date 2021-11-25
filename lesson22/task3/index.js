/* 
1. клик на чекбокс должен переключаться и список обновляться
2. при нажатии на кнопку должна создаваться новая запись
если поле не пустое, поле должно очищаться после добавления

*/

const listElem = document.querySelector(`.list`);

const tasks = [
  { text: `Buy milk`, done: false },
  { text: `Pick up Tom from airport`, done: false },
  { text: `Visit party`, done: false },
  { text: `Visit doctor`, done: true },
  { text: `Buy meat`, done: true },
];

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement(`li`);
      listItemElem.classList.add(`list__item`);
      listItemElem.id = `number${index}`;
      const checkbox = document.createElement(`input`);
      checkbox.setAttribute(`type`, `checkbox`);
      checkbox.setAttribute(`data-id`, `${index}`);
      checkbox.checked = done;
      checkbox.classList.add(`list__item-checkbox`);
      if (checkbox.checked) {
        listItemElem.classList.add(`list__item_done`);
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

const checkBoxChanged = (event) => {
  const isChecked = event.target.classList.contains(`list__item-checkbox`);
  if (!isChecked) return;
  /* const idCheckbox = event.target.dataset.id;
  const doneCheckbox = event.target.checked;
  document.querySelector(`[data-id="${idCheckbox}"]`).checked = doneCheckbox; */
  const doneCheckbox = event.target.checked;
  const idCheckbox = event.target.dataset.id;
  document.querySelector(`[data-id="${idCheckbox}"]`).checked = doneCheckbox;
};

listElem.addEventListener(`click`, checkBoxChanged);

renderTasks(tasks);
