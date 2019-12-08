const express = require('express');
const router = express.Router();
const hebCtrl = require('../controllers/heb');

router.get('/', hebCtrl.index);
router.post('/', hebCtrl.create);
router.delete('/:id', hebCtrl.delete);

module.exports = router;