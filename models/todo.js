const todos = [
    {todo: 'Homework'},
    {todo: 'Buy Milk'}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function deleteOne(id) {
  todos.splice(id, 1);
};

function create(todo) {
  todos.push(todo);
};

function getOne(id) {
  return todos[id];
};

function getAll() {
  return todos;
};
