const { clientsService } = require('../services');
const statusCode = require('./statusCode');

async function getAll(_req, res) {
  const payload = await clientsService.getAll();

  if (payload === null) {
    return res
      .status(statusCode.serverError)
      .json({ message: 'Internal Server Error' });
  }

  return res.status(statusCode.ok).json(payload);
}

async function create(req, res) {
  const { name, email, phoneNumber, address, cpf } = req.body;

  const payload = await clientsService
    .create({ name, email, phoneNumber, address, cpf });

  if (typeof payload === 'string') {
    return res
      .status(statusCode.badRequest)
      .json({ message: payload });
  }

  if (payload === null) {
    return res
      .status(statusCode.serverError)
      .json({ message: 'Internal Server Error' });
  }

  return res.status(statusCode.noContent).end();
}

async function update(req, res) {
  const { _id } = req.params;
  const { name, email, phoneNumber, address, cpf } = req.body;

  const payload = await clientsService
    .update({ name, email, phoneNumber, address, cpf, _id });

  if (typeof payload === 'string') {
    return res
      .status(statusCode.badRequest)
      .json({ message: payload });
  }

  if (payload === null) {
    return res
      .status(statusCode.serverError)
      .json({ message: 'Internal Server Error' });
  }

  return res.status(statusCode.noContent).end();
}

module.exports = {
  getAll,
  create,
  update,
};
