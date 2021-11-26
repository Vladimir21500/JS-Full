/* 
1. клик на чекбокс должен переключаться и список обновляться
2. при нажатии на кнопку должна создаваться новая запись
если поле не пустое, поле должно очищаться после добавления

*/

const listElem = document.querySelector(`.list`);
const actionsElem = document.querySelector(`.actions`);

const tasks = [
  { id: 0, text: `Buy milk`, done: true },
  { id: 1, text: `Pick up Tom from airport`, done: false },
  { id: 2, text: `Visit party`, done: false },
  { id: 3, text: `Visit doctor`, done: false },
  { id: 4, text: `Buy meat`, done: true },
];

const renderTasks = (tasksList) => {
  listElem.innerHTML = ``;
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map((task, index) => {
      task.id = index;
      return task;
    })
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement(`li`);
      listItemElem.classList.add(`list__item`);
      const checkbox = document.createElement(`input`);
      checkbox.classList.add(`list__item-checkbox`);
      checkbox.setAttribute(`type`, `checkbox`);
      checkbox.setAttribute(`data-id`, `${id}`);
      checkbox.checked = done;

      if (checkbox.checked) listItemElem.classList.add(`list__item_done`);
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

const checkBoxChanged = (event) => {
  const isChecked = event.target.classList.contains(`list__item-checkbox`);
  if (!isChecked) return;

  const doneCheckbox = event.target.checked;
  const idCheckbox = event.target.dataset.id;

  tasks.find((task) => task.id === +idCheckbox).done = doneCheckbox;
  renderTasks(tasks);
};

const addTask = (event) => {
  const isPush = event.target.classList.contains(`create-task-btn`);
  if (!isPush) return;

  const taskText = document.querySelector(`.task-input`).value;
  if (taskText) {
    tasks.push({ id: tasks.length, text: taskText, done: false });
  }
  document.querySelector(`.task-input`).value = ``;
  renderTasks(tasks);
};

listElem.addEventListener(`click`, checkBoxChanged);

actionsElem.addEventListener(`click`, addTask);

renderTasks(tasks);
