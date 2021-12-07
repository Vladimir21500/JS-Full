const baseUrl = 'https://crudcrud.com/api/de44b989d2c34b22a7c33c0f009353d1/tasks';

const mapTasks = tasks => {
  return tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id }));
};

export const getTasksList = () => {
  return fetch(baseUrl)
    .then(response => response.json())
    .then(tasks => mapTasks(tasks));
};

export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (updatedTaskData, taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTaskData),
  });
};

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};
