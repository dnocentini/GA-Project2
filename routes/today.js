const express = require('express');
const router = express.Router();
const todayCtrl = require('../controllers/today');

router.get('/', todayCtrl.index);
router.post('/', todayCtrl.create);
router.delete('/:id', todayCtrl.delete);

module.exports = router;