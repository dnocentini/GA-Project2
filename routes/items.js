const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');

router.get('/', itemsCtrl.index);
router.post('/', itemsCtrl.create);
router.delete('/:id', itemsCtrl.delete);

module.exports = router;