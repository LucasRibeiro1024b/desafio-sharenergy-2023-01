const { model } = require('mongoose');
const { ClientSchema } = require('../schemas');

module.exports = model('Client', ClientSchema);
