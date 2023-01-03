const express = require('express');
const router = express.Router();
const { clientsController } = require('../controllers');

router.get('/clients', clientsController.getAll);

module.exports = router;
