const express = require('express');
const router = express.Router();
const { clientsController } = require('../controllers');

router.get('/clients', clientsController.getAll);
router.post('/clients', clientsController.create);
router.put('/clients/:_id', clientsController.updateOne);
router.delete('/clients/:_id', clientsController.deleteOne);

module.exports = router;
