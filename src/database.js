const mongoose = require('mongoose');
const { DATABASE_URI } = require('./config');

mongoose
  .connect(DATABASE_URI)
  .then(() => {
    console.log('Database connected');
  })
  .catch(() => {
    console.log('Database connection error');
  });
