const { Client } = require('../models');

async function getAll() {
  try {
    const response = await Client.find();

    return response;

  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  getAll,
};
