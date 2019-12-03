const todos = [
    {todo: 'Homework'},
    {todo: 'Buy Milk'}
];

module.exports = {
  getAll,
  create
};

function create(todo) {
  todos.push(todo);
};

function getAll() {
  return todos;
};
