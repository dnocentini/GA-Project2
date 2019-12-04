const express = require('express');
const router = express.Router();
const shopsCtrl = require('../controllers/shops');

router.get('/', shopsCtrl.index);
router.post('/', shopsCtrl.create);
router.delete('/:id', shopsCtrl.delete);

module.exports = router;