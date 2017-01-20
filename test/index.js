const vows = require('vows');
const assert = require('assert');
const unless = require('../index');

vows.describe('Unless').addBatch({
  'when condition is true (1)': {
    topic() {
      unless(true, () => {
        return false;
      })
      .then((r) => {
        if (typeof r === 'undefined') return true;

        return r;
      })
      .asCallback(this.callback);
    },

    'returns true': (topic) => {
      assert.equal(topic, true);
    },
  },

  'when condition is false (1)': {
    topic() {
      unless(false, () => true)
      .then((r) => {
        if (typeof r === 'undefined') return false;

        return r;
      })
      .asCallback(this.callback);
    },

    'returns true': (topic) => {
      assert.equal(topic, true);
    },
  },

  'when condition is true (2)': {
    topic() {
      let foo = 'hello world';
      unless(true, () => {
        foo = 'world hello';
      })
      .then(() => foo)
      .asCallback(this.callback);
    },

    'returns "hello world"': (topic) => {
      assert.equal(topic, 'hello world');
    },
  },

  'when condition is false (2)': {
    topic() {
      let foo = 'hello world';
      unless(false, () => {
        foo = 'world hello';
      })
      .then(() => foo)
      .asCallback(this.callback);
    },

    'returns "world hello"': (topic) => {
      assert.equal(topic, 'world hello');
    },
  },
}).run();
