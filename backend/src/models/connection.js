const mongoose = require('mongoose');

const stringConnection = 'mongodb://localhost:27017/desafiosharenergy-gpm';

const connection = async function (string = stringConnection) {
  try {
    await mongoose.connect(string);
  } catch (err) {
    console.error(err);
  }
}

module.exports = connection;
