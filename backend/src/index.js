require('dotenv').config();
const app = require('./app');
const { connection } = require('./models');

const PORT = process.env.PORT || 3001;

connection();
app.listen(PORT, console.log('Online'));
