const Promise = require('bluebird');

module.exports = (conditions, action) => {
  if (conditions instanceof Promise) {
    return conditions
    .then(result => result ? Promise.resolve(action()) : Promise.resolve());
  }

  if (!conditions) {
    return Promise.resolve(action());
  }

  return Promise.resolve();
};
