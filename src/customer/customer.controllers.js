const customerService = require('./customer.service');
const BaseError = require('../errors/baseError');

const getCustomerController = async (__, res) => {
  try {
    const customers = await customerService.getCustomerService();
    return res.status(200).json(customers);
  } catch (error) {
    if (error instanceof BaseError) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

const getCustomerByIdController = async (req, res) => {
  try {
    const { customerId } = req.params;
    const customer = await customerService.getCustomerByIdService(customerId);
    return res.status(200).json(customer);
  } catch (error) {
    if (error instanceof BaseError) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

const createCustomerController = async (req, res) => {
  try {
    const customer = req.body;
    const newCustomer = await customerService.createCustomerService(customer);
    return res.status(200).json(newCustomer);
  } catch (error) {
    if (error instanceof BaseError) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

const updateCustomerController = async (req, res) => {
  try {
    const customer = req.body;
    const { customerId } = req.params;
    const updatedCustomer = await customerService.updateCustomerService(customerId, customer);
    return res.status(200).json(updatedCustomer);
  } catch (error) {
    if (error instanceof BaseError) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

const deleteCustomerController = async (req, res) => {
  try {
    const { customerId } = req.params;
    await customerService.deleteCustomerService(customerId);
    return res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    if (error instanceof BaseError) return res.status(error.getStatusCode()).json({ message: error.getErrorMessage() });
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

module.exports = {
  getCustomerController,
  getCustomerByIdController,
  createCustomerController,
  updateCustomerController,
  deleteCustomerController,
};
