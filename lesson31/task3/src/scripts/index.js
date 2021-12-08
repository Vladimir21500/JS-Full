/* eslint-disable prettier/prettier */

import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
import { getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then(tasksList => {
    renderTasks();
  });

  initTodoListHandlers();
});

/* 
1.Get data from server
2.Save data to front-end storage
*/
