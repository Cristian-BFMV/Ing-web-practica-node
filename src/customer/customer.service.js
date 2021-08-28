const customerRepository = require('./customer.repository');
const EmptyFieldError = require('../errors/emptyFieldError');

const getCustomerService = async () => {
  return await customerRepository.getCustomerRepository();
};

const getCustomerByIdService = async customerId => {
  return await customerRepository.getCustomerByIdRepository(customerId);
};

const createCustomerService = async customer => {
  const { firtsName, lastName, email, phoneNumber } = customer;

  if (firtsName === '' || lastName === '' || email === '' || phoneNumber === '')
    throw new EmptyFieldError('No puede dejar campos vacios');

  return await customerRepository.createCustomerRepository(customer);
};

const updateCustomerService = async (customerId, customer) => {
  const { firtsName, lastName, email, phoneNumber } = customer;

  if (firtsName === '' || lastName === '' || email === '' || phoneNumber === '')
    throw new EmptyFieldError('No puede dejar campos vacios');

  return await customerRepository.updateCustomerRepository(customerId, customer);
};

const deleteCustomerService = async customerId => {
  return await customerRepository.deleteCustomerRepository(customerId);
};

module.exports = {
  getCustomerService,
  getCustomerByIdService,
  createCustomerService,
  updateCustomerService,
  deleteCustomerService,
};
