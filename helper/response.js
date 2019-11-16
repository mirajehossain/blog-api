const Response = {
  Success(isSuccess, data, message, st_at, end_at, count) {
    this.success = isSuccess || true;
    this.message = message;
    this.data = data || [];
    this.st_at = st_at || 0;
    this.end_at = end_at || 0;
    this.count = count || 0;
    return this;
  },
  Error(isSuccess, message) {
    this.success = isSuccess;
    this.message = message;
    return this;
  },
};

module.exports = Response;
