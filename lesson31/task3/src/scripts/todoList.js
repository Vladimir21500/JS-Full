/* eslint-disable prettier/prettier */

import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';
import { onDeleteTask } from './deleteTask.js';

export const initTodoListHandlers = () => {
  const buttonElem = document.querySelector('.create-task-btn');
  buttonElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  console.log(todoListElem);
  todoListElem.addEventListener('click', onToggleTask);

  const listItemElems = Array.from(document.querySelectorAll('.list-item'));
  console.log(listItemElems);
  listItemElems.forEach(item => {
    item.addEventListener('click', onDeleteTask);
  });
};
