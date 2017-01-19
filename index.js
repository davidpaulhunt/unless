module.exports = (conditions, action) => {
  if (!conditions) {
    return Promise.resolve(action);
  }

  return Promise.resolve();
};
