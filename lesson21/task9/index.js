const checkboxElem = document.querySelector('.task-status');

function handleClick(event) {
  console.log(event.target.checked);
}

checkboxElem.addEventListener('change', handleClick);
