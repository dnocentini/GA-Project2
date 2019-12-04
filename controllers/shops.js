const Shop = require('../models/user');

module.exports = {
  index,
  create,
  delete: deleteItem
};

function deleteItem(req, res) {
  Shop.deleteOne(req.params.id);
  res.redirect('/shops');
};

function create(req, res) {
  req.body.done = false;
  Shop.create(req.body);
  res.redirect('/shops');
};

function index(req, res) {
  res.render('shops/index', {
    shops: Item.getAll()
  });
};
