const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://ingweb:ingweb@cluster0.7jtxs.mongodb.net/nodelab?retryWrites=true&w=majority')
  .then(() => {
    console.log('Database connected');
  })
  .catch(() => {
    console.log('Database connection error');
  });
