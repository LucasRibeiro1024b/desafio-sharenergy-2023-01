const { Schema } = require('mongoose');

const Client = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phoneNumber: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    cpf: { type: String, required: true, trim: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

module.exports = Client;
