const express = require('express');
const router = express.Router();
const ytodosCtrl = require('../controllers/ytodos');

router.get('/', ytodosCtrl.index);
router.post('/', ytodosCtrl.create);
router.delete('/:id', ytodosCtrl.delete);

module.exports = router;