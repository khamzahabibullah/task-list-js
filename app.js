// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('#task-list');
const clearBtn = document.querySelector('#clear-btn');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners

loadEventListeners();

function loadEventListeners() {
  form.addEventListener('submit', addTask);
}

function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }

  const li = document.createElement('li');
  li.classList = 'flex justify-between border-2 border-gray-300 p-3';
  li.innerText = taskInput.value;

  const link = document.createElement('a');
  link.classList = 'text-red-500 cursor-pointer';
  link.innerHTML = '<i class="fa fa-remove"></i>';

  li.appendChild(link);

  taskList.appendChild(li);

  taskInput.value = '';

  e.preventDefault();
}
