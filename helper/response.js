const Response = {
  Success(isSuccess, data, message) {
    this.success = isSuccess || true;
    this.message = message;
    this.data = data || [];
    return this;
  },
  Error(isSuccess, message) {
    this.success = isSuccess;
    this.message = message;
    return this;
  },
};

module.exports = Response;
