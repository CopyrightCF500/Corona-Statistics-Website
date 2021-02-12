const express = require('express');
const statsController = require('../controllers/statsController');

const router = express.Router();

router.get('/', statsController.renderStatsPage);

router.post('/', statsController.getStateStats);

module.exports = router;