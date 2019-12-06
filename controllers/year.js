const User = require('../models/user');

module.exports = {
  index,
  create,
  delete: deleteTodo
};


function deleteTodo(req, res) {
  User.findById(req.user).exec(function (err, user) {
    req.user.year.id(req.params.id).remove();
    req.user.save(function (err) {
      if (err) return next(err);
      res.redirect('/year');
    });
  });
};

function create(req, res, next) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  User.findById(req.user).exec(function (err, user) {
    req.user.year.push(req.body)
    req.user.save(function (err) {
      if (err) return next(err);
      res.redirect('year/');
    });
  });
};


function index(req, res) {
  User.findById(req.user).exec(function (err, user) {
    if (err) return next(err);    
    res.render('year/index', { user });
  });
};
