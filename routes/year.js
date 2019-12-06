const express = require('express');
const router = express.Router();
const yearCtrl = require('../controllers/year');

router.get('/', yearCtrl.index);
router.post('/', yearCtrl.create);
router.delete('/:id', yearCtrl.delete);

module.exports = router;