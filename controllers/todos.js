const User = require('../models/user');

module.exports = {
  index,
  create,
  delete: deleteTodo,
  update
};

function update(req, res, next) {
  User.findById(req.session.passport.user, function (err, user) {
    for (var i = 0; i < user.todos.length; i++) {
      if (user.todos[i]._id == req.body._id) {
        user.todos[i].content = req.body.content
        break; 
      }
    }
    user.save(function (err) {
      if (err) return next(err)
      res.redirect(`/todos`)
    });
  });
};

// function update(req, res) {
//   User.update(req.params.id, req.body);
//   res.redirect('/todos');
// };

// function edit(req, res) {
//   const todo = User.getOne(req.params.id);
//   res.render('todos/edit', {
//     todo,
//     idx: req.params.id
//   });
// };

function deleteTodo(req, res) {
  User.findById(req.session.passport.user).exec(function (err, user) {
    user.todos.id(req.params.id).remove();
    user.save(function (err) {
      if (err) return next(err);
      res.redirect('/todos');
    });
  });
};

function create(req, res, next) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  User.findById(req.session.passport.user).exec(function (err, user) {
    user.todos.push(req.body)
    user.save(function (err) {
      if (err) return next(err);
      res.render('todos/index', { user });
    });
  });
};

function index(req, res) {
  User.findById(req.session.passport.user).exec(function (err, user) {
    if (err) return next(err);
    res.render('todos/index', { user });
  });
};
