const express = require('express');
const router = express.Router();
const weekCtrl = require('../controllers/week');

router.get('/', weekCtrl.index);
router.post('/', weekCtrl.create);
router.delete('/:id', weekCtrl.delete);

module.exports = router;