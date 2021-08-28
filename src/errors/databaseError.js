const BaseError = require('./baseError');

class DatabaseError extends BaseError {
  constructor(message) {
    super(message, 500);
  }
}

module.exports = DatabaseError;
