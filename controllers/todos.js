const User = require('../models/user');

module.exports = {
  index,
  create,
  delete: deleteTodo
  // update
};

// function update(req, res, next) {
//   User.findById(req.user, function (err, user) {
//     for (var i = 0; i < user.todos.length; i++) {
//       if (user.todos[i]._id == req.body._id) {
//         user.todos[i].content = req.body.content
//         break; 
//       }
//     }
//     req.user.save(function (err) {
//       if (err) return next(err)
//       res.redirect(`/todos`)
//     });
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
  User.findById(req.user).exec(function (err, user) {
    req.user.todos.push(req.body)
    req.user.save(function (err) {
      if (err) return next(err);
      res.redirect('todos/');
    });
  });
};


function index(req, res) {
  User.findById(req.session.passport.user).exec(function (err, user) {
    if (err) return next(err);
    res.render('todos/index', { user });
  });
};
