const Todo = require('../models/todo');

module.exports = {
  index,
  create,
  delete: deleteTodo,
  edit,
  update
};

function update(req, res) {
  Todo.update(req.params.id, req.body);
  res.redirect('/todos');
};

function edit(req, res) {
  const todo = Todo.getOne(req.params.id);
  res.render('todos/edit', {
    todo,
    idx: req.params.id
  });
};

function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect('/todos');
};

function create(req, res) {
  req.body.done = false;
  Todo.create(req.body);
  res.redirect('/todos');
};

function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll(),
    time: req.time,
    idx: req.params.id
  });
};

