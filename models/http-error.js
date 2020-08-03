class HttpError extends Error {
  constructor(message, errorCode) {
    super(message, errorCode); // Add message property to instance
  }
}

module.exports = HttpError;
