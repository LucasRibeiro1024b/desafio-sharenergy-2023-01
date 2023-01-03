const { clientsService } = require('../services');
const statusCode = require('./statusCode');

async function getAll(_req, res) {
  const payload = await clientsService.getAll();

  return res.status(statusCode.ok).json(payload);
}

module.exports = {
  getAll,
};
