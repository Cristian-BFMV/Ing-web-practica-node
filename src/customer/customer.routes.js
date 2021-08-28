const router = require('express').Router();
const customerController = require('./customer.controllers');

router.get('/', customerController.getCustomerController);
router.get('/:customerId', customerController.getCustomerByIdController);
router.post('/', customerController.createCustomerController);
router.put('/:customerId', customerController.updateCustomerController);
router.delete('/:customerId', customerController.deleteCustomerController);

module.exports = router;
