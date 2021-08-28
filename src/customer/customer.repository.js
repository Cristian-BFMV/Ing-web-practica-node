const Customer = require('./customer.model');
const DatabaseError = require('../errors/databaseError');

const getCustomerRepository = async () => {
  try {
    return await Customer.find();
  } catch (error) {
    throw new DatabaseError('Lo sentimos, ha ocurrido un problema');
  }
};

const getCustomerByIdRepository = async customerId => {
  try {
    return await Customer.findById(customerId);
  } catch (error) {
    throw new DatabaseError('Lo sentimos, ha ocurrido un problema');
  }
};

const createCustomerRepository = async customer => {
  try {
    const newCustomer = new Customer(customer);
    return await newCustomer.save();
  } catch (error) {
    throw new DatabaseError('Lo sentimos, ha ocurrido un problema');
  }
};

const updateCustomerRepository = async (customerId, customer) => {
  try {
    return await Customer.findByIdAndUpdate(customerId, customer, {
      new: true,
    });
  } catch (error) {
    throw new DatabaseError('Lo sentimos, ha ocurrido un problema');
  }
};

const deleteCustomerRepository = async customerId => {
  try {
    return await Customer.findByIdAndDelete(customerId);
  } catch (error) {
    throw new DatabaseError('Lo sentimos, ha ocurrido un problema');
  }
};

module.exports = {
  getCustomerRepository,
  getCustomerByIdRepository,
  createCustomerRepository,
  updateCustomerRepository,
  deleteCustomerRepository,
};
