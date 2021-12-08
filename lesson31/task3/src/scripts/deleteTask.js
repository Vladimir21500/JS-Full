import { deleteTask } from './tasksGateway.js';

export const onDeleteTask = event => {
  const isDeleteButton = event.target.classList.contains('list-item__delete-btn');

  console.log(isDeleteButton);
  if (!isDeleteButton) return;

  const taskId = event.target.dataset.id;
  deleteTask(taskId);
};
