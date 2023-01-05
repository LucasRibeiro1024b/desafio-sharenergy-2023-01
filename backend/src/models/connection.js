const mongoose = require('mongoose');
require('dotenv').config();

const CONNECTION_STRING = process.env.CONNECTION_STRING;

const connection = async function (string = CONNECTION_STRING) {
  try {
    await mongoose.connect(string);
  } catch (err) {
    console.error(err);
  }
}

module.exports = connection;
