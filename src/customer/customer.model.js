const { Schema, model } = require('mongoose');

const Customer = new Schema(
  {
    firtsName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
  },
  {
    versionKey: false,
  }
);

module.exports = model('Customer', Customer);
