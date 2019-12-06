const express = require('express');
const router = express.Router();
const ttodosCtrl = require('../controllers/ttodos');

router.get('/', ttodosCtrl.index);
router.post('/', ttodosCtrl.create);
router.delete('/:id', ttodosCtrl.delete);

module.exports = router;