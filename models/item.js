const items = [
    {item: 'Milk'},
    {item: 'Banana'}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};

function deleteOne(id) {
  items.splice(id, 1);
};

function create(item) {
  items.push(item);
};

function getOne(id) {
  return items[id];
};

function getAll() {
  return items;
};