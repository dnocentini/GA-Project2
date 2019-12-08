const express = require('express');
const router = express.Router();
const costcoCtrl = require('../controllers/costco');

router.get('/', costcoCtrl.index);
router.post('/', costcoCtrl.create);
router.delete('/:id', costcoCtrl.delete);

module.exports = router;