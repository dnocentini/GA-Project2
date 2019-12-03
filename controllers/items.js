const Item = require('../models/item');

module.exports = {
  index,
  create,
  delete: deleteItem
};

function deleteItem(req, res) {
  Item.deleteOne(req.params.id);
  res.redirect('/items');
};

function create(req, res) {
  req.body.done = false;
  Item.create(req.body);
  res.redirect('/items');
};

function index(req, res) {
  res.render('items/index', {
    items: Item.getAll()
  });
};
