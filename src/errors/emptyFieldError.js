const BaseError = require('./baseError');

class EmptyFieldError extends BaseError {
  constructor(message) {
    super(message, 400);
  }
}

module.exports = EmptyFieldError;
