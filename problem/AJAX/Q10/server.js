const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

let tasks = [];
let idCounter = 1;

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/add', (req, res) => {
  const task = { id: idCounter++, text: req.body.text };
  tasks.push(task);
  res.json(task);
});

app.post('/update/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.text = req.body.text;
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

app.post('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
