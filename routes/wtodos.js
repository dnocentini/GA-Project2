const express = require('express');
const router = express.Router();
const wtodosCtrl = require('../controllers/wtodos');

router.get('/', wtodosCtrl.index);
router.post('/', wtodosCtrl.create);
router.delete('/:id', wtodosCtrl.delete);

module.exports = router;