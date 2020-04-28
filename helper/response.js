const Response = {
  Success(isSuccess, data, message) {
    this.success = isSuccess || true;
    this.message = message;
    this.data = data || [];
    return this;
  },
  Error(isSuccess, message, error) {
    this.success = isSuccess;
    this.message = message;
    this.error = error;
    return this;
  },
};

module.exports = Response;
