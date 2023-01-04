const mongoose = require('mongoose');
const { Client } = require('../models');
const { validateClient } = require('../utils');

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

  if (!validateClient({ name, email, phoneNumber, address, cpf })) {
    return 'Bad Request';
  }

  try {
    const response = await Client.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phoneNumber: phoneNumber.trim(),
      address: address.trim(),
      cpf: cpf.trim(),
    });

    return response;

  } catch (err) {
    console.error(err);

    return null;
  }
}

async function update({ name, email, phoneNumber, address, cpf, _id }) {
  if (!checkConnection()) return null;

  if (!validateClient({ name, email, phoneNumber, address, cpf })) {
    return 'Bad Request';
  }

  try {
    const response = await Client.updateOne({ _id }, {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phoneNumber: phoneNumber.trim(),
      address: address.trim(),
      cpf: cpf.trim(),
    });

    return response.modifiedCount === 1 ? true : 'Bad Request';

  } catch (err) {
    console.error(err);

    return null;
  }
}

module.exports = {
  getAll,
  create,
  update,
};
