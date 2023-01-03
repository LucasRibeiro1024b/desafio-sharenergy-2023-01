const express = require('express');
const cors = require('cors');
const { clientsRouter } = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(clientsRouter);

module.exports = app;
