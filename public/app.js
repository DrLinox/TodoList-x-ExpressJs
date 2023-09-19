const form = document.querySelector('.todo-form');
const input = document.querySelector('.input');
const todoList = document.querySelector('.todo-list');
const items = document.querySelector('.items');
const btnTrash = document.querySelector('.fa-trash');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let value = input.value;
  input.value = '';
  const items = document.createElement('div');
  items.classList.add('items');
  todoList.append(items);
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.id = 'check_' + Math.random();
  items.append(checkbox);
  const todoItem = document.createElement('li');
  todoItem.classList.add('todo-item');
  todoItem.textContent = value;
  items.append(todoItem);
  const btnTrash = document.createElement('button');
  btnTrash.classList.add('fa-solid');
  btnTrash.classList.add('fa-trash');
  items.append(btnTrash);
  checkbox.addEventListener('change', () => {
    const checkboxId = checkbox.id;
    const isChecked = checkbox.checked;
    localStorage.setItem(checkboxId, isChecked);
  });
  btnTrash.addEventListener('click', () => {
    // Remove the parent 'div' element containing the checkbox, item, and trash icon.
    todoList.removeChild(items);
    saveData();
  });
  saveData();
});

const saveData = () => {
  localStorage.setItem('data', todoList.innerHTML);
};
const showTask = () => {
  todoList.innerHTML = localStorage.getItem('data');
  // Add event listeners to the newly displayed trash icons.
  const trashIcons = document.querySelectorAll('.fa-trash');
  trashIcons.forEach((btnTrash) => {
    btnTrash.addEventListener('click', () => {
      const items = btnTrash.parentElement;
      todoList.removeChild(items);
      saveData();
    });
  });
  const checkboxes = document.querySelectorAll('.items input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const checkboxId = checkbox.id;
      const isChecked = checkbox.checked;
      localStorage.setItem(checkboxId, isChecked);
    });
    const checkboxId = checkbox.id;
    const isCheckedInLocalStorage = localStorage.getItem(checkboxId) === 'true';

    // Check if there is a corresponding entry in localStorage.
    if (isCheckedInLocalStorage) {
      checkbox.checked = true; // Set the checkbox as checked.
    } else {
      checkbox.checked = false; // Set the checkbox as unchecked.
    }
  });
};
showTask();
