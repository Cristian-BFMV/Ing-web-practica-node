const express = require('express');
const cors = require('cors');
const customerRouter = require('./customer/customer.routes');
require('./config');
require('./database');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/customer', customerRouter);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
