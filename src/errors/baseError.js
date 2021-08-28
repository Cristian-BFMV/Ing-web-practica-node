class BaseError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }

  getErrorMessage = () => this.message;

  getStatusCode = () => this.statusCode;
}

module.exports = BaseError;
