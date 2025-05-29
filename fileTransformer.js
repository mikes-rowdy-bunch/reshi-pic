// fileTransformer.js
module.exports = {
  process() {
    return 'module.exports = "test-file-stub";';
  },
  getCacheKey() {
    // The output is always the same
    return 'fileTransformer';
  },
};
