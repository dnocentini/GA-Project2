const User = require('../models/user');

module.exports = {
  index,
  create,
  delete: deleteShop
};


function deleteShop(req, res) {
  User.findById(req.user).exec(function (err, user) {
    req.user.shops.id(req.params.id).remove();
    req.user.save(function (err) {
      if (err) return next(err);
      res.redirect('/shops');
    });
  });
};

function create(req, res, next) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  User.findById(req.user).exec(function (err, user) {
    req.user.shops.push(req.body)
    req.user.save(function (err) {
      if (err) return next(err);
      res.redirect('shops/');
    });
  });
};


function index(req, res) {
  User.findById(req.user).exec(function (err, user) {
    if (err) return next(err);
    res.render('shops/index', { user });
  });
};
