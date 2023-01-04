const mongoose = require('mongoose');
const { Client } = require('../models');
const { validateCreateBody } = require('../utils');

function checkConnection() {
  if (mongoose.connection.readyState !== 1) return null;

  return true;
}

async function getAll() {
  if (!checkConnection()) return null;

  try {
    const response = await Client.find();

    return response;

  } catch (err) {
    console.error(err);

    return null;
  }
}

async function create({ name, email, phoneNumber, address, cpf }) {
  if (!checkConnection()) return null;

  if (!validateCreateBody({ name, email, phoneNumber, address, cpf })) {
    return 'Bad Request';
  }

  try {
    const response = await Client.create({
      name: name.toLowerCase(),
      email: email.toLowerCase(),
      phoneNumber,
      address,
      cpf,
    });

    return response;

  } catch (err) {
    console.error(err);

    return null;
  }
}

module.exports = {
  getAll,
  create,
};
