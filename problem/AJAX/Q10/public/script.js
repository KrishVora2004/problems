document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
  fetch('/tasks')
    .then(res => res.json())
    .then(tasks => {
      const list = document.getElementById('taskList');
      list.innerHTML = '';
      tasks.forEach(task => addToDOM(task));
    });
}

function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value;
  if (!text) return;

  fetch('/add', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ text })
  })
  .then(res => res.json())
  .then(task => {
    addToDOM(task);
    input.value = '';
  });
}

function addToDOM(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    <input value="${task.text}" onchange="updateTask(${task.id}, this.value)">
    <button onclick="deleteTask(${task.id}, this)">Delete</button>
  `;
  document.getElementById('taskList').appendChild(li);
}

function updateTask(id, newText) {
  fetch(`/update/${id}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ text: newText })
  });
}

function deleteTask(id, btn) {
  fetch(`/delete/${id}`, {
    method: 'POST'
  }).then(() => {
    btn.parentElement.remove();
  });
}
