const express = require('express');
const router = express.Router();
const walmartCtrl = require('../controllers/walmart');

router.get('/', walmartCtrl.index);
router.post('/', walmartCtrl.create);
router.delete('/:id', walmartCtrl.delete);

module.exports = router;